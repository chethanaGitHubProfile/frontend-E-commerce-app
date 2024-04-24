// import { useState, useEffect } from "react";
// import { useAuth } from "../../contexts/Auth";
// import { Outlet, Navigate } from "react-router-dom";
// import axios from "axios";
// // import Spinner from "../Spinner";
// export default function PrivateRoute() {
//   const [ok, setOk] = useState(false);
//   const [auth, setAuth] = useAuth();
//   useEffect(() => {
//     const authCheck = async () => {
//       const response = await axios.get("http://localhost:3055/user-auth", {
//         headers: {
//           Authorization: auth?.token, // Include authorization token in the request headers
//         },
//       });
//       if (response.data.ok) {
//         setOk(true);
//       } else {
//         setOk(false);
//       }
//     };
//     if (auth?.token) {
//       authCheck();
//     }
//   }, [auth?.token]);
//   return ok ? <Outlet /> : <Navigate to="/login" />;
// }

import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/Auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const response = await axios.get("http://localhost:3055/user-auth");

      console.log("response", response.data);
      if (response.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);
  return ok ? <Outlet /> : <Spinner />;
}
