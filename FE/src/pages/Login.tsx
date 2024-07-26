import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import IconShow from "../components/icons/IconShow";
import IconHide from "../components/icons/IconHide";
import { callApi, SetLoadingStatus } from "../utils/helper";
import { updateAuth } from "../store/appSlice";
import { toast } from "react-toastify";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mail, set_mail] = useState<string>();
  const [password, set_password] = useState<string>();

  const handleEmail = (e: string) => {
    set_mail(e);
  };

  const handlePassword = (e: string) => {
    set_password(e);
  };

  const handleSignIn = async () => {
    SetLoadingStatus(true);
    const { res, error }: any = await callApi("POST", "/auth/login", {
      email: mail,
      password: password,
    });
    if (res) {
      toast.success("You are successfully logged in");
      navigate("/dashboard");
    } else {
      toast.error(error.message);
    }
    SetLoadingStatus(false);
  };

  const autoLogin = async () => {
    SetLoadingStatus(true);
    const { res, error }: any = await callApi(
      "GET",
      "/auth/getUserData",
      null,
      false,
      true
    );
    if (res) {
      console.log(res);
      dispatch(updateAuth(res.user));
      navigate("/dashboard");
    }
    SetLoadingStatus(false);
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="max-w-[400px] w-full h-fit px-5">
        <p className="text-4xl font-bold text-blackColour text-center">
          Welcome back!
        </p>
        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="email"
            value={mail}
            onChange={handleEmail}
            placeholder="Enter Your Email"
            label="Email Address"
          />
          <Input
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="Enter Your Password"
            label="Password"
            icon={<IconShow className="w-6 text-gray-600" />}
            iconOther={<IconHide className="w-6 text-gray-600" />}
          />
          <Button
            onClick={handleSignIn}
            size="Lg"
            disabled={!mail || !password}
          >
            Sign In
          </Button>
          <div className="text-lg font-medium text-gray-800 flex items-center gap-3">
            New to My Shop?
            <p
              className="text-mainColour1 cursor-pointer hover:underline w-fit"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
