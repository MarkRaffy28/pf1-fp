import React from "react";
import "./Styles.css";

const Login = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url("https://miro.medium.com/v2/resize:fit:1200/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="modal show" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable p-4">
          <div className="modal-content">
            <div className="modal-header pb-0 border-0">
              <h4 className="modal-title w-100 text-center fw-bold m-0 p-0">
                LOGIN
              </h4>
            </div>

            <div className="modal-body">
              <form noValidate>
                <div className="row mb-2">
                  <div className="col-sm form-floating">
                    <input type="text" className="form-control" id="username" name="username" placeholder="Username" pattern="[A-Za-z0-9._]+" required/>
                    <label htmlFor="username" className="form-label ps-4">
                      Username
                    </label>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-sm form-floating">
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" pattern="[A-Za-z0-9@$!%*?&._]+" required/>
                    <label htmlFor="password" className="form-label ps-4">
                      Password
                    </label>
                    <i className="bi bi-eye fs-4 eye"></i>
                  </div>
                </div>

                <div className="row m-2">
                  <span className="text-end">
                    Don't Have an Account?{" "}
                    <a href="/signup" className="link-primary d-inline-block">
                      Sign Up
                    </a>
                  </span>
                  <div className="d-flex justify-content-center mb-2">
                    <a href="/home" className="btn btn-success mt-4">
                      Login
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
