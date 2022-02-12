import { TryRounded } from "@mui/icons-material";
import { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import Filter from "./Filter";

export default function FilterMobile(props) {
  const { register, handleSubmit, getValues } = useForm({ mode: "onChange" });
  const [show, setShow] = useState(true);
  const onSubmit = (data) => {
    console.log(data);
    setShow(true);
  };
  return (
    <>
      {!show && (
        <div className="w-screen min-h-screen absolute bg-white flex justify-center ">
          <Filter
            mobile={true}
            onSubmit={onSubmit}
            register={register}
            getValues={getValues}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
      <div
        onClick={() => {
          setShow(!show);
          if (!show) onSubmit(getValues());
        }}
        className={`${
          !show && "transform  duration-150 rounded-[20000px] w-20 h-20 ease-in"
        }
        ${
          show && "transform duration-150  rounded-3xl w-32 h-16 ease-in"
        } bg-black cursor-pointer text fixed top-full left-1/2 transform -translate-x-1/2 -translate-y-full -my-4 flex justify-center items-center text-white`}
      >
        <span
          className={`text-2xl ${
            !show && "transform scale-x-0 duration-150 opacity-0"
          }${show && "transform scale-x-100 duration-150 opacity-100"}`}
        >
          Filter
        </span>
        <span
          className={`text-2xl absolute ${
            !show && "transform scale-x-100 duration-150 opacity-100"
          }${show && "transform scale-x-0 duration-150 opacity-0"}`}
        >
          <svg
            className="text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="#000000"
              fillRule="nonzero"
              className="text-white fill-current"
            >
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
            </g>
          </svg>
        </span>
      </div>
    </>
  );
}
