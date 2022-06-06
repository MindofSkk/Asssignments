import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Counter } from "./components/Counter/Counter";
import { Menu } from "./components/Menu/Menu";
import { Todo } from "./components/Todo/Todo";
import { Paymentcard } from "./components/PaymentCard/Paymentcard";
import payment from "./data/payment.json"
import { Form } from "./components/Forms/Form";
import Game from "./components/Tictak/Game"
import Stopwatch from "./components/increment-timer/Stopwatch";
// import SimpleSidebar, { Sidebar } from "./components/Chakra-sidebar/Sidebar";
import { Reducercounter } from "./components/useReducer/Reducercounter";
import { Home } from "./components/Routing-lec/Home";
import TodoList from "./components/useEffect/TodoList";
import Header from "./components/contextapi/Header";
function App() {

  return (
    <>
      {/* <Navbar/> */}
        {/* <Counter/> */}
        {/* <Menu /> */}
      {/* <Todo /> */}
      {/* <Paymentcard payments={payment} /> */}
      {/* <Form/> */}
      {/* <Game/> */}
      {/* <Stopwatch/> */}
      {/* <Sidebar/> */}
      
      {/* <Reducercounter/> */}
      {/* <SimpleSidebar/> */}
      {/* <Home/> */}
      {/* first start the json server & then use(useReducer)then use todo */}
      {/* <TodoList/>  */}
    </>
  );
}

export default App;
