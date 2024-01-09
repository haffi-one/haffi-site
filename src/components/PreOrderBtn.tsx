"use client";
import { track } from "@/lib/tracking";
import { useCountDown } from "./PreOrderBtn/hook";
import CountItem from "./PreOrderBtn/CountItem";

const PreOrderBtn = ({ eventName }: { eventName: string }) => {
  const countdown = useCountDown("2024-01-20 00:00:00");
  console.log("countdown", countdown);
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      track(eventName);
      window.location.href =
        "https://haffical.lemonsqueezy.com/checkout/buy/72416f17-55d6-4d17-b0fb-17a30c466c9a";
    }
  };
  return (
    <>
      <div className="mt-4">
        <a
          href="#"
          className="inline-block transition-all ease-in-out delay-150 border-2 border-green-1 bg-green-1 text-gray-dark-1 hover:border-green-1 hover:bg-green-1/70 font-bold px-4 py-4 rounded-full"
          onClick={onClick}
        >
          <span className="font-normal line-through mr-2">$240</span>
          <span>$49 Pre-order</span>
        </a>
      </div>
      <div>
        <div className="text-gray-dark-2 mt-2 font-medium inline-block rounded-full">
          <p>
            Offer expires in{" "}
            <CountItem
              count={countdown.days}
              wordPlural="days"
              wordSingular="day"
            />
            :
            <CountItem
              count={countdown.hours}
              wordPlural="hours"
              wordSingular="hour"
            />
            :
            <CountItem
              count={countdown.minutes}
              wordPlural="minutes"
              wordSingular="minute"
            />
            :
            <CountItem
              count={countdown.seconds}
              wordPlural="seconds"
              wordSingular="second"
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default PreOrderBtn;
