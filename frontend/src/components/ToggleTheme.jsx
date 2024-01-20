// ToggleTheme.js
import React from "react";
import PropTypes from "prop-types";
import { MdOutlineNightlight, MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "../Context/ThemeContext"; // Adjust the path

const ToggleTheme = (props) => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <span
      onClick={handleToggle}
      className={`flex items-center gap-2  ${!props.open && "justify-center"}`}
    >
      {theme === "light" ? (
        <>
          <MdOutlineWbSunny size={25} />
          <p className={`${!props.open && "hidden"}`}>Light mode</p>
        </>
      ) : (
        <>
          <MdOutlineNightlight size={25} />
          <p className={`${!props.open && "hidden"}`}>Night mode</p>
        </>
      )}
    </span>
  );
};

ToggleTheme.propTypes = {
  open: PropTypes.bool,
};

export default ToggleTheme;
