import {useState} from 'react';
export default function Dashboard(){
    return(
        <div>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard! Here you can find an overview of expenses.</p>
        <div className="total-expenses">
            <h2>Total Expenses</h2>
            <p></p>
        </div>
        </div>
    )
}