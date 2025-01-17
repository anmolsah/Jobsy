// import { useUser } from "@clerk/clerk-react";
// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";

// const ProtectedRoutes = ({ children }) => {
//   const [isSignedIn, user, isLoaded] = useUser();
//   const [pathname] = useLocation();

//   if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
//     return <Navigate to="/?sign-in=true" />;
//   }

//   return children;
// };

// export default ProtectedRoutes;
import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser(); // Correct destructuring
  const location = useLocation(); // `useLocation` returns an object, not an array

  if (isLoaded && !isSignedIn) {
    // Redirect to the sign-in page if the user is not signed in
    return <Navigate to="/?sign-in=true" state={{ from: location }} />;
  }

  return children; // Render children if the user is signed in
};

export default ProtectedRoutes;
