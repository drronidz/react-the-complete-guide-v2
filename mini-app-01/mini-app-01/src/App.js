import Expenses from "./components/Expenses/Expenses";


function App() {
    const expenses = [
        {title: 'Car Insurance 01' , amount: 209.00, date: new Date(2021, 2, 28)},
        {title: 'Car Insurance 02' , amount: 259.00, date: new Date(2021, 6, 25)},
        {title: 'Car Insurance 03' , amount: 309.00, date: new Date(2021, 9, 28)},
        {title: 'Car Insurance 04' , amount: 401.10, date: new Date(2021, 12, 28)}
    ]

  return (
    <div>
        <h2>Let's get started!</h2>
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;
