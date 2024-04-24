import axios from "axios";
export const startGetProduct = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3055/api/products");
      //console.log("product details", response);
      dispatch(setProducts(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

const setProducts = (data) => {
  return {
    type: "SET_PRODUCTS",
    payload: data,
  };
};

//redux
export const startCreateProduct = (formData, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3055/api/products",
        formData,
        {
          headers: {
            "Content-Type": "mutipart/form-data",
            Authorization: localStorage.getItem("token"), //include the token in the Authorization header
          },
        }
      );

      //handle successfull product creation here
      console.log("product Creation", response.data);
      dispatch(addProducts(response.data));
      //resetForm();
    } catch (err) {
      console.log(err);
      dispatch(setServerErrors(err.response.data.errors));
    }
  };
};
const addProducts = (product) => {
  return {
    type: "ADD_PRODUCTS",
    payload: product,
  };
};
const setServerErrors = (errors) => {
  return {
    type: "SET_ERRORS",
    payload: errors,
  };
};
