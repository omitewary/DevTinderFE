import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (user) return;
    try {
      const res = await axios.get(`${BASE_URL}/profile/view`, {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (error) {
      console.error(error);
      if (error.status === 401) {
        return navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <NavBar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default Body;
