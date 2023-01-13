import Switch from "@/components/Switch";
import classNames from "classnames";
import { useEffect, useState } from "react";

export function Index() {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick(e) {
    setIsSelected(e);
  }
  return (
    <div
      className={classNames(
        "flex justify-center bg-gradientblack bg-no-repeat bg-cover min-w-max absolute h-[100%] w-[100%]",
        {
          "bg-gradientwhite": isSelected,
          "text-black": isSelected,
        }
      )}
    >
      <div className="flex flex-col items-center p-6 w-[588px] h-[712px] mt-[56px] ">
        <img
          src="img-03.png"
          alt=""
          className="flex w-[50%] circle border-white border"
        />
        <span className="flex justify-center m-2">@mattmascarenhas</span>
        <Switch handleDataFromChild={handleClick} />
        <span className="mt-4 text-xl">Conheça meu portfólio</span>

        <div className="mb-6">
          <a href="">
            <button
              className={classNames(
                "bg-zinc-700 rounded-xl border border-white  border-opacity-30 mt-6 gap-4 bg-opacity-50 w-[540px] h-[56px] text-2xl",
                {
                  "border-black": isSelected,
                  "border-opacity-30": isSelected,
                  "bg-opacity-5 ": isSelected,
                }
              )}
            >
              Site Portfólio Front
            </button>
          </a>
          <a href="#">
            <button
              className={classNames(
                "bg-zinc-700 rounded-xl border border-white  border-opacity-30 mt-6 gap-4 bg-opacity-50 w-[540px] h-[56px] text-2xl",
                {
                  "border-black": isSelected,
                  "border-opacity-30": isSelected,
                  "bg-opacity-5 ": isSelected,
                }
              )}
            >
              Saint Glamour Paris
            </button>
          </a>
          <a href="#">
            <button
              className={classNames(
                "bg-zinc-700 rounded-xl border border-white border-opacity-30 mt-6 gap-4 bg-opacity-50 w-[540px] h-[56px] text-2xl",
                {
                  "border-black": isSelected,
                  "border-opacity-30": isSelected,
                  "bg-opacity-5 ": isSelected,
                }
              )}
            >
              Apresentação do GeraDoc
            </button>
          </a>
          <a href="https://github.com/mattmascarenhas/geradoc-1.0-complete">
            <button
              className={classNames(
                "bg-zinc-700 rounded-xl border border-white border-opacity-30 mt-6 gap-4 bg-opacity-50 w-[540px] h-[56px] text-2xl",
                {
                  "border-black": isSelected,
                  "border-opacity-30": isSelected,
                  "bg-opacity-5 ": isSelected,
                }
              )}
            >
              Documentação do GeraDoc
            </button>
          </a>
        </div>
        <div className="flex mt-6 gap-6">
          <a href="https://github.com/mattmascarenhas">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 40 40"
            >
              <path
                className={classNames("fill-white", {
                  "fill-black": isSelected,
                })}
                d="M19.25 9.5c-5.798 0-10.5 4.823-10.5 10.767 0 4.758 3.01 8.79 7.181 10.214a.822.822 0 00.178.019c.39 0 .54-.286.54-.534 0-.258-.01-.933-.015-1.833a4.802 4.802 0 01-1.059.126c-2.02 0-2.48-1.57-2.48-1.57-.478-1.242-1.167-1.575-1.167-1.575-.914-.642-.005-.66.066-.66h.004c1.055.093 1.608 1.115 1.608 1.115.525.919 1.228 1.176 1.857 1.176a2.953 2.953 0 001.2-.28c.093-.695.365-1.168.665-1.44-2.33-.272-4.781-1.195-4.781-5.32 0-1.177.408-2.138 1.078-2.888-.108-.272-.469-1.369.103-2.85a.872.872 0 01.235-.023c.38 0 1.237.145 2.653 1.13a9.761 9.761 0 015.259 0c1.416-.985 2.273-1.13 2.653-1.13a.872.872 0 01.235.023c.571 1.481.21 2.578.103 2.85.67.755 1.078 1.716 1.078 2.888 0 4.134-2.456 5.043-4.796 5.31.375.333.713.99.713 1.993 0 1.439-.014 2.601-.014 2.953 0 .253.145.539.534.539a.9.9 0 00.188-.019c4.176-1.425 7.181-5.46 7.181-10.214 0-5.944-4.702-10.767-10.5-10.767z"
              ></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mattmascarenhas/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 40 40"
            >
              <path
                className={classNames("fill-white", {
                  "fill-black": isSelected,
                })}
                d="M28.07 9.5H10.544c-.957 0-1.794.69-1.794 1.636V28.7c0 .951.837 1.799 1.794 1.799h17.521c.963 0 1.685-.854 1.685-1.8V11.137c.006-.947-.722-1.636-1.68-1.636zM15.26 27.005H12.25V17.65h3.008v9.354zm-1.4-10.777h-.022c-.963 0-1.586-.716-1.586-1.614 0-.913.64-1.613 1.624-1.613.984 0 1.587.695 1.608 1.614 0 .897-.624 1.613-1.625 1.613zm12.395 10.776h-3.009V21.89c0-1.225-.438-2.063-1.526-2.063-.832 0-1.324.563-1.543 1.111-.082.197-.104.465-.104.739v5.328h-3.008V17.65h3.008v1.301c.438-.623 1.122-1.52 2.713-1.52 1.975 0 3.469 1.301 3.469 4.108v5.465z"
              ></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/mattmascarenhas/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 40 40"
            >
              <path
                className={classNames("fill-white", {
                  "fill-black": isSelected,
                })}
                fillRule="evenodd"
                d="M26.715 12.535a4.388 4.388 0 00-3.09-1.285h-8.75a4.388 4.388 0 00-4.375 4.375v8.75a4.388 4.388 0 004.375 4.375h8.75A4.388 4.388 0 0028 24.375v-8.75a4.388 4.388 0 00-1.285-3.09zM14.875 9.5h8.75c3.369 0 6.125 2.756 6.125 6.125v8.75c0 3.369-2.756 6.125-6.125 6.125h-8.75c-3.369 0-6.125-2.756-6.125-6.125v-8.75c0-3.369 2.756-6.125 6.125-6.125zm9.333 5.904a1.312 1.312 0 101.459-2.183 1.312 1.312 0 00-1.459 2.183zm-3.013 1.686a3.5 3.5 0 10-3.89 5.82 3.5 3.5 0 003.89-5.82zm-4.862-1.455a5.25 5.25 0 115.833 8.73 5.25 5.25 0 01-5.833-8.73z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Index;
