import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import Autoplay from "embla-carousel-autoplay";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job{" "}
          <span className="flex items-center gap-2 sm:gap-6">
            {/* with */}
            <img
              src="/jobsy-logo01.svg"
              alt="Jobsy"
              className="h-14 sm:h-24 lg:h-32"
            />
          </span>
        </h1>
        <p className="text-transparent bg-gradient-to-r from-blue-500 via-cyan-200 to-white bg-clip-text sm:mt-4 text-xs sm:text-xl">
          Browse thousands of job opportunities or find the right talent
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        {/**buttons */}
        <Link to="/jobs">
          <Button
            size="xl"
            className="bg-[#6DD4F4] text-white py-0 px-12 rounded-md hover:bg-[#4BB8D7] transition duration-300"
          >
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-job">
          <Button
            size="xl"
            className="bg-[#6459F0] text-white py-0 px-12 rounded-md hover:bg-[#4E44D3] transition duration-300"
          >
            Post a Job
          </Button>
        </Link>
      </div>

      {/**carousel */}
      <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        className="w-full py-10"
      >
        <CarouselContent className=" flex gap-5 sm:gap-20 items-center">
          {companies.map(({ id, name, path }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img
                  src={path}
                  alt="name of the companies"
                  className="h-9 sm:h-14 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/**banner */}
      <section>{/**cards */}</section>

      {/**acoordian */}
    </main>
  );
};

export default LandingPage;
