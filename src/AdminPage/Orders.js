import { Fragment, useEffect } from "react";
import "./Medicine.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import $ from "jquery";

const Inventory = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://reactcert-default-rtdb.firebaseio.com/AdminOrders.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const medicin = [];

        for (const key in data) {
          const medic = {
            id: key,
            ...data[key],
          };
          medicin.push(medic);
        }
        setIsLoading(false);
        setLoadedData(medicin);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  var load = [];

  for (let data in loadedData) {
    load.push(loadedData[data]);
  }

  const deleteHandler = (event) => {
    let id = event.target.id;
    fetch(
      `https://reactcert-default-rtdb.firebaseio.com/AdminOrders/${id}.json`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      console.log(res);
      load.splice(id, 1);
      ("#" + id).css("display", "none");
    });
  };

  const updateHandler = (event) => {
    console.log(event);
    let id = event.target.id;
    fetch(
      `https://reactcert-default-rtdb.firebaseio.com/AdminOrders/${id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log(res);
    });
  };

  console.log(load);

  const allData = load.map((dat) => (
    <div className="medicine_card" key={dat.id} id={dat.id}>
      <h3>Order ID: {dat.id}</h3>
      <h2>Customer Name: {dat.cname}</h2>
      <h3>Contact Number: {dat.cnumber}</h3>
      <h3>Products: {dat.cproducts}</h3>
      <h4>Quantity: {dat.cquantity}</h4>
      <h4>Total: {dat.ctotal}</h4>
      <button type="submit" id={dat.id} onClick={deleteHandler}>
        Delete
      </button>
      <button type="submit" id={dat.id} onClick={updateHandler}>
        Update
      </button>
    </div>
  ));

  return (
    <Fragment>
      <nav className="medicine_nav">
        <Link to="/MainPage">
          <button type="button">Back To Main Page</button>
        </Link>
        <h1>Admin Orders</h1>
        <Link to="/MainPage/NewOrdersForm">
          <button type="button">Add Orders</button>
        </Link>
      </nav>
      <div className="medicine_cards">{allData}</div>
    </Fragment>
  );
};

export default Inventory;
