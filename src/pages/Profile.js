import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

function Profile() {
    let { id } = useParams();
    const  [username, setUsername] = useState("");
    
    useEffect(() => {
        axios.get(`https://thawing-shore-53496.herokuapp.com/auth/basicinfo/${id}`).then(
            (response) => {
                setUsername(response.data.username);
            }
        )
    }, [])

    return (
        <div className="profilePageContainer">
            <div className="basicInfo"><h1> Username: {username} </h1></div>
            <div className="listOfPosts"></div>
        </div>
    )
}

export default Profile
