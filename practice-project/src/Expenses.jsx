import {useState} from 'react';
export default function Expenses(props){
    return(
        <div>
            <h1>Enter an expense</h1>
            <form>
                <label htmlFor="name">Name : </label>
                <input type="text" id="name"  onChange={(e)=>props.addName(e.target.value)}/><br/><br/>
                <label htmlFor="amount">Amount : </label>
                <input type="number" id="amount" onChange={(e)=>props.addAmount(e.target.value)}/><br/><br/>
                <label htmlFor="category">Category : </label>
                <input type="text" id="category" onChange={(e)=>props.addCategory(e.target.value)}/><br/><br/>
                <button onClick={props.addExpense} type="button">Add Expense</button>
            </form>
            <div>
                <h1>Track the expenses</h1>
                <ul>
                    {props.expense.map(expense =>
                        <li key={expense.id}>{expense.name} - {expense.amount} - {expense.category} - {expense.date} <button onClick={()=>props.deleteExpense(expense.id)}>Delete</button></li>
                                                    )}
                </ul>
            </div>
        </div>
    )
}