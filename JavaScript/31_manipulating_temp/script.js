// //todo: define and initialize the array:
let temperatures = [-3,14,22,5,-10,37]

// temperatures.forEach(function(temp){
//   console.log(temp);
// })

// temperatures.forEach((temp)=>{
//   console.log(temp);
// })

// //* convert

// temperatures.forEach(function(ele){
//   f = (ele* 9/5)+32
//   console.log(f);
// })

// temperatures.forEach((ele)=>{
//   f = (ele* 9/5)+32
//   console.log(f);
// })

//todo: iterate and create a new modified array using map();

// let temperaturesInFahrenheit = temperatures.map(function(ele){
//   return (ele* 9/5)+32;
// })

// console.log(temperaturesInFahrenheit);

let temperaturesInFahrenheit = temperatures.map((ele)=>{
  return (ele* 9/5)+32;
})

console.log(temperaturesInFahrenheit);