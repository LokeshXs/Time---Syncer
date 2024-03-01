'use client';

import TimezonesProvider from "@/context/TimezoneContext";
import { ReactElement } from "react";

export function ProviderTimezone({ children }:{children:ReactElement | undefined}) {
  return (
    <TimezonesProvider>
     {children}
    </TimezonesProvider>
  );
}