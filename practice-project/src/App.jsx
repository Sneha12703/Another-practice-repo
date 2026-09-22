import Expenses from './Expenses.jsx';
import {useState} from 'react';
function App() {
    const [expense,setExpense]=useState([
            {id:1,name:"Groceries",amount:50,category:"Food",Date:new Date().getDate()}]
        )
    const [name,setName]=useState("");
    const [category,setCategory]=useState("");
    const [amount,setAmount]=useState(0);
    const [expenses, setExpenses]= useState(expense);
    function addExpense(){
      setExpense({id:len(expenses)+1,name:name,amount:amount,catgeory:category,Date:new Date().getDate()})
      setExpenses(e=>[...e,expense]);
    }

  return(
    <>
    <Expenses addExpense={addExpense} addCategory={setCategory} addName={setName} addAmount={setAmount}/>
    </>
  )

}

export default App
