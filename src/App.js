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
import { Sidebar } from "./components/Chakra-sidebar/Sidebar";
import { Reducercounter } from "./components/useReducer/Reducercounter";
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
      
      <Reducercounter/>
    </>
  );
}

export default App;
