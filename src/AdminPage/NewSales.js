import { useRef } from "react";

// import Card from "../ui/Card";
import classes from "./NewMedicine.module.css";
import { Link } from "react-router-dom";

function NewMedicineForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const discountInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredfn = titleInputRef.current.value;
    const enteredln = imageInputRef.current.value;
    const entereddob = addressInputRef.current.value;
    const enteredgender = descriptionInputRef.current.value;
    const enteredexperince = discountInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const salesData = {
      firstname: enteredfn,
      lastname: enteredln,
      dob: entereddob,
      gender: enteredgender,
      experience: enteredexperince,
      password: enteredPassword,
    };

    props.onAddMeetup(salesData);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">First Name</label>
        <input type="text" required id="title" ref={titleInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Last Name</label>
        <input type="text" required id="manu" ref={imageInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">DOB</label>
        <input type="text" required id="price" ref={addressInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Gender</label>
        <input
          type="text"
          id="description"
          required
          ref={descriptionInputRef}
        ></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="discount">Experience</label>
        <input
          type="text"
          id="discount"
          required
          ref={discountInputRef}
        ></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          required
          ref={passwordInputRef}
        ></input>
      </div>
      <div className={classes.actions}>
        <Link to="/MainPage/SalesPerson">
          <button>Add SalesPerson</button>
        </Link>
        <Link to="/MainPage/SalesPerson">
          <button>Back</button>
        </Link>
      </div>
    </form>
  );
}

export default NewMedicineForm;
