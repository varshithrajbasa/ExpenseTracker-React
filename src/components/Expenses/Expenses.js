import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const expenseItems = props.expenses;
    const [filteredYear, setfilteredYear] = useState(new Date().getFullYear().toString());
    const [filteredItems,setfilteredItems] = useState(expenseItems);
    const filterChangeHandler = selectedYear => {
        setfilteredYear(selectedYear);
        const filteredItems1 = expenseItems.filter((e) =>e.date.getFullYear().toString() === selectedYear);
        setfilteredItems(filteredItems1);
    }
    return (
        <div>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredItems}/>
            {filteredItems.map((e, i) => <ExpenseItem title={e.title} amount={e.amount} price={e.price} date={e.date} key={e.id} />)}
        </div>
    );
}
export default Expenses;