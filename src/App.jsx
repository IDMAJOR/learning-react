
import Friuts from "./Friuts.jsx";
import Footer from "./Footer.jsx"
import Card from "./Card.jsx";
import Students from "./Students.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import Button from "./Button.jsx";
import Profile from "./profile.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./counter.jsx";
import OnChange from "./OnChange.jsx";
import NewCounter from "./NewCounter.jsx";
import Foods from "./Foods.jsx";
import CreateObject from "./CreateObjects.jsx";
import TodoListly from "./TodoListly.jsx";
import UseEffect from "./UseEffect.jsx";

function App() {

  const friuts = [
    {id: 1, name: "Mango", calories: 95},
    {id: 2, name: "Apple", calories: 105},
    {id: 3, name: "Banana", calories: 195},
    {id: 4, name: "Orange", calories: 55},
  ]

  const vegetables = [
    {id: 5, name: "Mango", calories: 95},
    {id: 6, name: "Apple", calories: 105},
    {id: 7, name: "Banana", calories: 195},
    {id: 8, name: "Orange", calories: 55},
  ]
  
  return(
    <>
        <Friuts />
        <CreateObject />
        <Card />
        <Profile />
        <MyComponent />
        <Students name="Major" age={15} student={true}/>
        <Students name="Prospect" age={5} student={false}/>
        <Students name="Munachi" age={3} student={true}/>
        <Students />
        <UserGreeting isLoggedIn={false} username="IDMAJOR"/>
        <UserGreeting />
        {friuts.length > 0 ? <List items={friuts} category='Friut'/> : null}
        {vegetables.length > 0 ? <List items={vegetables} category='Vegetables'/> : null}
        <Button />
        <Counter />
        <OnChange />
        <Foods />
        <NewCounter />
        <TodoListly />
        <UseEffect />
        <Footer />
    </>
  );
}
import TodoList from "./TodoListly.jsx";

export default App
