"use client";
import { track } from "@/lib/tracking";

const PreOrderBtn = ({ eventName }: { eventName: string }) => {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      track(eventName);
      window.location.href =
        "https://haffical.lemonsqueezy.com/checkout/buy/72416f17-55d6-4d17-b0fb-17a30c466c9a";
    }
  };
  return (
    <div className="mt-4">
      <a
        href="#"
        className="inline-block transition-all ease-in-out delay-150 border-2 border-green-1 bg-green-1 text-gray-dark-1 hover:border-green-1 hover:bg-green-1/70 font-bold px-4 py-4 rounded-full"
        onClick={onClick}
      >
        <span className="font-normal line-through mr-2">$240</span>
        <span>$49 Pre-order</span>
      </a>
      <div className="text-gray-dark-2 text-sm flex flex-col gap-2 mt-2">
        <p>Limited-time offer &ndash; Regular price $240/year.</p>
      </div>
    </div>
  );
};

export default PreOrderBtn;
