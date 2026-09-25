import {useState} from 'react';
export default function Dashboard(props){
    const totalExpenses=props.expenses.reduce((sum,exp)=>sum+exp.amount,0);
    return(
        <div>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard! Here you can find an overview of expenses.</p>
        <div className="total-expenses">
            <h2>Total Expenses</h2>
            <p>{totalExpenses}</p>
            <p></p>
        </div>
        </div>
    )
}