import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import styles from "./Layout.module.css";
import { SideBar, NavBar } from "../index";
import { useStateContext } from "../../context/ContextProvider";
const Layout = ({ children }) => {
  const { activeMenu, currentColor } = useStateContext();
  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-6" style={{ zIndex: "1000" }}>
        <TooltipComponent content="Settings" position="Top">
          <button
            type="button"
            className="text-3xl p-3 hover: drop-shadow-xl hover:bg-light-gray text-white"
            style={{ background: "blue", borderRadius: "50% " }}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <div
          className={`w-72 fixed  dark:bg-secondary-dark-bg bg-white ${styles.sidebar}`}
        >
          <SideBar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <SideBar />
        </div>
      )}
      <div
        className={`dark:bg-main-dark-bg bg-main-bg min-h-screen   w-full  ${
          activeMenu ? "md:ml-72 " : "flex-2"
        }`}
      >
        <div
          className={`fixed md:static bg-main-bg dark:bg-main-dark-bg ${styles.navbar} w-full`}
        >
          <NavBar />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default Layout;
