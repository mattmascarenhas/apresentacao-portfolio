import classNames from "classnames";
import { MoonStars } from "phosphor-react";
import { useEffect, useState } from "react";

export function Switch({ handleDataFromChild }) {
  const [isSelected, setIsSelected] = useState(true);
  //console.log(isSelected);
  function handleClick(e) {
    handleDataFromChild(isSelected);
  }
  return (
    <div
      value={isSelected}
      onClick={() => {
        setIsSelected(!isSelected);
        handleClick();
      }}
      className={classNames(
        "flex w-16 h-6 bg-gray-500 rounded-full  items-center transition-all duration-500",
        {
          "bg-green-500": isSelected,
        }
      )}
    >
      <MoonStars
        className={classNames(
          "flex items-center h-8 w-8 rounded-full bg-white text-black p-2 transition-all duration-500 shadow-lg",
          {
            "ml-8": isSelected,
          }
        )}
      />
    </div>
  );
}

export default Switch;
