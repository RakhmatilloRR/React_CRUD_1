import React, { createContext, useReducer } from "react";
import reducer from "./AppReducer";

// Initial State
const initialState = {
  users: [
    { id: 1646424210587, fname: "User One" },
    { id: 1646424210588, fname: "User Two" },
    { id: 1646424210589, fname: "User Three" },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
function GlobalProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  // Create
  const addUser = (u) => {
    dispatch({
      type: "create",
      payload: {newUser: u},
    });
  };
  // Read
  const getUser = (fname) => {
    dispatch({
      type: "read",
      payload: {fname: fname},
    });
   
  };
  // Delete
  const removeUser = (id) => {
    dispatch({
      type: "delete",
      payload: {id: id},
    });
  };
  // Update
  const editUser = (u) => {
    dispatch({
      type: "update",
      payload: {user: u},
    });
  };
  
  const data = { users: state.users, addUser, getUser, removeUser, editUser };
  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
