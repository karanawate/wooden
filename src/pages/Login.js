import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const Login = () =>{
    const loginBox ={
        width:'30rem',
        height:'15rem',
        marginLeft:'30%',
        marginTop:'10%',
        backgroundColor:'#fff'
        
    }

    const formik = useFormik({
        initialValues:{
            firstname:'',
            lastname:''
        },
        validationSchema:Yup.object({
            email:Yup.string().max(10, "Character must be 10 digits").required('Enter your firstname'),
            password:Yup.string('enter password').max(8,'must be 8 degits').required('Enter your password')
        }),
        onSubmit:(values) => {
            console.log("form submit",values)
        } 

    })


    return <div>
                <div className="container">
                    <div className="card" style={loginBox}>    
                        <form onSubmit={formik.handleSubmit}>
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
                        </form>
                    <button  style={{marginLeft:'100px'}} className="btn btn-success w-50 mt-2" type="submit"> Login</button>
                    </div> 
                </div>
           </div>
}
export default Login;