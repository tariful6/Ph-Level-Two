import { IncomingMessage, ServerResponse } from "http";
import { productController } from "../controller/product.controoller";

export const productRoute = (req:IncomingMessage, res:ServerResponse) => {
    // console.log(req.url);
    // console.log(req.method);

    const url = req.url;
    const method = req.method;
    // console.log("product", url);

    if (method === "GET" && url === "/") {
       res.writeHead(200, { "content-Type": "application/json" });
       res.end(JSON.stringify({ message: "Root url api" }));
    }
    else if(url?.startsWith("/products")){
        productController(req, res);
    }
    
    else{
       res.writeHead(200, { "content-Type": "application/json" });
       res.end(JSON.stringify({ message: "Sorry there empty data" }));
    }
}