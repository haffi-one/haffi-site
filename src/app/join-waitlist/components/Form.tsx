"use client";
import { EmailInput, WhatsAppNumberInput } from "@/components/Inputs";
import Option from "@/components/Option";
import { MouseEvent, useCallback, useState } from "react";
import { useRouter } from "next/navigation";

type FormType = "whatsapp" | "email";

const Form = () => {
  const router = useRouter();
  const [type, setType] = useState<FormType>("whatsapp");
  const [value, setValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const handleOnSelect = (_type: FormType) => {
    return () => {
      if (_type != type) {
        setType(_type);
        setValue("");
        setIsInvalid(false);
      }
    };
  };

  const onSubmit = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (isInvalid) return;

      fetch("/join-waitlist/add", {
        method: "POST",
        body: JSON.stringify({
          type,
          value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.success) {
            router.push("/join-waitlist/thank-you");
          }
        });
    },
    [type, value, isInvalid, router]
  );

  const cannotSubmit = value.trim() == "" || isInvalid;
  return (
    <>
      <div className="gap-5 w-full flex flex-col md:flex-row">
        <Option
          name="whatsapp"
          imgSrc="/whatsapp.svg"
          title="Join using WhatsApp Business"
          description="Connect instantly and secure your waitlist spot"
          onSelect={handleOnSelect("whatsapp")}
        >
          <WhatsAppNumberInput
            value={value}
            isInvalid={isInvalid}
            onValueChange={setValue}
            setIsInvalid={setIsInvalid}
          />
        </Option>
        <Option
          name="email"
          imgSrc="/email.svg"
          title="Join using Email"
          description="Connect instantly and secure your waitlist spot"
          onSelect={handleOnSelect("email")}
        >
          <EmailInput
            value={value}
            isInvalid={isInvalid}
            onValueChange={setValue}
            setIsInvalid={setIsInvalid}
          />
        </Option>
      </div>
      <button
        className="border-2 border-gray-dark-1 bg-green-1 text-gray-dark-1 text-lg font-semibold py-3 px-7 rounded-full hover:bg-green-2 disabled:opacity-45"
        disabled={cannotSubmit}
        onClick={onSubmit}
      >
        Join
      </button>
    </>
  );
};

export default Form;