import "./App.css";
import { Fragment } from "react";
import LoginPage from "./Authenticate/LoginPage";
import { Route } from "react-router-dom";
import MainPage from "./AdminPage/MainPage";
import Inventory from "./AdminPage/Inventory";
import Medicine from "./AdminPage/Medicine";
import SalesPerson from "./AdminPage/SalesPerson";
import Team from "./AdminPage/Team";
import NewMedicineForm from "./AdminPage/NewMedicineForm";
import NewSalesFrom from "./AdminPage/NewSalesForm";
import Orders from "./AdminPage/Orders";

import SalesPage from "./SalesExecutive/SalesPage";
import SalesOrders from "./SalesExecutive/SalesOrders";
import NewSalesOrderForm from "./SalesExecutive/NewSalesOrderFrom";
import NewOrdersForm from "./AdminPage/NewOrdersForm";

function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route path="/MainPage" exact>
        <MainPage />
      </Route>
      <Route path="/MainPage/Inventory">
        <Inventory />
      </Route>
      <Route path="/MainPage/Medicine">
        <Medicine />
      </Route>
      <Route path="/MainPage/SalesPerson">
        <SalesPerson />
      </Route>
      <Route path="/MainPage/Team">
        <Team />
      </Route>
      <Route path="/MainPage/NewMedicineForm">
        <NewMedicineForm />
      </Route>
      <Route path="/MainPage/NewSalesForm">
        <NewSalesFrom />
      </Route>
      <Route path="/MainPage/Orders">
        <Orders />
      </Route>
      <Route path="/MainPage/NewOrdersForm">
        <NewOrdersForm />
      </Route>

      <Route path="/SalesPage" exact>
        <SalesPage />
      </Route>
      <Route path="/SalesPage/SalesOrder">
        <SalesOrders />
      </Route>
      <Route path="/SalesPage/CreateOrder">
        <NewSalesOrderForm />
      </Route>
    </Fragment>
  );
}

export default App;
