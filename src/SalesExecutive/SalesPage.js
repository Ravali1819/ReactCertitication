import { Fragment } from "react";
import "../AdminPage/MainPage.css";
import { Link } from "react-router-dom";

const SalesPage = () => {
  return (
    <Fragment>
      <nav className="admin_nav">
        <h1>Welcome Sales Executive!</h1>
        <Link to="/">
          <button>Log Out</button>
        </Link>
      </nav>
      <div className="cards">
        <div className="orders">
          <Link to="/SalesPage/CreateOrder">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHCAZF6Tgy9pLs3PhP2ZIVjdSv6v2Yv9_QioBdtVhonT75LJcpVzlFMzb8OakBRxROR94&usqp=CAU"
              alt="team"
            />

            <h2>Add Orders</h2>
          </Link>
        </div>

        <div className="orders">
          <Link to="SalesPage/SalesOrder">
            <img
              src="https://booster.io/wp-content/uploads/custom-order-numbers-e1438361586475.png"
              alt="team"
            />

            <h2>View Orders</h2>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default SalesPage;
