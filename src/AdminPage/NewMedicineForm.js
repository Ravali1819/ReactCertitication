import { useHistory } from "react-router-dom";

import NewMedicineForm from "./NewMedicine";

function NewMedicine() {
  const history = useHistory();

  function addMeetupHandler(data) {
    fetch("https://reactcert-default-rtdb.firebaseio.com/data.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/MainPage/Medicine");
    });
  }

  return (
    <section>
      <h1>Add New Medicine</h1>
      <NewMedicineForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMedicine;
