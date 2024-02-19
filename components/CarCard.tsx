"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import { CustomButton } from ".";
export const CarCard = ({ car }: CarProps) => {
  const carRent = calculateCarRent(car.city_mpg, car.year);
  console.log(car);
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-car__content">
        <h2 className="car-card__content-title ">
          {car.make} {car.model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">Rs.</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px] leading-[17px]">
              {car.transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{car.drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{car.city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton title="view-more"
           containerStyles="w-full  py-[16px]
           rounded-full bg-primary-blue"
           textStyles="text-white text-[14px]
           leading [17px] font-bold"
           rightClick="/right-arrow.svg"
           handleClick={()=>setIsOpen(true)} />


        </div>
      </div>
      
    </div>
  );
};
