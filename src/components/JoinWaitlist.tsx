"use client";
import { track } from "@/lib/tracking";
import Link from "next/link";
import { useRouter } from "next/navigation";

const useRedirectToWaitlist = (eventName: string) => {
  const router = useRouter();
  return () => {
    track(eventName);
    router.push("/join-waitlist");
  };
};

export const JoinWaitListLarge = () => {
  const redirectToWaitlist = useRedirectToWaitlist(
    "join_waitlist_lg_btn.click"
  );
  return (
    <Link
      onClick={redirectToWaitlist}
      href="/join-waitlist"
      className="transition-all ease-in-out delay-150 border-2 border-green-1 bg-gray-dark-1 text-green-1 hover:bg-green-1 hover:text-gray-dark-1 text-2xl font-semibold py-3 px-7 rounded-full inline-block"
    >
      Join The Waitlist
    </Link>
  );
};

export const JoinWaitListSmall = () => {
  const redirectToWaitlist = useRedirectToWaitlist(
    "join_waitlist_sm_btn.click"
  );
  return (
    <Link
      onClick={redirectToWaitlist}
      href="/join-waitlist"
      className="transition-all ease-in-out delay-150 border-2 border-gray-dark-1 bg-transparent text-gray-dark-1 hover:border-green-1 hover:bg-green-1 font-bold px-4 py-2 rounded-full"
    >
      Join Waitlist
    </Link>
  );
};
