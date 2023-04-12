import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../../utils/queries';
import AuthService from '../../utils/auth';

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


function OwnerProfile() {
  let userId = null;

  // Check if the user is logged in
  if (AuthService.loggedIn()) {
    // Get the user profile from the AuthService
    const profile = AuthService.getProfile();
    userId = profile.userId; // This depends on the structure of your token payload
  }

  const { data, loading, error } = useQuery(GET_USER_BY_ID, {
    variables: { userId: userId },
    skip: !userId, // Skip the query if there is no userId
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.user ? data.user : dummyUser;

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Homepage</Link>
        {user ? (
          <>
            <h1>{user.firstName} {user.lastName}'s Profile</h1>
            <img alt={`${user.firstName} ${user.lastName}`} src={user.avatar} />
            <ul>
              <li className="mx-1">Email: {user.email}</li>
              <li className="mx-1">Location: {user.location}</li>
              <li className="mx-1">
                <h3>Pet Information</h3>
              </li>

              <ul className="flex-row">
                {user.pets.map((pet) => (
                  <li key={pet._id} className="mx-2">
                    <img alt={pet.name} src={pet.image} />
                    <p>Name: {pet.name}</p>
                    <p>Type: {pet.type}</p>
                    <p>Breed: {pet.breed}</p>
                    <p>Age: {pet.age}</p>
                  </li>
                ))}
              </ul>
            </ul>
            <div className="mx-1">
              <Link to="/serviceHistory">Services History</Link>
            </div>
          </>
        ) : (
          <h3>
            You need to be logged in to see this. Use the navigation links above
            to sign up or{" "}
            <Link to={`/login`}>
              log in
            </Link>
            !
          </h3>
        )}
      </div>
    </>
  );
}

export default OwnerProfile;

