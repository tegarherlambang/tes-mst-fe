import { useState } from "react"
import axios from 'axios';
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom"
const Login = ()=>{
    const navigate = useNavigate()
    const [payload,setPayload] = useState({
        username:null,
        password:null
    })

    const handlePayload =  (e)=>{
        setPayload({
            ...payload,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault(); 
        axios.post(process.env.REACT_APP_API_URL+'auth/login', payload,
        ).then((data)=>{
          Swal.fire({
            icon: 'success',
            title: 'success',
            text: data.message
          })
          setTimeout(() => { navigate("/") }, 1500);
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
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card mt-4">
                <div className="card-body p-4">
                <div className="text-center mt-2">
                    <h5 className="text-primary">Welcome Back !</h5>
                    <p className="text-muted">Sign in to continue.</p>
                </div>
                <div className="p-2 mt-4">
                    <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input onKeyUp={handlePayload} type="text" className="form-control" id="username" name="username" placeholder="Enter username" />
                    </div>
                    <div className="mb-3">
                        <div className="float-end">
                        <a href="register" className="text-muted">Forgot password?</a>
                        </div>
                        <label className="form-label" htmlFor="password-input">Password</label>
                        <div className="position-relative auth-pass-inputgroup mb-3">
                        <input onKeyUp={handlePayload} type="password" className="form-control pe-5 password-input" name="password" placeholder="Enter password" id="password-input" />
                        <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle" /></button>
                        </div>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="auth-remember-check" />
                        <label className="form-check-label" htmlFor="auth-remember-check">Remember me</label>
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-success w-100" type="submit">Sign In</button>
                    </div>
                    </form>
                </div>
                </div>
                {/* end card body */}
            </div>
            {/* end card */}
            <div className="mt-4 text-center">
                <p className="mb-0">Don't have an account ? <a href="register" className="fw-semibold text-primary text-decoration-underline"> Signup </a> </p>
            </div>
            </div>
        </div>
        </div>
    </div>
        <footer className="footer">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="text-center">
                    <p className="mb-0 text-muted">©
                    Made by love
                    </p>
                </div>
                </div>
            </div>
            </div>
        </footer>
    </div>
    )
}

export default Login