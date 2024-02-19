import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title:string;
    containerStyles?:string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>
    btnType?:"button" | "submit"
}
export interface SearchManufacturerProps {
    manufacturer:string;
    setManufacturer:(manufacturer:string) =>void
}
export interface CarProps {
    car :{
    "city_mpg": number;
    "class": string;
    "combination_mpg": number;
    "cylinders": string;
    "displacement": number;
    "drive": string;
    "fuel_type": number;
    "highway_mpg": string;
    "make": number;
    "model": string;
    "transmission": string;
    "year": number
  ;}
}