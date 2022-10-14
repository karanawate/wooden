import axios from "axios";
import { useFormik, yupToFormErrors } from "formik";
import React from "react";
import * as Yup from 'yup';

const AddAdmin = () =>{
    
        const formik  = useFormik({
            initialValues:{
                password:'',
                phone:'',
                email:''
            },

            validationSchema:Yup.object({
                password:Yup.string()
                    .max(5,"name must be 8 character")
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
       
        
// console.log(formik.touched)
    return <div>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                        type="text"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.pasword}
                        placeholder="enter password"
                        onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password  && <p style={{color:'red'}}>{formik.errors.password}</p>}
            </div>
            <div>
            <input
                    type="text"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="enter email"
                    onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email  && <p style={{color:'red'}}>{formik.errors.email}</p>}
            </div>
            <div>
            <input
                    type="phone"
                    name="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    placeholder="enter phone"
                    onBlur={formik.handleBlur}
            />
           {formik.touched.phone && formik.errors.phone  && <p style={{color:'red'}}>{formik.errors.phone}</p>}
            </div>
            <button type="submit">submit</button>
            </form>
    </div>    
}

export default AddAdmin