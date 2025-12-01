import { IncomingMessage, ServerResponse } from "http";
import { readProduct, writeProduct } from "../services/product.service";
import { Iproduct } from "../types/product.interface";
import { parseBody } from "../utlity/parseBody";

export const productController = async (req:IncomingMessage, res:ServerResponse) => {
    const url = req.url;
    const method = req.method;

    const urlPart = url?.split('/') // ./products/12 > ['', 'product', 123]
    const id = urlPart && urlPart[1] === 'products' ? Number(urlPart[2]) : null;
   
    if (method === "GET" && url === "/products") {
         const products = readProduct()
         res.writeHead(200, { "content-Type": "application/json" });
         res.end(JSON.stringify({ message: "Products route", data : products }));
         return
    }else if(method === "GET" && id !== null){
         const products = readProduct();
         const product = products.find((p:Iproduct)=> p.id === id);

         res.writeHead(200, { "content-Type": "application/json" });
         res.end(JSON.stringify({ message: "single route", data : product }));
         return
    }else if(method === 'POST' && url === '/products'){
        const body = await parseBody(req)
        const products = readProduct();

        const newProduct = {
            id : Date.now(),
            ...body
        }
        products.push(newProduct)
        writeProduct(products)

        res.writeHead(201, { "content-Type": "application/json" });
        res.end(JSON.stringify({ message: "products created successfull", data : newProduct }));
         return
    }else if(method === "PUT" && id !== null){
        const body = await parseBody(req)
        const products = readProduct();
        const index = products.findIndex((p:Iproduct) => p.id === id)
        if(index <0){
             res.writeHead(201, { "content-Type": "application/json" });
             res.end(JSON.stringify({ message: "product not found"}));
             return
        }
        products[index] = {id: products[index].id, ...body}
        writeProduct(products)
        res.writeHead(201, { "content-Type": "application/json" });
        res.end(JSON.stringify({ message: "products updated successfull", data : products[index] }));
         return
    }else if(method === "DELETE" && id !== null){
        const products = readProduct();
        const index = products.findIndex((p:Iproduct) => p.id === id)
         if(index < 0 ){
             res.writeHead(201, { "content-Type": "application/json" });
             res.end(JSON.stringify({ message: "product not found"}));
             return
        }
        products.splice(index, 1)
        writeProduct(products);
        res.writeHead(200, { "content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Deleted successfully"}));
        return
    }

}