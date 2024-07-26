import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import Avatar from "./Avatar";
import { SetLoadingStatus, callApi } from "../utils/helper";
import { toast } from "react-toastify";
import { clearAuth, getAuth } from "../store/appSlice";
import IconDownArrow from "./icons/IconDownArrow";
import IconLogout from "./icons/IconLogout";

export default function UserInfo() {
  const modalVisible = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(getAuth);

  const [displayModal, set_displayModal] = useState(false);

  const signOut = async () => {
    SetLoadingStatus(true);
    const { res, error }: any = await callApi("GET", "/auth/logout");
    if (res) {
      dispatch(clearAuth());
      navigate("/login");
    } else {
      toast.error(error.message);
    }
    SetLoadingStatus(false);
  };

  return (
    <div className="z-50 w-fit">
      <div className="flex items-center justify-between">
        <div className="flex items-center ml-3 gap-6">
          <div className="flex items-center gap-3 relative">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 "
            >
              {/* <Avatar
                src={auth?.profileImage}
                fullname={auth?.displayName}
                size="Sm"
              /> */}
            </button>
            <div
              className="flex items-center gap-1 cursor-pointer hover:opacity-75"
              onClick={() => set_displayModal(!displayModal)}
            >
              <div className="font-normal text-[16px] text-grey-600">
                {auth?.displayName}
              </div>
              <IconDownArrow className="w-4 h-4 text-[#60606C]" />
            </div>
            {displayModal && (
              <>
                <div
                  className="fixed w-full h-full top-0 left-0 cursor-default z-[60]"
                  onClick={() => set_displayModal(false)}
                />
                <div
                  ref={modalVisible}
                  className="absolute z-[100] right-0 top-10 px-5 py-3 bg-white shadow-custom rounded-md min-w-[250px] flex items-center justify-center"
                >
                  <button
                    onClick={signOut}
                    className="middle none center rounded-lg bg-grey-600 px-3 py-1.5 font-sans text-base font-medium text-blackColour shadow-md shadow-grey-600/20 transition-all hover:shadow-lg hover:shadow-grey-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex items-center gap-2"
                  >
                    <IconLogout className="w-[18px] h-[18px] text-blackColour" />
                    Sign out
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
