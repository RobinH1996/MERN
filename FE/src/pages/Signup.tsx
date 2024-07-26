import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import Input from "../components/Input";
import Button from "../components/Button";
import IconShow from "../components/icons/IconShow";
import IconHide from "../components/icons/IconHide";
import { updateAuth } from "../store/appSlice";
import { callApi, SetLoadingStatus } from "../utils/helper";
import { toast } from "react-toastify";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, set_email] = useState<string>();
  const [emailValid, set_emailValid] = useState<boolean>(false);
  const [firstName, set_firstName] = useState<string>();
  const [lastName, set_lastName] = useState<string>();
  const [password, set_password] = useState<string>();
  const [confirmPwd, set_confirmPwd] = useState<string>();

  const handleFirstName = (e: string) => {
    set_firstName(e);
  };

  const handleLastName = (e: string) => {
    set_lastName(e);
  };

  const handleEmail = (e: string) => {
    if (validator.isEmail(e)) set_emailValid(true);
    else set_emailValid(false);
    set_email(e);
  };

  const handlePassword = (e: string) => {
    set_password(e);
  };

  const handleConfirmPassword = (e: string) => {
    set_confirmPwd(e);
  };

  const handleRegister = async () => {
    SetLoadingStatus(true);
    const { res, error }: any = await callApi("POST", "/auth/register", {
      email,
      password,
      firstName,
      lastName,
    });
    if (res) {
      toast.success("You are successfully registered");
      navigate("/dashboard");
    } else {
      toast.error(error.error);
    }
    SetLoadingStatus(false);
  };

  const autoLogin = async () => {
    SetLoadingStatus(true);
    const { res, error }: any = await callApi(
      "GET",
      "/auth/getUserData?role=user",
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
      <div className="max-w-[400px] h-fit px-5">
        <p className="text-4xl font-bold text-blackColour text-center">
          Create an account
        </p>
        <div className="mt-10 flex flex-col gap-4">
          <div className="w-full flex gap-4">
            <div className="w-1/2">
              <Input
                type="text"
                value={firstName}
                onChange={handleFirstName}
                placeholder="John"
                label="First Name"
              />
            </div>
            <div className="w-1/2">
              <Input
                type="text"
                value={lastName}
                onChange={handleLastName}
                placeholder="Doe"
                label="Last Name"
              />
            </div>
          </div>
          <Input
            type="email"
            value={email}
            onChange={handleEmail}
            placeholder="Enter Your Email"
            label="Email Address"
            error={email && !emailValid ? true : false}
            errorText="Email address isn't valid"
          />
          <Input
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="Enter Your Password"
            label="Password"
            icon={<IconShow className="w-6 text-gray-600" />}
            iconOther={<IconHide className="w-6 text-gray-600" />}
            error={password && password.length < 8 ? true : false}
            errorText="Password length must be at least 8 characters"
          />
          <Input
            type="password"
            value={confirmPwd}
            onChange={handleConfirmPassword}
            placeholder="Repeat Your Password"
            label="Repeat Password"
            icon={<IconShow className="w-6 text-gray-600" />}
            iconOther={<IconHide className="w-6 text-gray-600" />}
            error={confirmPwd && confirmPwd !== password ? true : false}
            errorText="Confirm password must be the same as your password"
          />
          <div className="mt-2">
            <Button
              onClick={handleRegister}
              size="Lg"
              disabled={
                !firstName ||
                !lastName ||
                !email ||
                !emailValid ||
                !password ||
                password.length < 8 ||
                !confirmPwd ||
                confirmPwd !== password
              }
            >
              Sign Up
            </Button>
          </div>
          <div className="text-lg font-medium text-gray-800 flex items-center gap-3">
            Already have an account?
            <p
              className="text-mainColour1 cursor-pointer hover:underline w-fit"
              onClick={() => navigate("/login")}
            >
              Log In
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
