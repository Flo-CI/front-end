import { useEffect } from "react";
import { useSelector } from "react-redux";

const useAuthenticationCheck = () => {
  const authenticator = useSelector((state) => state.authentication);

  useEffect(() => {
    if (!authenticator.isAuthenticated) {
      window.location.href = "/front-end";
    }
  }, [authenticator.isAuthenticated]);
};

export default useAuthenticationCheck;
