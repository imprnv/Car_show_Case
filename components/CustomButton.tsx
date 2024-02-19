'use client'
import {CustomButtonProps} from '@/types'
import Image from 'next/image';
export const CustomButton = ({title,containerStyles,handleClick,btnType,textStyles,rightClick}:CustomButtonProps)=> {
  console.log(rightClick);
  return (
  <button 
  disabled={false}
  type={btnType || "button"}
  className = {`custom-btn ${containerStyles}`}
  onClick ={handleClick}
  >
    <span className = {`flex  ${textStyles}`}>
    {title}
    </span>
    {rightClick && (
      <div className="relative w-6 h-6">
        <Image 
        src={rightClick}
        alt="right Icon"
        fill 
        className='object-contain' />

      </div>
    )}
  </button>
  )}
export default CustomButton