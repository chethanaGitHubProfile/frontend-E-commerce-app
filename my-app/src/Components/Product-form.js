// import { useState, useEffect } from "react";
// import { startCreateProduct } from "../actions/product-action";
// import { useDispatch } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// export default function ProductForm() {
//   const dispatch = useDispatch();
//   // const serverErrors = useSelector((state) => {
//   //   return state.products.serverErrors;
//   // });
//   // console.log("ServerErrors", serverErrors);

//   const [errors, setErrors] = useState({
//     name: false,
//     mpr: false,
//     discount: false,
//     categoryId: "",
//   });
//   // const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     mrp: "",
//     B2BPrice: "",
//     discount: "",
//     categoryId: "",
//     photo: null,
//   });
//   const [categories, setCatgeories] = useState([]);

//   useEffect(() => {
//     //Calculate B2Bprice
//     if (form.mrp && form.discount) {
//       //parse value to number
//       const mrp = parseFloat(form.mrp);
//       const discount = parseFloat(form.discount);
//       const B2BPrice = Math.abs((discount / 100) * mrp - mrp);
//       setForm((preForm) => ({ ...preForm, B2BPrice }));
//     }
//     //fetch categories when component mont
//     fetchCategories();
//   }, [form.mrp, form.discount, dispatch]);

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get("http://localhost:3055/api/category");
//       console.log("catgeories", response.data);
//       setCatgeories(response.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setForm((preForm) => ({ ...preForm, photo: file }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const updateErrors = {
//       name: form.name === "",
//       mrp: form.mrp === "",
//       disocunt: form.discount === "",
//       categoryId: form.categoryId === "",
//     };

//     setErrors(updateErrors);

//     //client validation
//     if (form.name === "") {
//       updateErrors.name.required = true;
//       // hasErrors = true;
//     }
//     if (form.mrp === "") {
//       updateErrors.mrp.required = true;
//       // hasErrors = true;
//     }
//     if (form.discount === "") {
//       updateErrors.discount.required = true;
//       // hasErrors = true;
//     }
//     if (form.categoryId === "") {
//       updateErrors.categoryId.required = true;
//     }
//     // if (!form.file) {
//     //   console.log("No file Uploaded");
//     //   return;
//     // }

//     //Ensure category is selected
//     if (!form.categoryId) {
//       console.log("Please select a category");
//       return;
//     }
//     //redux
//     //Ensure user is logged in and has a valid token
//     // dispatch(startCreateProduct(form, token));

//     try {
//       const productData = new FormData();
//       productData.append("name", form.name);
//       productData.append("mrp", form.mrp);
//       productData.append("discount", form.discount);
//       productData.append("categoryId", form.categoryId);
//       productData.append("photo", form.photo);
//       // const config = {
//       //   headers: {
//       //     Authorization: "token",
//       //     "Content-Type": "multipart/form-data", // Make sure to set content type to multipart/form-data
//       //   },
//       // };
//       const token = localStorage.getItem("token"); // Retrive teh token from localStorage
//       if (!token) {
//         return;
//       }
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       };
//       const product = axios.post(
//         "http://localhost:3055/api/products",
//         productData,
//         config
//       );
//       //redux
//       //Ensure user is logged in and has a valid token
//       // const token = localStorage.getItem("token"); // Retrive the token from localStorage
//       // console.log(token);
//       dispatch(startCreateProduct(form));
//       if (product.data.success) {
//         toast.success("Product Created successfully");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("something went worng");
//     }

//     // Reset the form after successful submission if needed
//     setForm({
//       name: "",
//       mrp: "",
//       discount: "",
//       categoryId: "",
//       photo: null,
//     });
//   };

//   return (
//     <div className="container-mt-5">
//       <h2>Add products</h2>
//       {/* {serverErrors && serverErrors.length > 0 && (
//         <div>
//           {" "}
//           These errors prohibited the form from being saved :
//           <ul>
//             {serverErrors.map((ele, i) => {
//               return <li key={i}>{ele.msg}</li>;
//             })}
//           </ul>
//         </div>
//       )} */}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="name">
//             Product Name
//           </label>
//           <input
//             type="text"
//             value={form.name}
//             onChange={handleChange}
//             name="name"
//             id="name"
//             className="form-control"
//           />
//           {errors.name && (
//             <span className="text-danger">product Name is required</span>
//           )}
//         </div>

//         <div className="form-group">
//           <label className="form-label" htmlFor="mrp">
//             MRP
//           </label>
//           <input
//             type="text"
//             value={form.mrp}
//             onChange={handleChange}
//             name="mrp"
//             id="mrp"
//             className="form-control"
//           />
//           {errors.mrp && <span className="text-danger">mrp is required</span>}
//         </div>
//         <div className="form-group">
//           <label className="form-label" htmlFor="discount">
//             discount
//           </label>
//           <input
//             type="text"
//             value={form.discount}
//             onChange={handleChange}
//             name="discount"
//             id="discount"
//             className="form-control"
//           />
//           {errors.discount && (
//             <span className="text-danger">discount is required</span>
//           )}
//         </div>
//         <div className="form-gruop">
//           <label className="form-label" htmlFor="B2BPrice">
//             B2Bprice
//           </label>
//           <input
//             type="text"
//             value={form.B2BPrice}
//             onChange={handleChange}
//             name="B2BPrice"
//             id="B2BPrice"
//             className="form-control"
//             disabled
//           />
//         </div>
//         <div className="form-group">
//           <label className="form-label" htmlFor="categoryId">
//             category
//           </label>
//           <select
//             id="categortId"
//             name="categoryId"
//             value={form.categoryId}
//             onChange={handleChange}
//             className="form-control"
//           >
//             {errors.categoryId && errors.categoryId.required && (
//               <span className="text-danger">Category is required</span>
//             )}

//             <option value="">Select Category</option>
//             {categories.map((category) => {
//               return (
//                 <option key={category._id} value={category._id}>
//                   {category.name}
//                 </option>
//               );
//             })}
//           </select>
//         </div>

//         <div className="mb-3">
//           <label className="btn btn-outline-secondary col-md-12">
//             {form.photo ? form.photo.name : "Upload photo"}
//             <input
//               type="file"
//               name="photo"
//               accept="image/*"
//               onChange={handleFileChange}
//               hidden
//             />
//           </label>
//         </div>
//         {/* preview image */}
//         {form.photo && (
//           <div className="text-center">
//             <img
//               src={URL.createObjectURL(form.photo)}
//               alt="product_photo"
//               height={"200px"}
//               className="img img-responsive"
//             />
//           </div>
//         )}
//         <input type="submit" className="btn btn-primary" />
//       </form>
//     </div>
//   );
// }

import React, { useEffect, useState, useReducer } from "react";
import Layout from "./Layout/Layout";
import EmployeeMenu from "./Layout/EmployeeMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import productReducer from "../reducers/Product-Reducer";
export default function ProductForm() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [mrp, setMrp] = useState("");
  const [discount, setDiscount] = useState("");
  const [B2BPrice, setB2BPrice] = useState("");
  const [category, setCategory] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  const navigate = useNavigate();

  const [products, productDispatch] = useReducer(productReducer, {
    data: [],
    serverErrors: [],
  });

  useEffect(() => {
    //Calculate B2Bprice
    if (mrp && discount) {
      //parse value to number
      const mrpValue = parseFloat(mrp);
      const discountvalue = parseFloat(discount);
      const B2BPricevalue = Math.abs(
        (discountvalue / 100) * mrpValue - mrpValue
      );
      setB2BPrice(B2BPricevalue);
    }
    fetchCategories();
  }, [mrp, discount]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3055/api/category");
      console.log("catgeories", response.data);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };

  //create Product
  const handleCreate = async (e) => {
    e.preventDefault();

    // //  client validation
    // if (name === "") {
    //   updateErrors.name.required = true;
    //   // hasErrors = true;
    // }
    // if (mrp === "") {
    //   updateErrors.mrp.required = true;
    //   // hasErrors = true;
    // }
    // if (discount === "") {
    //   updateErrors.discount.required = true;
    //   // hasErrors = true;
    // }
    // if (category === "") {
    //   updateErrors.categoryId.required = true;
    // }
    // // if (!form.file) {
    // //   console.log("No file Uploaded");
    // //   return;
    // // }

    // //Ensure category is selected
    // if (!category) {
    //   console.log("Please select a category");
    //   return;
    // }

    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("mrp", mrp);
      productData.append("discount", discount);
      productData.append("category", category);
      productData.append("photo", photo);
      productData.append("B2BPrice", B2BPrice);

      const response = await axios.post(
        "http://localhost:3055/api/products",
        productData
      );
      if (response.data) {
        toast.success("Product Created Successfully");
        fetchData();
        navigate("/dashboard/employee/list-product");
      } else {
        toast.error(response.data?.message);
      }
      fetchData();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while creating product");
    }
  };

  //to upadate products
  useEffect(() => {
    fetchData();
  }, []);

  //List products-
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3055/api/products");
      console.log("products", response.data);
      productDispatch({ type: "SET_PRODUCT", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Create product-retalio App"}>
      <div className="conatiner fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <EmployeeMenu />
          </div>
          <div className="col-md-9">
            <h1>Create product</h1>
            <div>
              {/* {console.log("c", categories)} */}
              <select
                className="form-select mb-3"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Catgeory</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "upload photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="md-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Enter product name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <br />
              <div className="md-3">
                <input
                  type="text"
                  value={mrp}
                  placeholder="Enter product mrp"
                  className="form-control"
                  onChange={(e) => setMrp(e.target.value)}
                />
              </div>
              <br />
              <div className="md-3">
                <input
                  type="text"
                  value={discount}
                  placeholder="Enter product discount"
                  className="form-control"
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
              <br />
              <div>
                <input
                  type="text"
                  value={B2BPrice}
                  placeholder="B2BPrice"
                  className="form-control"
                  onChange={(e) => setB2BPrice(e.target.value)}
                  disabled
                />
              </div>{" "}
              <br />
              <div className="mb-3">
                <select
                  bordered={false}
                  value={shipping}
                  placeholder="Select Shipping"
                  size="large"
                  className="form-select mb-3"
                  onChange={(value) => setShipping(value)}
                >
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </div>
              <br />
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  CREATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
