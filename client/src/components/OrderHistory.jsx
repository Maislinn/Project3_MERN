import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const OrderHistory = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME);

  const user = data?.me || data?.user || {};
  console.log(data?.me)
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.loggedIn()) {
    return (
      <h4 className="text-center m-3">
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div className="m-5 grid place-items-center">
      <div className="px-6 py-4 max-w-sm rounded overflow-hidden">
        <h2 className="font-bold text-center text-xl mb-2">
        Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        <div>
          <h2 className="text-center text-3xl">Your Orders</h2>
          <p className="text-center m-3">Coming Soon!</p>
        </div>
        
      </div>
    </div>
  );
};

export default OrderHistory;
