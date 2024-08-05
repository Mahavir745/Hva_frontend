//todo: Define the Array of Expenses:

class Expenses{
  constructor(id,name,amount,date){
    this.id = id;
    this.name= name;
    this.amount=amount;
    this.date = date;
  }
}

let expenses =[
  new Expenses(1,"lipstick", 250,'02-08-2024'),
  new Expenses(2,"eyeliner", 150, '03-08-2024'),
  new Expenses(3,"Mashkara", 120,'02-08-2024'),
  new Expenses(4, "kajal",  299,'02-8-2024')
]


function displayExpenses(expenses){
  expenses.forEach((ele)=>{
    console.log(`${ele.name} - ${ele.amount}(${ele.date}) `);
    
  })
}

displayExpenses(expenses)


//todo: Define the addExpense function:

function addExpense(id,name,amount,date){
  let add = new Expenses(id,name,amount,date)
  expenses.push(add)
}
addExpense(5,"makeupKit",3400,"02-08-2024")

// console.log(expenses)


//todo: Define the UpdateExpense Function:

function updateExpense(id,amount){
 let product = expenses.find((ele)=>{
    return ele.id === id
  })

  if(product){
    product.amount =amount
  }
}

updateExpense(1,400)

// console.log(expenses)


//todo: Define the removeExpense Function:

let newarr=[]
function removeExpense(id){
  let find = expenses.filter((ele)=>{
    return ele.id !== id
  })
  newarr.push(find)
}
removeExpense(5)
console.log(newarr)

