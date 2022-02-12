import { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";

const checkFilters = [
  {
    id: "Market",
    name: "Color",
    options: [
      { value: "Primary", label: "Primary", checked: false },
      { value: "Secondary", label: "Secondary", checked: false },
    ],
  },
  {
    id: "Type",
    name: "Color",
    options: [
      { value: "3D", label: "3D", checked: false },
      { value: "Image", label: "Image", checked: false },
      { value: "Model", label: "Model", checked: true },
      { value: "Video", label: "Video", checked: false },
    ],
  },
];
const availChecks = [
  { value: "Rnm", label: "Reserve not met", checked: true },
  { value: "Ra", label: "Live auction", checked: true },
];

const CustomCheckbox = ({ register, id, props }) => {
  return (
    <div
      key={props.value}
      className={"my-2 border-2 rounded-md py-2 pl-3 flex items-center "}
    >
      <input
        {...register(props.value)}
        type="checkbox"
        className="opacity-0 absolute h-4 w-4 cursor-pointer"
        id={id}
        defaultChecked={props.checked}
        name={props.value}
      />
      <div className="bg-white border-2  rounded-md border-black w-4 h-4 flex flex-shrink-0 justify-center items-center mr-2 focus:border-black">
        <svg
          className="fill-current hidden w-2 h-2  text-black pointer-events-none"
          version="1.1"
          viewBox="0 0 17 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(-9 -11)" fill="#000000" fillRule="nonzero">
              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
            </g>
          </g>
        </svg>
      </div>
      <label
        className="ml-2 min-w-0 flex-1 cursor-pointer text-black "
        htmlFor={id}
      >
        {props.label}
      </label>
    </div>
  );
};

const CustomRadio = ({
  register,
  catogary,
  label,
  onClick,
  defaultChecked,
}) => {
  return (
    <>
      <div className={"my-2 border-2 rounded-md py-2 pl-3 flex items-center"}>
        <input
          type="radio"
          id={label}
          value={label}
          {...register(catogary)}
          onClick={onClick}
          className={"opacity-0 absolute h-4 w-4 cursor-pointer"}
          defaultChecked={defaultChecked}
        />
        <div className="bg-white border-2  rounded-xl border-black w-4 h-4 flex flex-shrink-0 justify-center items-center mr-2 focus:border-black">
          <svg
            className="fill-current hidden w-2 h-2  text-black pointer-events-none"
            version="1.1"
            viewBox="0 0 17 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <g
                transform="translate( 0.5,-2)"
                fill="#000000"
                fillRule="nonzero"
              >
                <circle cx="8" cy="8" r="8" />
              </g>
            </g>
          </svg>
        </div>
        <label
          className="ml-2 min-w-0 flex-1 cursor-pointer text-black "
          htmlFor={label}
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default function Filter({
  mobile,
  onSubmit,
  register,
  handleSubmit,
  getValues,
}) {
  // const { register, handleSubmit, getValues } = useForm({ mode: "onChange" });
  // const onSubmit = () => console.log(getValues());
  const handleClick = (i) => {};
  const [value, setValue] = useState(0);

  return (
    <div className="w-80 p-3">
      <form
        onSubmit={handleSubmit(onSubmit)}
        onChange={(e) => {
          if (e.nativeEvent.inputType == "insertText" || mobile) return;
          onSubmit(getValues());
        }}
      >
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-500 hover:text-black">
                <span className="">Price range</span>
                <span className="ml-6 flex items-center">
                  {open ? (
                    <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition origin-top opacity-0 duration-200 ease-out"
                enterFrom="transform scale-y-50 opacity-100"
                enterTo="transform
                scale-y-100 opacity-100"
                leave="transition origin-top
                duration-150 ease-out"
                leaveFrom="transform scale-y-100
                opacity-100"
                leaveTo="transform scale-y-50 opacity-0"
              >
                <Disclosure.Panel className={"p-3 pt-0 m-0 space-y-2"}>
                  <div className={"flex flex-row  w-full"}>
                    <div className="border border-gray-300  rounded-md p-1  flex flex-row">
                      <input
                        {...register("start")}
                        type={"text"}
                        placeholder="0.00"
                        // onChange={()}
                        className={"focus-visible:outline-none w-full pl-2"}
                      />
                      <span className={"m-1 text-gray-500"}>ETH</span>
                    </div>
                    <div className={"m-2"}></div>
                    <div className="border border-gray-300  rounded-md p-1  flex flex-row">
                      <input
                        {...register("end")}
                        type={"text"}
                        placeholder="0.00"
                        className={"focus-visible:outline-none w-full pl-2"}
                      />
                      <span className={"m-1 text-gray-500"}>ETH</span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="border-2 border rounded border-gray-300 w-full p-2 hover:bg-black hover:text-white hover:border-black transition  "
                  >
                    Set Price
                  </button>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-500 hover:text-black">
                <span className="">Availability</span>
                <span className="ml-6 flex items-center">
                  {open ? (
                    <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition origin-top opacity-0 duration-200 ease-out"
                enterFrom="transform scale-y-50 opacity-100"
                enterTo="transform
                scale-y-100 opacity-100"
                leave="transition origin-top
                duration-150 ease-out"
                leaveFrom="transform scale-y-100
                opacity-100"
                leaveTo="transform scale-y-50 opacity-0"
              >
                <Disclosure.Panel className={"p-3 pt-0 m-0 space-y-2"}>
                  <CustomRadio
                    register={register}
                    catogary={"Availability"}
                    label={"All"}
                    onClick={() => setValue(getValues())}
                    defaultChecked={true}
                  ></CustomRadio>
                  <CustomRadio
                    register={register}
                    catogary={"Availability"}
                    label={"Available"}
                    onClick={() => setValue(getValues())}
                    defaultChecked={false}
                  ></CustomRadio>

                  <Disclosure defaultOpen={true}>
                    {({ open }) => (
                      <>
                        {getValues().Availability == "Available" && (
                          <div>
                            {}
                            <Transition
                              enter="transition origin-top opacity-0 duration-200 ease-out"
                              enterFrom="transform scale-y-50 opacity-100"
                              enterTo="transform scale-y-100 opacity-100"
                              leave="transition origin-top duration-150 ease-out"
                              leaveFrom="transform scale-y-100 opacity-100"
                              leaveTo="transform scale-y-50 opacity-0"
                            >
                              <Disclosure.Panel
                                static
                                className="p-3 pt-0 m-0 space-y-2 "
                              >
                                {availChecks.map((option, i) => (
                                  <CustomCheckbox
                                    id={"avail" + i}
                                    register={register}
                                    key={"avail" + i}
                                    props={option}
                                  ></CustomCheckbox>
                                ))}
                              </Disclosure.Panel>
                            </Transition>
                          </div>
                        )}
                      </>
                    )}
                  </Disclosure>
                  <CustomRadio
                    register={register}
                    catogary={"Availability"}
                    label={"Sold"}
                    onClick={() => setValue(getValues())}
                    defaultChecked={false}
                  ></CustomRadio>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        {checkFilters.map((section) => (
          <Disclosure key={section.id} defaultOpen={true}>
            {({ open }) => (
              <>
                <Disclosure.Button className="px-2 py-3 pb-1 bg-white w-full flex items-center justify-between text-gray-500 hover:text-black">
                  <span className="">{section.id}</span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
                <Transition
                  enter="transition origin-top opacity-0 duration-200 ease-out"
                  enterFrom="transform scale-y-50 opacity-100"
                  enterTo="transform scale-y-100 opacity-100"
                  leave="transition origin-top duration-150 ease-out"
                  leaveFrom="transform scale-y-100 opacity-100"
                  leaveTo="transform scale-y-50 opacity-0"
                >
                  <Disclosure.Panel className="p-3 pt-0 m-0 space-y-2 ">
                    {section.options.map((option, i) => (
                      <CustomCheckbox
                        key={`${section.id}-${i}`}
                        register={register}
                        id={`${section.id}-${i}`}
                        props={option}
                      ></CustomCheckbox>
                    ))}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </form>
    </div>
  );
}
