import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
const AddLogin = () =>{
    const formik = useFormik({
        initialValues:{
            firstname:'',
            lastname:''
        },
        validationSchema:Yup.object({
            firstname:Yup.string('enter text')
                       .max(10, "character must be 10 digits")
                    .required('enter your firstname'),
            password:Yup.string('enter password')
                       .max(7,'must be 7 degits')
                        .required('enter your password')
        }),
        onSubmit:(values) => {
            console.log("form submit",values)
        } 

    })


    return <div>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input 
                type="text"
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur = {formik.handleBlur}
                placeholder="Enter firstname"
                />
                {formik.touched.firstname && formik.errors.firstname && <p style={{color:'red'}}>{formik.errors.firstname}</p>}
            </div>

            <div>
                <input 
                type="text"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur = {formik.handleBlur}
                placeholder="Enter password"
                
                />
                {formik.touched.password && formik.errors.password && <p style={{color:'red'}}>{formik.errors.password}</p>}
            </div>
        </form> 
        <button type="submit"> Login</button>
        </div>
}
export default AddLogin;