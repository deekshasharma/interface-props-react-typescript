import React from 'react';
import './App.css';
import {BudgetOverview} from "./BudgetOverview";

const homeBudgets = [
    {
        budgeted: 500,
        spent: 200,
        category: "Food",
    },
    {
        budgeted: 1000,
        spent: 1500,
        category: "Utilities",
    }
]

function App() {
    return (
        <div className="App">
            <header className="App-header">Budget Table using TypeScript & React</header>
            <BudgetOverview budgets={homeBudgets}/>
        </div>
    );
}

export default App;