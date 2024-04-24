// import { Routes, Route, Link } from "react-router-dom";
// // import { useEffect } from "react";
// // import axios from "axios";
// // import "react-toastify/dist/ReactToastify.css";
// // import { AuthProvider } from "./contexts/Auth";
// import HomePage from "./Pages/HomePage";
// import AboutPage from "./Pages/About";
// import ContactPage from "./Pages/Contact";
// import PolicyPage from "./Pages/Policy";
// import Layout from ".//Components/Layout/Layout";

// import Registerpage from "./Components/RegisterPage";
// import LoginPage from "./Components/LoginPage";

// // import RetailerContainer from "./Components/RetailerContainer";
// // import retailerReducer from "./reducers/Retailers-reducer";
// // import { RetailerContext } from "./contexts/root-context";

// // import { useReducer } from "react";
// // import { useDispatch, useSelector } from "react-redux";

// // import { startGetProduct } from "./actions/product-action";
// // import ProductsConatiner from "./Components/Products-Container";
// // import ProductForm from "./Components/Product-form";
// // import ProductTable from "./Components/Product-Table";

// // import CategoryContainer from "./Components/Categories/Category-Container";
// // import CategoryForm from "./Components/Categories/Category-Form";

// function App() {
//   //useReducer
//   // const [retailer, retailerDispatch] = useReducer(retailerReducer, {
//   //   data: [],
//   //   serverErrors: [],
//   // });

//   // //redux
//   // const dispatch = useDispatch();
//   // const products = useSelector((state) => {
//   //   return state.products;
//   // });

//   // useEffect(() => {
//   //   //useReducer
//   //   (async () => {
//   //     try {
//   //       const response = await axios.get(
//   //         "http://localhost:3055/api/list/users"
//   //       );
//   //       retailerDispatch({ type: "SET_RETAILERS", payload: response.data });
//   //       console.log(response);
//   //     } catch (err) {
//   //       console.log(err);
//   //     }
//   //   })();

//   //   //Redux
//   //   dispatch(startGetProduct());
//   // }, [dispatch]);

//   return (
//     <div className="App">
//       <Layout>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/home">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//             <li>
//               <Link to="/policy">PolicyPage</Link>
//             </li>
//             <li>
//               <Link to="/register">Register</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/retailerContainer">RegisterContainer</Link>
//             </li>
//             <li>
//               <Link to="/category">CategoryTable</Link>
//             </li>
//             <li>
//               <Link to="/addcategory">Catgeory Form</Link>
//             </li>
//             <li>
//               <Link to="/productsContainer">Products Conatiner</Link>
//             </li>
//             <li>
//               <Link to="/addProducts">products Form</Link>
//             </li>
//             <li>
//               <Link to="/productsTable">Products table</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/home" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/policy" element={<PolicyPage />} />
//           <Route path="/register" element={<Registerpage />} />
//           <Route path="/login" element={<LoginPage />} />
//         </Routes>

//         {/*<RetailerContext.Provider value={{ retailer, retailerDispatch }}>
//           <Routes>
//             <Route path="/home" element={<HomePage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/policy" element={<PolicyPage />} />
//             <Route path="/register" element={<Registerpage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/retailerContainer" element={<RetailerContainer />} />
//             <Route path="/category" element={<CategoryContainer />} />
//             <Route path="/addcategory" element={<CategoryForm />} />
//             <Route path="/productsContainer" element={<ProductsConatiner />} />
//             <Route path="/addProducts" element={<ProductForm />} />
//             <Route
//               path="/productsTable"
//               element={<ProductTable products={products.data.length} />}
//             />
//             <Route path="/dashboard" element={<h1>Dashboard</h1>} />
//             <Route path="/" element={<h1>Home</h1>} />
//           </Routes>
//         </RetailerContext.Provider>*/}
//       </Layout>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Registerpage from "./Components/RegisterPage";
import LoginPage from "./Components/LoginPage";
// import { AuthProvider } from "./contexts/Auth";
import UserDashboard from "./Components/user/Dashboard";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import PolicyPage from "./Pages/Policy";
import { PageNotFound } from "./Pages/PageNotFound";
import EmployeeRoute from "./Components/Routes/EmployeeRoute";
import EmployeeDashoard from "./Pages/Admin/EmployeeDashboard";
import CategoryContainer from "./Components/Categories/Category-Container";
import Orders from "./Components/user/orders";
import Profile from "./Components/user/Profile";
import ProductsConatiner from "./Components/Products-Container";
import ProductForm from "./Components/Product-form";
import GRNContainer from "./Components/GRN/Grn-Container";
import GRNTable from "./Components/GRN/Grn-Table";
import GRNForm from "./Components/GRN/GRN-Form";
import ReservationContainer from "./Components/Reservation-Dashboard/Reservation-Container";
import ReservationForm from "./Components/Reservation-Dashboard/Reservation-Form";
import ReservationTable from "./Components/Reservation-Dashboard/Reservation-Table";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="retailer" element={<UserDashboard />} />
          <Route path="retailer/orders" element={<Orders />} />
          <Route path="retailer/profile" element={<Profile />} />
        </Route>

        <Route path="/dashboard" element={<EmployeeRoute />}>
          <Route path="employee" element={<EmployeeDashoard />} />
          <Route
            path="employee/create-category"
            element={<CategoryContainer />}
          />
          <Route path="employee/list-product" element={<ProductsConatiner />} />
          <Route path="employee/create-product" element={<ProductForm />} />
          <Route path="employee/list-grn" element={<GRNContainer />} />
          <Route path="employee/list-grn" element={<GRNTable />} />
          <Route path="employee/create-grn" element={<GRNForm />} />
          {/* <Route
            path="employee/list-reserve"
            element={<ReservationContainer />}
          /> */}
          <Route path="employee/list-reserve" element={<ReservationTable />} />
          <Route path="employee/create-reserve" element={<ReservationForm />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
