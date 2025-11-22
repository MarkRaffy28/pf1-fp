import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Styles.css";

export default function Signup() {
  const [step, setStep] = useState(1);

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          'linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url("https://miro.medium.com/v2/resize:fit:1200/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="modal show" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable p-4">
          <div className="modal-content">

            <div className="modal-header border-0">
              <h4 className="modal-title w-100 text-center fw-bold m-0 p-0">
                SIGN UP
              </h4>
            </div>

            <div className="modal-body">
              {step === 1 && (
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row mb-2">
                    <div className="col-sm form-floating">
                      <input type="text" className="form-control" placeholder="Username" />
                      <label className="form-label ps-4">Username</label>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-sm form-floating position-relative">
                      <input type="password" className="form-control" placeholder="Password" />
                      <label className="form-label ps-4">Password</label>
                      <i className="bi bi-eye fs-4 eye"></i>
                    </div>
                  </div>

                  <div className="row m-2">
                    <span className="text-end">
                      Already Have an Account?{" "}
                      <a href="/index" className="link-primary">Log In</a>
                    </span>

                    <div className="d-flex justify-content-center mb-2">
                      <button
                        className="btn btn-success mt-4"
                        onClick={() => setStep(2)}
                        type="button"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row mb-2 gx-3 gy-2">
                    <div className="col-sm form-floating">
                      <input type="text" className="form-control" placeholder="First Name" />
                      <label className="form-label ps-4">First Name</label>
                    </div>

                    <div className="col-sm form-floating">
                      <input type="text" className="form-control" placeholder="Middle Name" />
                      <label className="form-label ps-4">Middle Name</label>
                    </div>
                  </div>

                  <div className="row mb-2 gx-3 gy-2">
                    <div className="col-sm form-floating">
                      <input type="text" className="form-control" placeholder="Last Name" />
                      <label className="form-label ps-4">Last Name</label>
                    </div>

                    <div className="col-sm form-floating">
                      <input type="text" className="form-control" placeholder="Extension Name" />
                      <label className="form-label ps-4">Extension Name</label>
                    </div>
                  </div>

                  <div className="row mb-2 gx-3 gy-2">
                    <div className="col-sm form-floating">
                      <input type="number" className="form-control" placeholder="Age" />
                      <label className="form-label ps-4">Age</label>
                    </div>

                    <div className="col-sm form-floating">
                      <select className="form-select ps-4">
                        <option value="" disabled selected>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                      <label className="form-label ps-4">Select Gender</label>
                    </div>
                  </div>

                  <div className="row mb-2 gx-3 gy-2">
                    <div className="col-sm form-floating">
                      <input type="date" className="form-control" />
                      <label className="form-label ps-4">Birth Date</label>
                    </div>

                    <div className="col-sm form-floating">
                      <input type="tel" className="form-control" placeholder="09..." />
                      <label className="form-label ps-4">
                        Contact Number (e.g. 09…)
                      </label>
                    </div>
                  </div>

                  <div className="row mb-2 gx-3 gy-2">
                    <div className="col-sm form-floating">
                      <input type="email" className="form-control" />
                      <label className="form-label ps-4">E-mail Address</label>
                    </div>

                    <div className="col-sm form-floating">
                      <textarea className="form-control"></textarea>
                      <label className="form-label ps-4">Address</label>
                    </div>
                  </div>

                  <div className="row m-2">
                    <span className="text-end">
                      Already Have an Account?{" "}
                      <a href="/index" className="link-primary">Log In</a>
                    </span>

                    <div className="d-flex justify-content-center mb-2">
                      <button
                        className="btn btn-danger mt-4 me-3"
                        type="button"
                        onClick={() => setStep(1)}
                      >
                        Return
                      </button>

                      <a href="/index" className="btn btn-success mt-4">
                        Complete Registration
                      </a>
                    </div>
                  </div>
                </form>
              )}

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
