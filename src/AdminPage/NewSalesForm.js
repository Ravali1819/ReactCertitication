import { useHistory } from "react-router-dom";

import NewSalesForm from "./NewSales";

function NewMedicine() {
  const history = useHistory();

  function addMeetupHandler(data) {
    fetch("https://reactcert-default-rtdb.firebaseio.com/sales.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/MainPage/SalesPerson");
    });
  }

  return (
    <section>
      <h1>Add New Sales Person</h1>
      <NewSalesForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMedicine;
