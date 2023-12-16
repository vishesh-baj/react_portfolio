import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
const OAuth = () => {
  const onGoogleClick = () => {
    try {
      console.log("Error");
      const provider = new GoogleAuthProvider();
    } catch (error) {
      toast.error("Coult not authorize with google");
    }
  };
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
};

export default OAuth;
