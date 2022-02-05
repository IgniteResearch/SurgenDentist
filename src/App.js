import React from 'react';
import './App.css';
import Routes from './components/Routes';
import { UserProvider } from './components/useAuth';
import { toast } from 'react-toastify';
import ApolloClient from "apollo-boost";


toast.configure({
  autoClose: 3000,
  draggable: false,
  //etc you get the idea
});

const client = new ApolloClient({
  uri: "[Insert URI of GraphQL endpoint]"
});

function App() {
  return (
    <UserProvider>
      <Routes/>
    </UserProvider>
  );
}

export default App;
