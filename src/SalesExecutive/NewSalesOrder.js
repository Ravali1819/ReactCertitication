import { useRef, useState, useEffect } from "react";

// import Card from "../ui/Card";
import classes from "../AdminPage/NewMedicine.module.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { useSelector } from "react-redux";
import { Fragment } from "react";

function NewMedicineForm(props) {
  var items = [];
  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [add, setadd] = useState([]);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.items);
  const toatalItems = useSelector((state) => state.totalQuantity);

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  //   const discountInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    // const enteredDiscount = discountInputRef.current.value;

    const meetupData = {
      cname: enteredTitle,
      cnumber: enteredImage,
      cproducts: enteredAddress,
      cquantity: enteredDescription,
      //   discount: enteredDiscount,
    };

    props.onAddMeetup(meetupData);
  }

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
  var load = [];

  for (let data in loadedData) {
    load.push(loadedData[data]);
  }

  const deleteHandler = (event) => {
    let id = event.target.id;

    fetch(`https://reactcert-default-rtdb.firebaseio.com/data/${id}.json`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        var price = data.price;
        console.log(price);
        dispatch(
          cartActions.addItemToCart({
            price: Number(data.price),
            name: data.name,
            discount: data.discount,
          })
        );
      });
    // const name = setadd.name;
    // // const price = data.price;
    // const discount = add.discount;
    // // console.log(price);
  };

  console.log(add);

  let overallPrice = 0;
  cartItems.map((item) => {
    overallPrice = overallPrice + item.totalPrice;
    console.log(overallPrice);
  });

  const clearCartHandler = () => {
    console.log("clicked");
    dispatch(cartActions.clearCartData());
  };

  const allData = load.map((dat) => (
    <div className="medicine_card" key={dat.id} id={dat.id}>
      <h2>Name: {dat.name}</h2>
      <h3>Manufacturer: {dat.manufacturer}</h3>
      <h3>Price: {dat.price}</h3>
      <h4>Stock: {dat.stock}</h4>
      <h4>Discount: {dat.discount}</h4>
      <button type="submit" id={dat.id} onClick={deleteHandler}>
        Add
      </button>
    </div>
  ));

  console.log(cartItems);
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Customer Name</label>
        <input type="text" required id="title" ref={titleInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Contact Number</label>
        <input type="text" required id="manu" ref={imageInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Select Products</label>
        {/* <input type="text" required id="price" ref={addressInputRef} /> */}
        <h3>Added Items: {items}</h3>
      </div>
      {cartItems.map((item) => (
        <Fragment>
          <div className={classes.cart_items}>
            <div className={classes.details}>
              {/* <h3>{item.name}</h3> */}
              <h4>Items: x{item.quantity}</h4>
              <h4>Amount: {item.totalPrice}</h4>
            </div>
          </div>
        </Fragment>
      ))}
      <div className={classes.selection}>{allData}</div>

      <div className={classes.control}>
        <label htmlFor="description">Quantity</label>
        {/* <input
          type="text"
          id="description"
          required
          ref={descriptionInputRef}
        ></input> */}
        <h2>Total Quantity: {toatalItems}</h2>
      </div>

      <div className={classes.actions}>
        <Link to="/SalesPage/SalesOrder">
          <button>Create Order</button>
        </Link>
        <Link to="/SalesPage" onClick={clearCartHandler}>
          <button>Back</button>
        </Link>
      </div>
    </form>
  );
}

export default NewMedicineForm;
