import React from 'react'
import { Formik,Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';
const Signup = () => {

    const validate = Yup.object().shape({
        firstName:Yup.string()
        .max(15,"Must be 15 characters or less")
        .required('FirstName is Required'),
        lastName:Yup.string()
        .max(20,"Must be 20 characters or less")
        .required('Last Name is required'),
        email:Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
        password:Yup.string()
        .min(6,"Must be 15 characters or less")
        .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'),null],'Password must Match')
            .required('Confirm Password is required')


    });

    return (
        <Formik
        initialValues={{
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:''
        }}
        validationSchema={validate}
        onSubmit={values=>{
            console.log(values)
        }}
        >
           
            {
                formik =>(
                    <div>
                        <h1 className='my-4 font-weight-bold-display-4'>Sign Up</h1>
                     
                        <Form>
                            <TextField label="First Name" name="firstName" type="text"/>
                            <TextField label="Last Name" name="lastName" type="text"/>
                            <TextField label="Email" name="email" type="email"/>
                            <TextField label="Password" name="password" type="password"/>
                            <TextField label="Confirm Password" name="confirmPassword" type="password"/>
                            <button className='btn btn-dark mr-3 ' type="submit">Register</button>
                            <button className='btn btn-danger m-3' type='reset'>Reset</button>
                        </Form>
                    </div>
                )
            }
        </Formik>
    )
}

export default Signup
