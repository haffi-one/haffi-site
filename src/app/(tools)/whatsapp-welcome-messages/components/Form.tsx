"use client";
import { MouseEvent, useCallback, useState } from "react";
import toneOptions from "./FormToneOptions.json";
import messages from "./messages.json";

const Form = () => {
  const [businessName, setBusinessName] = useState("");
  const [tone, setTone] = useState(toneOptions.data[0].value);
  const [welcomeMessage, setWelcomeMessage] = useState<string>();
  const cannotSubmit = businessName.trim() == "" || tone.trim() == "";
  const onCopy = useCallback(
    async (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (welcomeMessage) {
        const type = "text/plain";
        const blob = new Blob([welcomeMessage], { type });
        const data = [new ClipboardItem({ [type]: blob })];

        await navigator.clipboard.write(data);
        alert("Welcome Message Copied");
      }
    },
    [welcomeMessage]
  );
  const onGenerate = useCallback(() => {
    if (messages.hasOwnProperty(tone)) {
      // @ts-ignore
      const examples = messages[tone];
      const _welcomeMessage =
        examples[Math.floor(Math.random() * examples.length)];
      setWelcomeMessage(
        _welcomeMessage.replace("[BusinessName]", businessName)
      );
    }
  }, [tone, businessName]);

  return (
    <>
      <div className="gap-5 w-full flex flex-col md:flex-row">
        <div className="w-full border-2 border-gray-dark-1 text-gray-dark-1 flex flex-row gap-5 px-6 py-4 rounded-2xl cursor-pointer">
          <div className="flex flex-col gap-3 w-full">
            <div className="text-left">
              <p className="font-medium mb-1">Business Name</p>
              <input
                type="text"
                placeholder="Jesse's Nail Salon"
                className="w-full border-2 border-gray-dark-2 rounded-lg px-4 py-3 text-gray-dark-1 outline-green-1"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>
            <div className="text-left">
              <p className="font-medium mb-1">Message Tone</p>
              <select
                onChange={(e) => setTone(e.target.value)}
                className="w-full border-2 border-gray-dark-2 rounded-lg px-4 py-3 text-gray-dark-1 outline-green-1"
              >
                {toneOptions.data.map((data) => (
                  <option
                    key={`tone-${data.value}`}
                    value={data.value}
                    selected={data.value == tone}
                  >
                    {data.display}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="w-full border-2 border-gray-dark-1 bg-green-1 text-gray-dark-1 text-lg font-semibold py-3 px-7 rounded-full hover:bg-green-2 disabled:opacity-45"
              disabled={cannotSubmit}
              onClick={onGenerate}
            >
              Generate
            </button>
          </div>
        </div>
        <div className="text-left w-full border-2 border-gray-dark-1 text-gray-dark-1 flex flex-col gap-3 px-6 py-4 rounded-2xl cursor-pointer">
          <p className="font-medium text-lg">Welcome Message</p>
          <div className="flex-grow">
            {welcomeMessage ? (
              <p className="text-gray-dark-1">{welcomeMessage}</p>
            ) : (
              <p className="text-gray-dark-2 text-lg italic">
                Fill form to generate a Welcome Message for your Business
              </p>
            )}
          </div>
          <a
            onClick={onCopy}
            href="#"
            className={
              "font-medium text-gray-dark-1 underline " + welcomeMessage
                ? ""
                : "opacity-30"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
              className="inline mr-2"
            >
              <path
                opacity="1"
                fill="#1E1E1E"
                d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"
              />
            </svg>
            Copy Welcome Message
          </a>
        </div>
      </div>
    </>
  );
};

export default Form;
