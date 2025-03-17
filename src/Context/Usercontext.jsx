import React, { createContext, useState, useContext, useEffect } from "react";

// Create the UserContext
const UserContext = createContext();

// Custom hook to use the user context
export const useUser = () => useContext(UserContext);

// UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const username = localStorage.getItem("username");
      if (!username) {
        console.log("Username not available in localStorage");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:3000/api/auth/user?username=${username}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          console.error(`Error: ${response.status} - ${response.statusText}`);
          return;
        }

        const data = await response.json();
        console.log("User data:", data);
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
