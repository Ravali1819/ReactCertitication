import { useHistory } from "react-router-dom";

import NewOrdersForm from "./NewOrders";

function NewOrders() {
  const history = useHistory();

  function addMeetupHandler(data) {
    fetch("https://reactcert-default-rtdb.firebaseio.com/AdminOrders.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/MainPage/Orders");
    });
  }

  return (
    <section>
      <h1>Add New Medicine</h1>
      <NewOrdersForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewOrders;
