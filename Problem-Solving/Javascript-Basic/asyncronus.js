// asyncronus ---------------

function doTask (tm){
    setTimeout(()=>{
    console.log("task done");
    },tm)
}
doTask(2000)

// asyncronus function  -------------------------

function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("data fetch successful")
        },1000)
    });
}

const asyncTsk = async() =>{
    try{
        const res = await fetchData();
        console.log(res);
    }
    catch(error){ 
        console.log(error);
    }
}
asyncTsk()