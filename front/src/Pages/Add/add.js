import axios from 'axios'
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet'

function AddPage() {
    return (
        <>
            <Helmet>
                <title> Add Page </title>
            </Helmet>

            <>

                <Formik
                    initialValues={{ imageUrl: '', name: '', title: '', price: '' }}
                    validationSchema={Yup.object({
                        imageUrl: Yup.string()
                            .max(200, 'Must be 200 characters or less')
                            .required('Required'),
                        name: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                        title: Yup.string(),
                        price: Yup.number()
                    })}
                    onSubmit={(values) => {
                        axios.post("http://localhost:4002/cards", values)
                    }}
                >
                    <Form>
                        <label htmlFor="imageUrl"> imageUrl</label>
                        <Field name="imageUrl" type="text" />
                        <ErrorMessage name="imageUrl" />

                        <label htmlFor="name"> name</label>
                        <Field name="name" type="text" />
                        <ErrorMessage name="name" />

                        <label htmlFor="title"> Title</label>
                        <Field name="title" type="text" />
                        <ErrorMessage name="title" />

                        <label htmlFor="price"> price</label>
                        <Field name="price" type="text" />
                        <ErrorMessage name="price" />

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>


            </>
        </>
    )
}

export default AddPage