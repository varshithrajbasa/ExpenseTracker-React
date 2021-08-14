import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Card from './components/UI/Card/Card';

function App() {
  const expenseItems = [
    {
      id: 'e1',
      title: 'Mom Recharge',
      amount: '555',
      date: new Date(2021, 8, 6)
    },
    {
      id: 'e2',
      title: 'Kirana',
      amount: '97',
      date: new Date(2021, 8, 3)
    },
    {
      id: 'e3',
      title: 'Kirana',
      amount: '150',
      date: new Date(2021, 6, 1)
    },
    {
      id: 'e4',
      title: 'Eggs',
      amount: '36',
      date: new Date(2021, 6, 1)
    }
  ];
  const [eItems,setItems] = useState(expenseItems);
  const addExpenseHandler = (newExpenseData) =>setItems([newExpenseData,...eItems]);

  return (
    <div className="App">
      <NewExpense onExpenseDataHandler={addExpenseHandler} />
      <Card className="expenses">
        <Expenses expenses={eItems} />
      </Card>
    </div>
  );
}

export default App;
