{
    console.log(a); // it give undifined..
    var a;

    // console.log(b); // it gives error..
    // let b



// only var is a global scope -----------

    let num = 5;
    function sum (){
        let num2 = 10;
        console.log(num); // it gives 5
    }
    sum();
    // console.log(num2); // it cannot find num2...
}


