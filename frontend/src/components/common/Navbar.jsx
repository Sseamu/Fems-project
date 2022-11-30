import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../../context/UserContext";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full m-3 p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    token,
    setToken,
  } = useStateContext();

  const handleLogout = () => {
    setToken(null);
  };

  //스크린 사이즈에 따라 동작하기 , 계속 감지하지 않고, 특정 기준점을 만들어줘서 거기서만 감지되게?
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []); // [] 안에 아무것도 안넣으면 최초 실행시만 실행

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <TooltipComponent content="profile" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer mt-6 hover:bg-light-gray rounded-lg">
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">JUN</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        <div className="has-text-center m-3">
          <h1>
            FEMS
            {token && (
              <button
                className="rounded-md border-2 border-solid border-gray-300 ml-3 p-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </h1>
        </div>
        {/* {token && ( */}
        {
          // <button
          //   className="button border-gray-900 border-soli bg-gray-400 rounded-full"
          //   onClick={handleLogout}
          // >
          //   Logout
          // </button>
        }
      </div>
    </div>
  );
};
export default Navbar;