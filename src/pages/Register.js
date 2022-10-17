import axios from "axios";
import { useFormik, yupToFormErrors } from "formik";
import React from "react";
import * as Yup from 'yup';

const Register = () => {
    const registerbox ={
        width:'30rem',
        height:'30rem',
        marginLeft:'30%',
        marginTop:'10%',
        backgroundColor:'#fff'
        
    }

    const formik  = useFormik({
        initialValues:{
            password:'',
            phone:'',
            email:''
        },

        validationSchema:Yup.object({
            password:Yup.string()
                .max(6,"name must be 8 character")
                .required('this field is required'),
                email:Yup.string('this field is requred')
                     .required('this field is requird'),
            phone:Yup.string('this field is req')
            .required('this field is required')  
        }),

        onSubmit:async(values) => {
            let data = values;
                    await
                    axios
                    .post("http://127.0.0.1:8000/api/add-admin",{
                        ...data
                    })
                    .then(res =>{
                        console.log(res.data.data)    
                    })
                    .catch(err =>{
                        console.log(err)
                    })
        } 

        

    });    
    return(
        <div className='container'>
             <form onSubmit={formik.handleSubmit}>
                    <div className='card' style={registerbox}>
                        <div className="mb-1 m-2">
                            <label htmlFor="exampleFormControlInput1" style={{marginLeft:'100px'}} className="form-label" >Email </label>
                            <input 
                            type="email"
                            name="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            style={{width:'65%', marginLeft:'101px'}}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder="enter password"
                            onBlur={formik.handleBlur}
                            />
                        {formik.touched.email && formik.errors.email  && <p style={{color:'red'}}>{formik.errors.email}</p>}
                        </div>
                        <div className="mb-1 m-1">
                            <label htmlFor="exampleFormControlInput1" style={{marginLeft:'100px'}} className="form-label" >phone</label>
                            <input 
                            type="number"
                            name="phone"
                            className="form-control"
                            id="exampleFormControlInput1"
                            style={{width:'65%', marginLeft:'101px'}}
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            placeholder="enter phone"
                            onBlur={formik.handleBlur}
                            />
                        {formik.touched.phone && formik.errors.phone  && <p style={{color:'red'}}>{formik.errors.phone}</p>}
                        </div>
                        <div className="mb-1 m-1">
                            <label htmlFor="exampleFormControlInput1" style={{marginLeft:'100px'}} className="form-label" >password</label>
                            <input 
                            type="text"
                            name="password"
                            className="form-control"
                            id="exampleFormControlInput1"
                            style={{width:'65%', marginLeft:'101px'}}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            placeholder="enter password"
                            onBlur={formik.handleBlur}
                            />
                        {formik.touched.password && formik.errors.password  && <p style={{color:'red'}}>{formik.errors.password}</p>}
                        </div>
                    <input type="submit" value="Register" style={{marginLeft:'22%'}} className='btn btn-success w-50 mt-2' />
                    </div>  
            </form> 
        </div>
    );
}
export default Register;