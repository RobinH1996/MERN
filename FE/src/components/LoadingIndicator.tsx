import React from "react";
import { useSelector } from "react-redux";
import IconLoading from "./icons/IconLoading";
import { getLoading } from "../store/appSlice";

export default function LoadingIndicator() {
  const loading = useSelector(getLoading);

  return loading ? (
    <div className="fixed top-0 left-0 z-[10000] w-full h-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm opacity-1">
      <IconLoading className="w-14 h-14 animate-spin" />
    </div>
  ) : null;
}
