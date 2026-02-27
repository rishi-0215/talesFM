"use client";

import React from "react";
import { useTimeOnPage } from "@/hooks/useTimeOnPage";
import { ensureUrlChangePatched } from "@/hooks/urlChange";

export default function ClientPageTimer({ eventName, params, children }) {
  ensureUrlChangePatched();
  useTimeOnPage(eventName, params);
  return children;
}

