import { useState, useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

const SalesPerson = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [res, setres] = useState([]);

  useEffect(() => {
    fetch("https://reactcert-default-rtdb.firebaseio.com/sales.json")
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
    fetch(`https://reactcert-default-rtdb.firebaseio.com/sales/${id}.json`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      load.splice(id - 1, 1);
      $("#" + id).css("display", "none");
    });
  };

  const updateHandler = (event) => {
    console.log(event);
    let id = event.target.id;

    fetch(`https://reactcert-default-rtdb.firebaseio.com/sales/${id}.json`, {
      method: "Get",
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setres(response);
      });

    fetch(`https://reactcert-default-rtdb.firebaseio.com/sales/${id}.json`, {
      method: "PATCH",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
    });
  };

  console.log(load);

  const allData = load.map((dat) => (
    <div className="medicine_card" key={dat.id} id={dat.id}>
      <h2>First Name: {dat.firstname}</h2>
      <h3>Last Name: {dat.lastname}</h3>
      <h3>DOB: {dat.dob}</h3>
      <h4>Gender: {dat.gender}</h4>
      <h4>Experinece Years: {dat.experience}</h4>
      <h4>Password: {dat.password} </h4>
      <button type="submit" id={dat.id} onClick={deleteHandler}>
        Delete
      </button>
      <Link to="/MainPage/NewSalesForm">
        <button type="submit" id={dat.id} onClick={updateHandler}>
          Update
        </button>
      </Link>
    </div>
  ));

  return (
    <Fragment>
      <nav className="medicine_nav">
        <Link to="/MainPage">
          <button type="button">Back To Main Page</button>
        </Link>
        <h1>Sales Persons</h1>
        {/* <Link to="/MainPage/NewSalesForm">
          <button type="button">Add Sales Person</button>
        </Link> */}
      </nav>
      <div className="medicine_cards">{allData}</div>
    </Fragment>
  );
};

export default SalesPerson;
