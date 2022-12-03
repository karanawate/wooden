import {useState} from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import axios from "axios";

const Login = () =>{
    const[isLogin, setIsLogin] = useState([])
    const navigate = useNavigate();

    const loginBox ={
        width:'30rem',
        height:'15rem',
        marginLeft:'30%',
        marginTop:'10%',
        backgroundColor:'#fff'
        
    }

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:Yup.object({
            email:Yup.string().required('Enter your email'),
            password:Yup.string('enter password').max(8,'must be 8 degits').required('Enter your password')
        }),
        onSubmit:async(values) => {
            let data = values;
            console.log('called')
                await
                axios
                .post('http://127.0.0.1:8000/api/user_login',{
                  ...data
                })
                .then( res =>{
                     let loginuser =   localStorage.setItem('user', JSON.stringify(res));
                   
                    navigate('/dashboard');
                })
                .catch(err =>{
                    console.log(err)
                })
        } 

    })


    return <div>
                <div className="container">
                        <form onSubmit={formik.handleSubmit}>
                    <div className="card" style={loginBox}>    
                            <div className="mb-2 m-1">
                                <label className="form-label" style={{marginLeft:'100px'}}>Email</label>
                                <input 
                                type="text"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur = {formik.handleBlur}
                                placeholder="Enter Email"
                                className="form-control"
                                style={{width:'65%', marginLeft:'101px'}}
                                />
                                {formik.touched.email && formik.errors.email && <p style={{color:'red'}}>{formik.errors.email}</p>}
                            </div>
                            <div>
                                <label className="form-label" style={{marginLeft:'100px'}}>Password</label>
                                <input 
                                type="text"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur = {formik.handleBlur}
                                placeholder="Enter Password"
                                className="form-control"
                                style={{width:'65%', marginLeft:'101px'}}
                                />
                                {formik.touched.password && formik.errors.password && <p style={{color:'red'}}>{formik.errors.password}</p>}
                            </div>
                    <button  style={{marginLeft:'100px'}} className="btn btn-success w-50 mt-2" type="submit"> Login</button>
                    </div> 
                        </form>
                </div>
           </div>
}
export default Login;