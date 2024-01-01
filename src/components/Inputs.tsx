"use client";
import { phone } from "phone";
import { validate as email } from "email-validator";
import { ChangeEvent, FocusEvent, useState } from "react";

interface InputProps {
  value: string;
  isInvalid: boolean;
  onValueChange: (value: string) => void;
  setIsInvalid: (bool: boolean) => void;
}

export const WhatsAppNumberInput = ({
  value,
  isInvalid,
  onValueChange,
  setIsInvalid,
}: InputProps) => {
  const validateInput = (e: FocusEvent<HTMLInputElement>) => {
    const _isInvalid = !phone(value).isValid;
    setIsInvalid(_isInvalid);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
    setIsInvalid(false);
  };

  return (
    <>
      <input
        type="type"
        autoComplete="tel"
        placeholder="e.g: +1 (000) 0000"
        className={` w-full border-2 border-gray-dark-2 rounded-lg px-4 py-3 text-gray-dark-1 ${
          isInvalid
            ? "border-red-500 outline-none"
            : "border-green-1 outline-none"
        }`}
        onBlur={validateInput}
        onChange={onChange}
        value={value}
      />
      {isInvalid && (
        <p className="mt-0 text-red-500">Not a valid phone number</p>
      )}
    </>
  );
};

export const EmailInput = ({
  value,
  isInvalid,
  onValueChange,
  setIsInvalid,
}: InputProps) => {
  const validateInput = (e: FocusEvent<HTMLInputElement>) => {
    const _isInvalid = !email(value);
    setIsInvalid(_isInvalid);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
    setIsInvalid(false);
  };

  return (
    <>
      <input
        type="email"
        placeholder="your@email.com"
        className={` w-full border-2 border-gray-dark-2 rounded-lg px-4 py-3 text-gray-dark-1 ${
          isInvalid
            ? "border-red-500 outline-none"
            : "border-green-1 outline-none"
        }`}
        onBlur={validateInput}
        onChange={onChange}
        value={value}
      />
      {isInvalid && <p className="mt-0 text-red-500">Not a valid Email</p>}
    </>
  );
};

export const BusinessNameInput = ({
  value,

  onValueChange,
}: Omit<InputProps, "isInvalid" | "setIsInvalid">) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
    setIsInvalid(false);
  };

  const validateInput = () => {
    setIsInvalid(value.trim() == "");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Your Business Name"
        className={` w-full border-2 border-gray-dark-2 rounded-lg px-4 py-3 text-gray-dark-1 ${
          isInvalid
            ? "border-red-500 outline-none"
            : "border-green-1 outline-none"
        }`}
        onBlur={validateInput}
        onChange={onChange}
        value={value}
      />
      {isInvalid && (
        <p className="mt-0 text-red-500">Please enter name of business</p>
      )}
    </>
  );
};
