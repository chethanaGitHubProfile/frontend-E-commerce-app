import React, { useEffect, useReducer, useState } from "react";
import Layout from "../Layout/Layout";
import EmployeeMenu from "../Layout/EmployeeMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import reserveReducer from "../../reducers/Reserve-Reducer";
import { updateReserveQuantity } from "../../Components/Product-Table";
import { Select } from "antd";
const { Option } = Select;

export default function ReservationForm() {
  const [reserve, reserveDispatch] = useReducer(reserveReducer, {
    data: [],
    serverErrors: [],
  });
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");
  const [reserveQuantity, setreserveQuantity] = useState("");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3055/api/products");
      if (response.data) {
        setProducts(response.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting product");
    }
  };

  //fetch product to search and add
  useEffect(() => {
    fetchProducts();
  }, []);

  //create Reserve
  const handleCreate = async (e) => {
    e.preventDefault();

    //find the selected product
    const selectedProduct = products.find((prod) => prod.name === product);
    // console.log("selected prod", selectedProduct);
    if (!selectedProduct) {
      toast.error("Please select the product");
      return;
    }
    const reservationData = {
      productId: selectedProduct._id,
      name: product,
      reserveQuantity: reserveQuantity,
      startDate: startDate,
      endDate: endDate,
    };
    console.log("obj", reservationData);
    try {
      const response = await axios.post(
        "http://localhost:3055/api/create/product/reservation",
        reservationData
      );
      console.log("reservation", response.data);
      //update reserve qty in the product stock field
      const newReserveQuantity =
        selectedProduct.reserveQuantity + parseInt(reserveQuantity);
      updateReserveQuantity(selectedProduct._id, newReserveQuantity);
      reserveDispatch({ type: "CREATE_RESERVE", payload: response.data });
      navigate("/dashboard/employee/list-reserve");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while creating Reserve");
    }
  };

  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <EmployeeMenu />
          </div>
          <div className="col-md-9">
            <h2>Reservation Form</h2>
            <div className="col-md-9">
              <label className="col-md-9">Select product</label>
              <Select
                variant={false}
                placeholder="select product"
                size="large"
                showSearch
                className="form-select m-3"
                onChange={(value) => {
                  setProduct(value);
                }}
              >
                {products?.map((prod) => (
                  <Option key={prod._id} value={prod.name}>
                    {prod.name}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="col-md-9">
              <div className="col-md-9">
                <label>Enter Reserve quantity</label>
                <input
                  type="text"
                  value={reserveQuantity}
                  placeholder="Enter reserve quantity"
                  size="large"
                  className="form-control"
                  onChange={(e) => setreserveQuantity(e.target.value)}
                />
              </div>{" "}
              <br />
            </div>
            <div className="col-md-9">
              <div className="col-md-9">
                <label>Select start date</label>
                <input
                  type="date"
                  value={startDate}
                  size="large"
                  className="form-control"
                  onChange={(e) => setstartDate(e.target.value)}
                />
              </div>
              <br />
              <div className="col-md-9">
                <div className="col-md-9">
                  <label>Select endDate</label>
                  <input
                    type="date"
                    value={endDate}
                    size="large"
                    className="form-control"
                    onChange={(e) => setendDate(e.target.value)}
                  />
                </div>
                <br />
                <div className="md-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleCreate}
                  >
                    Create Reserve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
