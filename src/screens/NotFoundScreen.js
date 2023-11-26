import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import useAuthenticationCheck from "../hooks/useAuthenticationCheck";

const NotFoundScreen = () => {
  // useAuthenticationCheck();

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="text-8xl font-bold text-green-400 pb-4">
          404 Not Found
        </h1>
        <p className="font-semibold pb-2">
          Sorry, we couldn't find what you were looking for...
        </p>
        <Link to={"/dashboard"} className="p-2 font-semibold bg-green-400 rounded-md">
          Back to dashboard
        </Link>
      </div>
    </>
  );
};

export default NotFoundScreen;
