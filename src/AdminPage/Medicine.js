import { Fragment, useEffect } from "react";
import "./Medicine.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import $ from "jquery";

const Medicine = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://reactcert-default-rtdb.firebaseio.com/data.json")
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
    fetch(`https://reactcert-default-rtdb.firebaseio.com/data/${id}.json`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      load.splice(id - 1, 1);
    });
  };

  console.log(load);

  const allData = load.map((dat) => (
    <div className="medicine_card" key={dat.id} id={dat.id}>
      <h2>Name: {dat.name}</h2>
      <h3>Manufacturer: {dat.manufacturer}</h3>
      <h3>Price: {dat.price}</h3>
      <h4>Stock: {dat.stock}</h4>
      <h4>Discount: {dat.discount}</h4>
      <button type="submit" id={dat.id} onClick={deleteHandler}>
        Delete
      </button>
    </div>
  ));

  return (
    <Fragment>
      <nav className="medicine_nav">
        <Link to="/MainPage">
          <button type="button">Back To Main Page</button>
        </Link>
        <h1>Medicines</h1>
        <Link to="/MainPage/NewMedicineForm">
          <button type="button">Add Medicine</button>
        </Link>
      </nav>
      <div className="medicine_cards">{allData}</div>
    </Fragment>
  );
};

export default Medicine;
