// higher order function take function as a parametter and return a function


function greeting (name) {
    console.log("HEllo " + name );
}

function higherOrder(func){
    return function nameGiving(){
        func("Tariful");
    }
}

higherOrder(greeting)();