import { toast , ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast = () => {
  toast("Already Exist!");
  // toast.success("Success Notification !", {
  //   position: "top-center",
  // });

  toast.error("Error Notification !", {
    position: "top-left",
  });
};
