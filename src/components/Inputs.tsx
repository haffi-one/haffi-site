"use client";
import { phone } from "phone";
import { validate as email } from "email-validator";
import { ChangeEvent, FocusEvent, useState } from "react";

export const WhatsAppNumberInput = () => {
  const [value, setValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const validateInput = (e: FocusEvent<HTMLInputElement>) => {
    setIsInvalid(!phone(value).isValid);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsInvalid(false);
  };

  return (
    <>
      <input
        type="text"
        placeholder="WA Business Phone Number"
        className={` w-full border-2 border-gray-dark-2 rounded-lg px-4 py-3 text-gray-dark-1 ${
          isInvalid ? "border-red-500 outline-none" : "outline-green-1"
        }`}
        onBlur={validateInput}
        onChange={onChange}
      />
      {isInvalid && (
        <p className="mt-2 text-red-500">Not a valid phone number</p>
      )}
    </>
  );
};

export const EmailInput = () => {
  const [value, setValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const validateInput = (e: FocusEvent<HTMLInputElement>) => {
    setIsInvalid(!email(value));
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsInvalid(false);
  };

  return (
    <>
      <input
        type="text"
        placeholder="your@email.com"
        className={` w-full border-2 border-gray-dark-2 rounded-lg px-4 py-3 text-gray-dark-1 ${
          isInvalid ? "border-red-500 outline-none" : "outline-green-1"
        }`}
        onBlur={validateInput}
        onChange={onChange}
      />
      {isInvalid && <p className="mt-2 text-red-500">Not a valid Email</p>}
    </>
  );
};
