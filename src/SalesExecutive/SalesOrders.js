import { Fragment, useEffect } from "react";
import "../AdminPage/MainPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import $ from "jquery";

const SalesOrders = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://reactcert-default-rtdb.firebaseio.com/salesExec.json")
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

  console.log(loadedData.length);
  var load = [];

  console.log(loadedData);

  for (let data in loadedData) {
    load.push(loadedData[data]);
  }
  // load.pop();
  // console.log(load);

  const deleteHandler = (event) => {
    let id = event.target.id;
    fetch(
      `https://reactcert-default-rtdb.firebaseio.com/salesExec/${id}.json`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      console.log(res);
      load.splice(id, 1);
      $("#" + id).css("display", "none");
    });
  };

  console.log(load);

  const allData = load.map((dat) => (
    <div className="medicine_card" key={dat.id} id={dat.id}>
      <h2>Customer Name: {dat.cname}</h2>
      <h3>Contact Number: {dat.cnumber}</h3>
      <h3>Select Products: {dat.cproducts}</h3>
      <h4>Quantity: {dat.cquantity}</h4>
      <button type="submit" id={dat.id} onClick={deleteHandler}>
        Delete
      </button>
    </div>
  ));

  return (
    <Fragment>
      <nav className="medicine_nav">
        <Link to="/SalesPage">
          <button type="button">Back To Main Page</button>
        </Link>
        <h1>Sales Order Add</h1>
        <Link to="/SalesPage/CreateOrder">
          <button type="button">Add SalesOrder</button>
        </Link>
      </nav>
      <div className="medicine_cards">{allData}</div>
    </Fragment>
  );
};

export default SalesOrders;
