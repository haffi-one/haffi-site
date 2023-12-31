"use client";

import { useRef, MouseEvent } from "react";

interface OptionProps {
  name: string;
  imgSrc: string;
  title: string;
  description: string;
  children: React.ReactNode;
  onSelect: (e: MouseEvent<HTMLInputElement>) => void;
}
const Option = ({
  imgSrc,
  name,
  title,
  description,
  children,
  onSelect,
}: OptionProps) => {
  const radioRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    if (radioRef.current) {
      radioRef.current.click();
    }
  };
  return (
    <div className="w-100">
      <div
        className="w-100 border-2 border-gray-dark-1 text-gray-dark-1 flex flex-row gap-5 px-6 py-4 rounded-2xl cursor-pointer"
        onClick={onClick}
      >
        <div className="py-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Option icon" src={imgSrc} width={40} height={40} />
        </div>
        <div>
          <p className="text-[20px] font-medium">{title}</p>
          <p className="text-gray-dark-2">{description}</p>
          <input
            className="peer hidden"
            type="radio"
            value={name}
            name="option"
            ref={radioRef}
            onClick={onSelect}
          ></input>
          <div className="overflow-hidden p-0 h-0 opacity-0 peer-checked:pt-4 peer-checked:h-auto peer-checked:opacity-100 transition-all duration-200">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option;
