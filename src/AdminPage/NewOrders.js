import { useRef } from "react";

// import Card from "../ui/Card";
import classes from "./NewMedicine.module.css";
import { Link } from "react-router-dom";

function NewOrdersForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const discountInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredDiscount = discountInputRef.current.value;

    const meetupData = {
      cname: enteredTitle,
      cnumber: enteredImage,
      cproducts: enteredAddress,
      cquantity: enteredDescription,
      ctotal: enteredDiscount,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Customer Name</label>
        <input type="text" required id="title" ref={titleInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Customer Contact Number</label>
        <input type="text" required id="manu" ref={imageInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Products</label>
        <input type="text" required id="price" ref={addressInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Quantity</label>
        <input
          type="text"
          id="description"
          required
          ref={descriptionInputRef}
        ></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="discount">Amount</label>
        <input
          type="text"
          id="discount"
          required
          ref={discountInputRef}
        ></input>
      </div>
      <div className={classes.actions}>
        <button>Add Medicine</button>

        <Link to="/MainPage/Orders">
          <button>Back</button>
        </Link>
      </div>
    </form>
  );
}

export default NewOrdersForm;
