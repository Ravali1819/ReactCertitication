import { Fragment } from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <Fragment>
      <nav className="admin_nav">
        <h1>Welcome Admin!</h1>
        <Link to="/">
          <button>Log Out</button>
        </Link>
      </nav>
      <div className="cards">
        <div className="medicine">
          <Link to="/MainPage/Medicine">
            <img
              src="https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
              alt="medicines"
            />

            <h2>Add Medicine</h2>
          </Link>
        </div>
        <div className="inventory">
          <Link to="/MainPage/Inventory">
            <img
              src="https://www.skunexus.com/hs-fs/hubfs/managing-inventory-in-real-time.png?width=300&name=managing-inventory-in-real-time.png"
              alt="inventory"
            />

            <h2>View Inventory</h2>
          </Link>
        </div>
        <div className="sales">
          <Link to="/MainPage/NewSalesForm">
            <img
              src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-person-add-512.png"
              alt="person"
            />

            <h2>Add sales Executive</h2>
          </Link>
        </div>
        <div className="team">
          <Link to="/MainPage/SalesPerson">
            <img
              src="https://icon-library.com/images/team-icon-png/team-icon-png-4.jpg"
              alt="team"
            />

            <h2>View Team</h2>
          </Link>
        </div>

        <div className="orders">
          <Link to="/MainPage/NewOrdersForm">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHCAZF6Tgy9pLs3PhP2ZIVjdSv6v2Yv9_QioBdtVhonT75LJcpVzlFMzb8OakBRxROR94&usqp=CAU"
              alt="team"
            />

            <h2>Add Orders</h2>
          </Link>
        </div>

        <div className="orders">
          <Link to="/MainPage/Orders">
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

export default MainPage;
