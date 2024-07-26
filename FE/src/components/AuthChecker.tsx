import React, { useEffect } from "react";
import { SetLoadingStatus, callApi } from "../utils/helper";
import { useDispatch } from "react-redux";
import { updateAuth } from "../store/appSlice";
import { useLocation, useNavigate } from "react-router-dom";

export default function AuthChecker() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const authenticatedUserPaths = ["/dashboard"];

  const checkAuth = async () => {
    SetLoadingStatus(true);
    const { res, error }: any = await callApi("GET", "/auth/getUserData");
    if (res) {
      console.log(res);
      dispatch(updateAuth(res.user));
    } else {
      navigate("/login");
    }
    SetLoadingStatus(false);
  };

  useEffect(() => {
    if (authenticatedUserPaths.includes(location.pathname)) {
      checkAuth();
    }
  }, [location.pathname]);

  return <></>;
}
