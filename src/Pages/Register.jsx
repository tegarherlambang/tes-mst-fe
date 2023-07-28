import { useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom"

const Register = ()=>{
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [email, setEmail] = useState(null)
    const [fullname, setFullname] = useState(null)
    const [file, setFile] = useState(null)
    const navigate = useNavigate()
    const form = new FormData();
    form.append('username', username)
    form.append('password', password)
    form.append('email', email)
    form.append('full_name', fullname)
    form.append('file', file)
  
    const handleSubmit = async (e)=>{
      e.preventDefault(); 
      axios.post(process.env.REACT_APP_API_URL+'auth/register', form,
          { headers: { 'Content-Type': 'multipart/form-data' } }
      ).then((data)=>{
        Swal.fire({
          icon: 'success',
          title: 'success',
          text: data.message
        })
        setTimeout(() => { navigate("/login") }, 1500);
      }).catch((err)=>{
        Swal.fire({
          icon: 'error',
          title: 'error',
          text: err
        })
      })
    }
    return(
    <div className="auth-page-wrapper pt-5">
      <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
        <div className="bg-overlay" />
      </div>
      <div className="auth-page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mt-sm-5 mb-4 text-white-50">
                <div>
                  <a href="index.html" className="d-inline-block auth-logo">
                    <img src="assets/images/logo-light.png" alt height={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card mt-4">
                <div className="card-body p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Create New Account</h5>
                  </div>
                  <div className="p-2 mt-4">
                    <form className="needs-validation" onSubmit={(e)=>handleSubmit(e)}>
                      <div className="mb-3">
                        <label htmlFor="useremail" className="form-label">Email <span className="text-danger">*</span></label>
                        <input onKeyUp={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="useremail" placeholder="Enter email address" required />
                        <div className="invalid-feedback">
                          Please enter email
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username <span className="text-danger">*</span></label>
                        <input onKeyUp={(e)=>setUsername(e.target.value)} type="text" className="form-control" id="username" placeholder="Enter username" required />
                        <div className="invalid-feedback">
                          Please enter username
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="password-input">Password</label>
                        <div className="position-relative auth-pass-inputgroup">
                          <input onKeyUp={(e)=>setPassword(e.target.value)} type="password" className="form-control pe-5 password-input" onpaste="return false" placeholder="Enter password" id="password-input" aria-describedby="passwordInput" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                          <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle" /></button>
                          <div className="invalid-feedback">
                            Please enter password
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="useremail" className="form-label">Fullname <span className="text-danger">*</span></label>
                        <input onKeyUp={(e)=>setFullname(e.target.value)} type="text" className="form-control" id="useremail" placeholder="Enter fullname" required />
                        <div className="invalid-feedback">
                          Please enter fullname
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Photo <span className="text-danger">*</span></label>
                        <input type="file" className="form-control" name="file" onChange={(e)=>setFile(e.target.files[0])} required />
                      </div>
                      <div id="password-contain" className="p-3 bg-light mb-2 rounded">
                        <h5 className="fs-13">Password must contain:</h5>
                        <p id="pass-length" className="invalid fs-12 mb-2">Minimum <b>8 characters</b></p>
                        <p id="pass-lower" className="invalid fs-12 mb-2">At <b>lowercase</b> letter (a-z)</p>
                        <p id="pass-upper" className="invalid fs-12 mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                        <p id="pass-number" className="invalid fs-12 mb-0">A least <b>number</b> (0-9)</p>
                      </div>
                      <div className="mt-4">
                        <button className="btn btn-success w-100" type="submit">Sign Up</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="mb-0">Already have an account ? <a href="auth-signin-basic.html" className="fw-semibold text-primary text-decoration-underline"> Signin </a> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <p className="mb-0 text-muted">©
                  Velzon. Crafted with <i className="mdi mdi-heart text-danger" /> by Themesbrand
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
    )
}

export default Register