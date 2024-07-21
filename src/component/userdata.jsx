import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    firstName: "Ayush",
    lastName: "Rawat",
    email: "rwtashu8@gmail.com",
    contactNo: "8557067972",
    city: "Ludhiana",
    state: "Punjab",
    address: "Sherpur,Ludhiana",
    password: "ayush123",
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
