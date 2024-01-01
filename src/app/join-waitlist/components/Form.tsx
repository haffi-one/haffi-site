"use client";
import {
  EmailInput,
  WhatsAppNumberInput,
  BusinessNameInput,
} from "@/components/Inputs";
import Option from "@/components/Option";
import { MouseEvent, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@/lib/tracking";

type FormType = "whatsapp" | "email";

const Form = () => {
  const router = useRouter();
  const [type, setType] = useState<FormType>("whatsapp");
  const [valueWhatsapp, setValueWhatsApp] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valueBusinessName, setValueBusinessName] = useState("");
  const [isInvalidWhatsapp, setIsInvalidWhatsApp] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const handleOnSelect = (_type: FormType) => {
    return () => {
      if (_type != type) {
        setType(_type);
        track("waitlist_form.type_change.select", {
          _type,
        });
      }
    };
  };

  const isInvalid = type == "whatsapp" ? isInvalidWhatsapp : isInvalidEmail;
  const formValue = type == "whatsapp" ? valueWhatsapp : valueEmail;
  const cannotSubmit =
    valueBusinessName.trim() == "" || formValue.trim() == "" || isInvalid;

  const onSubmit = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (isInvalid) return;

      track("waitlist_form.submit");

      fetch("/join-waitlist/add", {
        method: "POST",
        body: JSON.stringify({
          type,
          value: formValue,
          businessName: valueBusinessName,
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
    [type, formValue, valueBusinessName, isInvalid, router]
  );

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
          <BusinessNameInput
            value={valueBusinessName}
            onValueChange={setValueBusinessName}
          />
          <WhatsAppNumberInput
            value={valueWhatsapp}
            isInvalid={isInvalidWhatsapp}
            onValueChange={setValueWhatsApp}
            setIsInvalid={setIsInvalidWhatsApp}
          />
        </Option>
        <Option
          name="email"
          imgSrc="/email.svg"
          title="Join using Email"
          description="Connect instantly and secure your waitlist spot"
          onSelect={handleOnSelect("email")}
        >
          <BusinessNameInput
            value={valueBusinessName}
            onValueChange={setValueBusinessName}
          />
          <EmailInput
            value={valueEmail}
            isInvalid={isInvalidEmail}
            onValueChange={setValueEmail}
            setIsInvalid={setIsInvalidEmail}
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
