//todo: forEachArray Function:


function forEach(arr, callback){
  for(let i =0; i<arr.length; i++){
    callback(arr[i],i,arr)
  }
}


let arr = [1,2,3,4,5,5]

forEach(arr, (ele)=>{
  console.log(ele);
  
})






```
// Array.prototype.forEachonefunction=function(callback){
//   for(let i =0; i< this.length; i++){
//     callback(this[i], i, this)
//   }
// }



// Array.prototype.forEachTwofunction = function(callback,context){
//   if(typeof callback !== "function"){
//     throw "This is an error"
//   }

//   const length = this.length
//   for(let i = 0; i<length; i++){
//     if(this.hasOwnProperty(i)){
//       callback.call(context,this[i],i,this)
//     }
//   }
// }

// let arr = [1,2,3,4,5]

// arr.forEachTwofunction((ele)=>{
//   console.log(ele);
// })
```
