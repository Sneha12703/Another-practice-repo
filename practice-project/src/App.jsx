import Expenses from './Expenses.jsx';
import Dashboard from './Dashboard.jsx';
import {useState} from 'react';
function App() {
    const [name,setName]=useState("");
    const [category,setCategory]=useState("");
    const [amount,setAmount]=useState(0);
    const [expenses, setExpenses]= useState([
            {id:1,name:"Groceries",amount:50,category:"Food",date:new Date().toLocaleString()}]
        );
    const totalExpenses=expenses.reduce((sum,exp)=>sum+exp.amount,0);
    function addExpense(){
      const expense={id:expenses.length+1,name:name,amount:Number(amount),category:category,date:new Date().toLocaleString()};
      setExpenses(e=>[...e,expense]);
      console.log(typeof expense.amount);
      setTotalExpenses(e=>e+expense.amount);
    }
    function deleteExpense(id){
      const newExpense=expenses.filter(expense => expense.id!=id);
      setExpenses(newExpense);
    }
  return(
    <>
    <Expenses deleteExpense={deleteExpense} expense={expenses} addExpense={addExpense} addCategory={setCategory} addName={setName} addAmount={setAmount}/>
    <Dashboard totalExpenses={totalExpenses}/>
    </>
  )

}

export default App
