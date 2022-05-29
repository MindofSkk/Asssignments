import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Counter } from "./components/Counter/Counter";
import { Menu } from "./components/Menu/Menu";
import { Todo } from "./components/Todo/Todo";
import { Paymentcard } from "./components/PaymentCard/Paymentcard";
import payment from "./data/payment.json"
import { Form } from "./components/Forms/Form";
function App() {

  return (
    <>
      {/* <Navbar/>
        <Counter/>
        <Menu /> */}
      {/* <Todo /> */}
      <Paymentcard payments={payment} />
      {/* <Form/> */}
    </>
  );
}

export default App;
