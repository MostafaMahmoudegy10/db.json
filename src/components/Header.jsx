import React, { useState } from 'react'
import { FaCircleXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { MdDarkMode,MdOutlineWbSunny } from "react-icons/md";
import { Link } from 'react-router-dom';
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";

function NavList({ theme, setTheme }) {

  function setDarkTheme() {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    setTheme("dark");
  }

  function setLightTheme() {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    setTheme("light");
  }

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as={Link}
        to="/"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        Home
      </Typography>
      <Typography
        as={Link}
        to="/sign-in"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <MdLogin className="text-2xl" />
      </Typography>
      <Typography
        as="span"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        {theme === "dark" ? (
          <MdDarkMode
            onClick={setLightTheme}
            className="text-2xl cursor-pointer"
          />
        ) : (
          <MdOutlineWbSunny
            onClick={setDarkTheme}
            className="text-2xl cursor-pointer"
          />
        )}
      </Typography>
    </ul>
  );
}

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-4xl p-2 lg:rounded-full lg:pl-6 bg-green-500 dark:bg-gray-700">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as={Link}
          to="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <NavList theme={theme} setTheme={setTheme} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <FaCircleXmark className="h-6 w-6" strokeWidth={2} />
          ) : (
            <FaBars className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList theme={theme} setTheme={setTheme} />
      </Collapse>
    </Navbar>
  );
}
