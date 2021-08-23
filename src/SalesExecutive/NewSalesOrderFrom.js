import { useHistory } from "react-router-dom";

import NewMedicineForm from "./NewSalesOrder";

function NewMedicine() {
  const history = useHistory();

  function addMeetupHandler(data) {
    fetch("https://reactcert-default-rtdb.firebaseio.com/salesExec.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/SalesPage/SalesOrder");
    });
  }

  return (
    <section>
      <h1>Add New Sales Order</h1>
      <NewMedicineForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMedicine;
