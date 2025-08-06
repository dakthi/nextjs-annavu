"use client";

import { useState } from "react";
import { LearnHero } from "@/components/learn/LearnHero";
import { TravelServicesGrid } from "@/components/learn/TravelServicesGrid";

type Props = {
  params: { locale: string };
};

const supportedLocales = ["en", "vi"] as const;

export default function LearnPage({ params }: Props) {
  const [filterCategory, setFilterCategory] = useState("");

  // Safely normalize locale
  const locale = supportedLocales.includes(params.locale as any)
    ? (params.locale as "en" | "vi")
    : "en";

  return (
    <>
      <LearnHero lang={locale} />
      <TravelServicesGrid filterCategory={filterCategory} locale={locale} />
    </>
  );
}
