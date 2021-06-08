import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContexts";


function CreatePost() {
    let history = useHistory();
    const { authState } =  useContext(AuthContext)

    const initialValues = {
        title: "",
        postText: "",
        // username: ""
    };

    useEffect(() => {
        if (!authState.status) {
            history.push("/login");
        }
        
      }, []);


    const onSubmit = (data) => {
        axios.post("https://thawing-shore-53496.herokuapp.com/posts", data, {
            headers: {accessToken:localStorage.getItem("accessToken")}}).then((response) => {
        history.push("/"); // going back to home page
    });
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        // username: Yup.string().min(3).max(15).required(),
    })

    return (
        <div className="createPostPage">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="formContainer">
                    <label>Title: </label>
                    <ErrorMessage name="title" component="span" />
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost"
                        name="title"
                        placeholder="Ex. title"
                    />

                    <label>Post: </label>
                    <ErrorMessage name="postText" component="span" />
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost"
                        name="postText"
                        placeholder="Ex. Post"
                    />

                    {/* <label>Username: </label>
                    <ErrorMessage name="username" component="span" />
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost"
                        name="username"
                        placeholder="Ex. John123"
                    /> */}

                    <button type="submit">Create post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePost
