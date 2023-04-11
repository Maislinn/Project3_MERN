//import { createContext, useState } from "react";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Nav from './components/Nav';
import Sitters from './pages/Sitters/Sitters';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import ServiceHistory from './pages/Users/ServiceHistory';
import OwnerProfile from './pages/Users/OwnerProfile';

const httpLink = createHttpLink({
  uri: '/graphql',
  //Insert in Herpoku link here when deployed to Heroku
  //uri:'https://petpal.herokuapp.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [client, setUserName] = useState("client")

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/success" element={<Success />} />
              <Route path="/serviceHistory"  element={<ServiceHistory />} />
              <Route path="/products/:id" element={<Detail />}  />
              {/* Added the path below to test the page */}
              <Route path="/ownerprofile" element={<OwnerProfile />}  />
              <Route path="*" 
                element={<NoMatch />} 
              />
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}


export default App;
