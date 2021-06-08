import React from 'react'
import { Link } from "react-router-dom";


function PageNotFound() {
    return (
        <div>
            <h1>Page not found! Go home.</h1>
            <h3>
            <Link to="/"> Home Page</Link>
            </h3>
            
        </div>
    )
}

export default PageNotFound