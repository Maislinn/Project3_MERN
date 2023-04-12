import React, { useState, useEffect } from "react";
// import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

function OwnerProfile() {
    const { data } = useQuery(QUERY_USER);
    console.log(data);
    const dummyUser = {
        _id: "1",
        name: "John Doe",
        email: "john.doe@example.com",
        location: "New York, NY",
        avatar: "Man-with-Cat-2.jpg",
        pets: [{
            name: "Buddy",
            type: "Dog",
            breed: "Labrador",
            age: 3,
            image: "Labrador.jpg",
        },
        {
            name: "Sunny",
            type: "Dog",
            breed: "Golden Retriever",
            age: 5,
            image: "Golden-Retriever.jpg",
        }],
        orders: [{
            purchaseDate: "2021-01-01",
            services: [{
                name: "Grooming",
                price: 50,
                description: "A full grooming service for your pet.",
            },
            {
                name: "Walking",
                price: 20,
                description: "A 30 minute walk for your pet.",
            }]

        }]
    };

    var user = dummyUser;
    console.log(47, user);
    return (
        <>
            <div className="container my-1">
                <Link to="/">← Back to Homepage</Link>
                {user ? (
                    <>
                        <h1>{user.name}'s Profile</h1>
                        <img alt={user.name} src={`/images/${user.avatar}`} />
                        <ul>
                            <li className="mx-1">Email: {user.email}</li>
                            <li className="mx-1">Location: {user.location}</li>
                            <li className="mx-1"><h3>Pet Information</h3></li>

                            <ul className="flex-row">
                                {user.pets.map((pet) => (
                                    <li key={pet.name} className="mx-2">
                                        <img alt={pet.name} src={`/images/${pet.image}`} />
                                        <p>Name: {pet.name}</p>
                                        <p>Type: {pet.type}</p>
                                        <p>Breed: {pet.breed}</p>
                                        <p>Age: {pet.age}</p>
                                    </li>
                                ))}
                            </ul>
                        </ul>
                        <div className="mx-1">
                            <Link to="/serviceHistory">
                                Services History
                            </Link>
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
