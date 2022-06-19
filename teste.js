function toDecimal(dec){

    let decimal = 0;
    for(let i = 0; i < dec.length; i++){
        decimal = decimal + (dec[i]*(2**(dec.length-i-1)))
    }
    
    return decimal;
}

function toArray(str){
       var myArr = String(str).split("").map((str)=>{
            return Number(str)
        })
        return myArr;
    }

console.log(toDecimal(toArray('a')))