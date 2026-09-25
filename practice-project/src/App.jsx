import Expenses from './Expenses.jsx';
import Dashboard from './Dashboard.jsx';
import {useState} from 'react';
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom';
function App() {
    const [name,setName]=useState("");
    const [category,setCategory]=useState("");
    const [amount,setAmount]=useState(0);
    const [expenses, setExpenses]= useState([
            {id:1,name:"Groceries",amount:50,category:"Food",date:new Date().toLocaleString()}]
        );
    
    function addExpense(){
      const expense={id:expenses.length+1,name:name,amount:Number(amount),category:category,date:new Date().toLocaleString()};
      setExpenses(e=>[...e,expense]);
    }
    function deleteExpense(id){
      const newExpense=expenses.filter(expense => expense.id!=id);
      setExpenses(newExpense);
    }
  return(
    <>
    <BrowserRouter>
    <Link to="/">Expenses</Link>
    <Link to="/Dashboard">Dashboard</Link>
    <Routes>
    <Route path="/" element={<Expenses deleteExpense={deleteExpense} expense={expenses} addExpense={addExpense} addCategory={setCategory} addName={setName} addAmount={setAmount}/>}/>
    <Route path="/Dashboard" element ={<Dashboard expenses={expenses}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )

}

export default App
