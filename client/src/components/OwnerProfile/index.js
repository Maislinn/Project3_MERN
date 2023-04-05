import React, { useState, useEffect } from "react";
// import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OwnerProfile() {
    const { ownerUserData } = useQuery(QUERY_USER);
    let user;

    if (ownerUserData) {
        user = ownerUserData.user;
    } else { user = dummyUser; }

    const dummyUser = {
        name: "John Doe",
        email: "john.doe@example.com",
        location: "New York, NY",
        pets: [{
            name: "Buddy",
            type: "Dog",
            breed: "Labrador",
            age: 3,
        },
        {
            name: "Sunny",
            type: "Dog",
            breed: "Golden Retriever",
            age: 5,
        }]
    };

    return (
        <>
            <div className="container my-1">
                <Link to="/">← Back to Homepage</Link>
                {user ? (
                    <>
                        <h1>{user.name}'s Profile</h1>
                        <p>Email: {user.email}</p>
                        <p>Location: {user.location}</p>
                        <h3>Pet Information</h3>
                        <div className="flex-row">
                            {user.pets.map((pet) => (
                                <div key={pet.name}>
                                    <img alt={pet.name} src={`/images/${pet.image}`} />
                                    <p>Name: {pet.name}</p>
                                    <p>Type: {pet.type}</p>
                                    <p>Breed: {pet.breed}</p>
                                    <p>Age: {pet.age}</p>
                                </div>
                            ))}
                        </div>
                    </>) : (
                    <h3>You need to be logged in to see this. Use the navigation links above to sign up or <Link to={`/login`}>log in</Link>!
                    </h3>
                )}
            </div>
        </>
    )
}


export default OwnerProfile;
