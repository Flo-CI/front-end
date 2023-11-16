import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const useAuthenticationCheck = () => {
  const authenticator = useSelector((state) => state.authentication);

  useEffect(() => {
    if (!authenticator.isAuthenticated) {
      window.location.href = "front-end/login";
    }

    // For when we implement cookies
    // const token = localStorage.getItem("token");
    // if (!token) {
    //   useNavigate("/login");
    // }
  }, []);
};

export default useAuthenticationCheck;
