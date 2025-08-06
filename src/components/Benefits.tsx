"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";
import { benefits } from "@/features/home/data/benefits.config";

export const Benefits = () => {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith("/vi") ? "vi" : "en";
  
  return (
    <>
      {benefits.map((benefit, index) => (
        <BenefitSection key={index} data={benefit} locale={currentLocale} imgPos={index % 2 === 0 ? "right" : "left"} />
      ))}
    </>
  );
};

interface BenefitSectionProps {
  data: {
    title_en: string;
    title_vi: string;
    desc_en: string;
    desc_vi: string;
    image: string;
    bullets: {
      title_en: string;
      title_vi: string;
      desc_en: string;
      desc_vi: string;
      icon: React.ComponentType<any>;
    }[];
  };
  locale: string;
  imgPos?: "left" | "right";
}

function BenefitSection({ data, locale, imgPos = "right" }: BenefitSectionProps) {
  const title = locale === "vi" ? data.title_vi : data.title_en;
  const desc = locale === "vi" ? data.desc_vi : data.desc_en;

  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
      <div
        className={`flex items-center justify-center w-full lg:w-1/2 ${
          imgPos === "right" ? "lg:order-1" : ""
        }`}
      >
        <div>
          <Image
            src={data.image}
            width="521"
            height="521"
            alt="Benefits"
            className={"object-cover"}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
      </div>

      <div
        className={`flex flex-wrap items-center w-full lg:w-1/2 ${
          imgPos === "right" ? "lg:justify-end" : ""
        }`}
      >
        <div>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {title}
            </h3>

            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {desc}
            </p>
          </div>

          <div className="w-full mt-5">
            {data.bullets.map((item, index) => {
              const IconComponent = item.icon;
              const bulletTitle = locale === "vi" ? item.title_vi : item.title_en;
              const bulletDesc = locale === "vi" ? item.desc_vi : item.desc_en;
              
              return (
                <Benefit key={index} title={bulletTitle} icon={<IconComponent />}>
                  {bulletDesc}
                </Benefit>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}

interface BenefitProps {
  title: string;
  icon: React.ReactNode;
  children: string;
}

function Benefit({ title, icon, children }: BenefitProps) {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-7 h-7 text-indigo-50"
        })}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {title}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {children}
        </p>
      </div>
    </div>
  );
}