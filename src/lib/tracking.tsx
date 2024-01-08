"use client";
import { useEffect } from "react";
import mixpanel, { Dict } from "mixpanel-browser";

export const TrackingProvider = () => {
  useEffect(() => {
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_ID!, {
      track_pageview: true,
    });
  }, []);
  return <></>;
};

export const track = (event_name: string, properties?: Dict) => {
  try {
    mixpanel.track(event_name, properties);
  } catch (e) {
    console.warn("Tracking failed", e);
  }
};
