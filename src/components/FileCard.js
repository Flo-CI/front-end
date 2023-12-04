import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

export default functions FileCard({
    fileName,
    fileDate,
    fileStatus,
}) {
    const { darkMode } = useContext(DarkModeContext);
    const color = darkMode
        ? 'bg-green-500 text-white rounded-t-xl rou'
        : 'bg-green-300 rounded-t-xl rou';
    return (

}