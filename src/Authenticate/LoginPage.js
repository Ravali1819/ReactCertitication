import { Fragment, useRef, useState } from "react";
import classes from "./LoginPage.module.css";
import { Link, Redirect } from "react-router-dom";

const LoginPage = () => {
  const entereduser = useRef();
  const enteredPassword = useRef();

  const [log, setLog] = useState(false);

  // console.log(user);

  function App() {
    const user = entereduser.current.value;
    const password = enteredPassword.current.value;
    console.log(user == "test-admin" && password == "test-admin");

    if (user == "test-admin" && password == "test-admin") {
      setLog(true);
    } else {
      setLog(false);
    }
  }

  const logged = log ? "form-control invalid" : "form-control";
  return (
    <Fragment>
      <div className={classes.form_align}>
        <div className={classes.form}>
          <h1>Admin Access:</h1>
          <form onSubmit={App}>
            <label htmlFor="name">
              <input
                type="text"
                placeholder="UserName"
                required
                ref={entereduser}
              />
              <br />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                placeholder="Password"
                required
                ref={enteredPassword}
              />
              <br />
            </label>
            <button type="submit" className={logged}>
              <Link to="/MainPage" className={classes.link}>
                SignIn
              </Link>
            </button>
          </form>
        </div>

        <div className={classes.form}>
          <h1>SalesExecutive Access:</h1>
          <form onSubmit={App}>
            <label htmlFor="name">
              <input
                type="text"
                placeholder="UserName"
                required
                ref={entereduser}
              />
              <br />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                placeholder="Password"
                required
                ref={enteredPassword}
              />
              <br />
            </label>
            <button type="submit">
              <Link to="/SalesPage" className={classes.link}>
                SignIn
              </Link>
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
