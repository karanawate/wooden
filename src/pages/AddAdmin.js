import { useFormik, yupToFormErrors } from "formik";
import React from "react";
import * as Yup from 'yup';

const AddAdmin = () =>{
        const formik  = useFormik({
            initialValues:{
                name:'',
                phone:'',
                email:''
            },

            validationSchema:Yup.object({
                name:Yup.string()
                    .max(5,"name must be 8 character")
                    .required('this field is required'),
                email:Yup.string('this field is requred')
                         .required('this field is requird'),
                phone:Yup.string('this field is req')
                .required('this field is required')
                        
            }),

            onSubmit:(values) => {
                console.log("form submit",values)
            } 

            

        });
       
        
 console.log(formik.touched)
    return <div>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        placeholder="enter name"
                        onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name  && <p style={{color:'red'}}>{formik.errors.name}</p>}
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