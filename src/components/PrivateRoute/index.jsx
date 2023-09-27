// import React from "react";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = (props) => {
//   const isLoggedIn = false;
//   return (
//     <div>
//       {isLoggedIn === true ? (
//         <>{props.children}</>
//       ) : (
//         <>{<Navigate to="/loginPage" />}</>
//       )}
//     </div>
//   );
// };

// export default PrivateRoute;

import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserStatusContext } from "../../App";

const PrivateRoute = (props) => {
  const { isLoggedIn, setLoggedIn } = useContext(UserStatusContext);

  return (
    <div>
      {isLoggedIn === true ? 
        <>{props.children}</>
       : 
        <>{<Navigate to="/loginPage" />}</>
      }
    </div>
  );
};

export default PrivateRoute;
