import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    username: "Markraffy28",
    profile_picture: "https://dl.dropbox.com/scl/fi/1prddlqyc0km28e3zh0az/Himmel-Avatar.jpeg?rlkey=kczctne8ln8z5lsqit8tgnuxn&st=yae5xxa5&dl=0",
    first_name: "Mark Raffy",
    middle_name: "Divina",
    last_name: "Romero",
    extension_name: "",
    gender: "Male",
    program: "BSIT",
    user_id: "A23-00791",
    major: "Web and Mobile App. Devt.",
    strand: "",
    year_section: "3A",
    birth_date: "September 28, 2005",
    contact_number: "09955045107",
    email_address: "markraffyromero28@gmail.com",
    address: "Tinaan, Sta. Maria, Ilocos Sur",
  });

  return (
    <main className="py-4 container">
      <section className="row">
        {/* Left: Account Settings */}
        <div className="col-12 col-lg-4 mb-4">
          <h4 className="mb-3 fw-semibold">
            <i className="fa-solid fa-gear"></i> Account Settings
          </h4>
          <h5 className="text-center mb-3">
            Hi,{" "}
            <span className="text-success fw-semibold">{profileData.username}</span>
          </h5>
          <div className="d-flex justify-content-center align-items-center profile-picture mb-3">
            {profileData.profile_picture ? (
              <img
                src={profileData.profile_picture}
                className="rounded-circle"
              />
            ) : (
              <i className="bi bi-person-circle text-muted fs-1"></i>
            )}
          </div>
          <div className="d-flex justify-content-center mb-4" data-bs-toggle="modal" data-bs-target="#change_profile_picture">
            <button className="btn btn-sm btn-secondary">
              <i className="bi bi-pencil-square"></i> Change Profile Picture
            </button>
          </div>
          <div className="card rounded-4" data-bs-toggle="modal" data-bs-target="#change_username">
            <div className="profile-change-chevron d-flex justify-content-between align-items-center px-3 py-2">
              <h6 className="m-0">Change Username</h6>
              <button className="btn">
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
            <hr className="m-0" />
            <div className="profile-change-chevron d-flex justify-content-between align-items-center px-3 py-2" data-bs-toggle="modal" data-bs-target="#change_password">
              <h6 className="m-0">Change Password</h6>
              <button className="btn">
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Profile Information Table */}
        <div className="col-12 col-lg-8">
          <h4 className="mb-3 fw-semibold">
            <i className="fa-solid fa-info-circle"></i> Profile Information
          </h4>
          <table className="table table-borderless ms-4">
            <tbody>
              <tr>
                <th>First Name</th>
                <td>{profileData.first_name}</td>
              </tr>
              <tr>
                <th>Middle Name</th>
                <td>{profileData.middle_name}</td>
              </tr>
              <tr>
                <th>Last Name</th>
                <td>{profileData.last_name}</td>
              </tr>
              <tr>
                <th>Extension Name</th>
                <td>{profileData.extension_name}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{profileData.gender}</td>
              </tr>
              <tr>
                <th>Program / Position</th>
                <td>{profileData.program}</td>
              </tr>
              <tr>
                <th>User ID</th>
                <td>{profileData.user_id}</td>
              </tr>
              <tr>
                <th>Major</th>
                <td>{profileData.major}</td>
              </tr>
              <tr>
                <th>Strand</th>
                <td>{profileData.strand}</td>
              </tr>
              <tr>
                <th>Year & Section</th>
                <td>{profileData.year_section}</td>
              </tr>
              <tr>
                <th>Birth Date</th>
                <td>{profileData.birth_date}</td>
                </tr>
              <tr>
                <th>Contact Number</th>
                <td>{profileData.contact_number}</td>
              </tr>
              <tr>
                <th>Email Address</th>
                <td>{profileData.email_address}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{profileData.address}</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#edit_profile">
              <i className="fa-solid fa-pen-to-square"></i> Edit Information
            </button>
            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete_account">
              <i className="fa-solid fa-trash"></i> Delete Account
            </button>
          </div>
        </div>
      </section>

      <div className="modal fade" id="change_profile_picture" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable p-4">
          <div className="modal-content">
            <div className="modal-header pb-0 border-0">          
              <h4 className="modal-title w-100 text-center fw-bold m-0 p-0">CHANGE PROFILE PICTURE</h4>  
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>      
            <div className="modal-body">
              <div className="row mb-2">
                <div className="col-sm">
                  <label for="new_profile_picture" className="form-label">New Profile Picture</label>
                  <input type="file" className="form-control" id="new_profile_picture" name="new_profile_picture" ></input>
                  <div className="form-text ps-2">Leave blank to remove current profile picture</div>
                </div>
              </div>
              <div className="row m-2">
                <div className="d-flex justify-content-center mt-4 mb-2">
                  <button type="button" className="btn btn-md btn-danger rounded-3 px-3 me-3" data-bs-dismiss="modal">Cancel</button>
                  <input type="submit" name="" value="Update" className="btn btn-success"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="modal fade" id="change_username" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable p-4">
          <div className="modal-content">
            <div className="modal-header pb-0 border-0">          
              <h4 className="modal-title w-100 text-center fw-bold m-0 p-0">CHANGE USERNAME</h4>  
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>      
            <div className="modal-body">
              <div className="row mb-2">
                <div className="col-sm form-floating">
                  <input type="text" className="form-control" id="new_username" name="new_username" placeholder="New Username" pattern="[A-Za-z0-9._]+" required></input>
                  <label for="new_username" className="form-label ps-4">New Username</label>
                </div>
              </div>
              <div className="row m-2">
                <div className="d-flex justify-content-center mt-4 mb-2">
                  <button type="button" className="btn btn-md btn-danger rounded-3 px-3 me-3" data-bs-dismiss="modal">Cancel</button>
                  <input type="submit" name="" value="Update" className="btn btn-success"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="modal fade" id="change_password" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable p-4">
          <div className="modal-content">
            <div className="modal-header pb-0 border-0">          
              <h4 className="modal-title w-100 text-center fw-bold m-0 p-0">CHANGE PASSWORD</h4>  
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>         
            <div className="modal-body">
              <div className="row mb-2">
                <div className="col-sm form-floating">
                  <input type="password" className="form-control input-password" id="old_password" name="old_password" placeholder="Old Password" pattern="[A-Za-z0-9@$!%*?&._]+" required></input>
                  <label for="old_password" className="form-label ps-4">Old Password</label>
                  <i className="bi bi-eye fs-4 eye"></i>
                </div>
              </div>        
              <div className="row mb-2">
                <div className="col-sm form-floating">
                  <input type="password" className="form-control input-password" id="new_password" name="new_password" placeholder="New Password" pattern="[A-Za-z0-9@$!%*?&._]+" required></input>
                  <label for="new_password" className="form-label ps-4">New Password</label>
                  <i className="bi bi-eye fs-4 eye"></i>
                </div>
              </div>              
              <div className="row m-2">
                <div className="d-flex justify-content-center mt-4 mb-2">
                  <button type="button" className="btn btn-md btn-danger rounded-3 px-3 me-3" data-bs-dismiss="modal">Cancel</button>
                  <input type="submit" name="" value="Update" className="btn btn-success"></input>
                </div>
              </div>    
            </div>
          </div>
        </div>
      </div>
      
      <div className="modal fade" id="edit_profile" tabindex="-1">
        <div className="modal-lg modal-dialog modal-dialog-centered modal-dialog-scrollable p-4">
          <div className="modal-content">
            <div className="modal-header pb-0 border-0">          
              <h4 className="modal-title w-100 text-center fw-bold m-0 p-0">EDIT INFORMATION</h4>  
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>         
            <div className="modal-body">            
                <div className="row mb-2 gx-3 gy-2">
                  <div className="col-sm form-floating">
                    <input type="text" className="form-control" id="edit_first_name" name="edit_first_name" placeholder="First Name" required></input>
                    <label for="edit_first_name" className="form-label ps-4">First Name</label>
                </div>
                <div className="col-sm form-floating">
                  <input type="text" className="form-control" id="edit_middle_name" name="edit_middle_name" placeholder="Middle Name" required></input>
                  <label for="edit_middle_name" className="form-label ps-4">Middle Name</label>
                </div>
              </div>
                  
              <div className="row mb-2 gx-3 gy-2">
                <div className="col-sm form-floating">
                  <input type="text" className="form-control" id="edit_last_name" name="edit_last_name" placeholder="Last Name" required></input>
                  <label for="edit_last_name" className="form-label ps-4">Last Name</label>
                  </div>
                  <div className="col-sm form-floating">
                    <input type="text" className="form-control" id="edit_extension_name" name="edit_extension_name" placeholder="Extension Name"></input> 
                    <label for="edit_extension_name" className="form-label ps-4">Extension Name</label>
                  </div>
                </div>
                
                <div className="row mb-2 gx-3 gy-2 gy-lg-0">
                  <div className="col-sm form-floating">
                    <select id="edit_gender" name="edit_gender" className="form-select ps-4" required>
                      <option value="">Male</option>
                      <option value="">Female</option>
                      <option value="">Other</option>
                    </select>
                    <label for="edit_gender" className="form-label ps-4">Select Gender</label>
                  </div>
                  <div className="col-sm form-floating">
                    <input type="text" className="form-control" id="edit_program" name="edit_program" placeholder="Program (if student) / Position" required></input>
                    <label for="edit_program" className="form-label ps-4">Program (if student) / Position</label>
                  </div>
                </div>
                
                <div className="row mb-2 gx-3 gy-2 gy-lg-0">
                  <div className="col-sm form-floating">
                    <input type="text" className="form-control" id="edit_user_id" name="edit_user_id" placeholder="User Id"></input> 
                    <label for="edit_user_id" className="form-label ps-4">User ID</label>
                  </div>
                  <div className="col-sm form-floating">
                    <input type="text" className="form-control" id="edit_major" name="edit_major" placeholder="Major"></input> 
                    <label for="edit_major" className="form-label ps-4">Major</label>
                  </div>
                </div>

                <div className="row mb-2 gx-3 gy-2 gy-lg-0">
                  <div className="col-sm form-floating">
                    <input type="text" className="form-control" id="edit_strand" name="edit_strand" placeholder="Strand"></input> 
                    <label for="edit_strand" className="form-label ps-4">Strand</label>
                  </div>     
                  <div className="col-sm form-floating">
                    <input type="text" className="form-control" id="edit_year_section" name="edit_year_section" placeholder="Year & Section"></input> 
                    <label for="edit_strand" className="form-label ps-4">Year & Section</label>
                  </div>     
                </div>

                  
                <div className="row mb-2 gx-3 gy-2">
                  <div className="col-sm form-floating">
                    <input type="date" className="form-control" id="edit_birth_date" name="edit_birth_date" required></input>
                    <label for="edit_birth_date" className="form-label ps-4">Birth Date</label>
                  </div>
                  <div className="col-sm form-floating">
                    <input type="tel" className="form-control" id="edit_contact_number" name="edit_contact_number" placeholder="Contact Number (e.g. 09...)" required pattern="\d{11}" minlength="11" maxlength="11"></input>
                    <label for="edit_contact_number" className="form-label  ps-4">Contact Number (e.g. 09...)</label>
                  </div>
                </div>
                  
                <div className="row mb-2 gx-3 gy-2">
                  <div className="col-sm form-floating">
                    <input type="email" className="form-control" id="edit_email_address" name="edit_email_address" placeholder="E-mail Address" required></input>
                    <label for="edit_email_address" className="form-label ps-4">E-mail Address</label>
                  </div>
                  <div className="col-sm form-floating">
                    <textarea className="form-control" id="edit_address" name="edit_address" placeholder="Address" required></textarea>
                    <label for="edit_address" className="form-label ps-4">Address</label>
                  </div>
                </div>
                
                <div className="row m-2">
                  <div className="d-flex justify-content-center mt-4 mb-2">
                    <button type="button" className="btn btn-md btn-danger rounded-3 px-3 me-3" data-bs-dismiss="modal">Cancel</button>
                    <input type="submit" name="edit_profile" value="Update" className="btn btn-success"></input>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="modal fade p-4" id="delete_account" tabindex="-1">
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header border-0">
              <h5 className="modal-title w-100 text-center fw-bold">DELETE?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>     
            <div className="modal-body text-center">
              <i className="fa-solid fa-triangle-exclamation fa-4x text-danger mb-3"></i>
              <p className="mb-0">Are you sure you want to delete your account? This action cannot be undone.</p>
            </div>      
            <div className="modal-footer border-0 d-flex justify-content-center">
              <button type="button" className="btn btn-secondary rounded-3 px-4" data-bs-dismiss="modal">Close</button>
              <form method="POST">
                <input type="submit" name="delete_account" value="Yes, Delete" className="btn bg-danger text-light rounded-3 px-4"></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
