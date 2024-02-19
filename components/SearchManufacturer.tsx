"use client"

import {Combobox,Transition} from '@headlessui/react';
import { manufacturers } from '@/constants';
import { SearchManufacturerProps } from '@/types';
import {useState,Fragment} from 'react';
import React from 'react'
import Image from"next/image";
const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {
    
        const [query,setQuery] = useState("");
        const filterManufactures =
         query===""?manufacturers:manufacturers.filter((item) => (item.toLowerCase().replace(/\s+/g,"")
         .includes(query.toLowerCase().replace(/\s+/g,""))))
  return (
    <div className="search-manufacturer">
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className="reactive w-full">
                <Combobox.Button className="absolute top-[14px]">
                    <Image 
                    src="/car-logo.svg"
                    width={20}
                    height={20}
                    className="ml-4"
                    alt="Car Logo" />
                </Combobox.Button>
                <Combobox.Input className="search-manufacturer__input"
                placeholder="VolksWagon "
                displayValue={(manufacturer:string) => manufacturer}
                onChange={(e) => setQuery(e.target.value)}
                />
                <Transition
                as={Fragment}
                leave="transtition ease-in duration1-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')} >
                    <Combobox.Options>
                        
                            {filterManufactures.map((item) => (<Combobox.Option 
                            key={item}
                            className={({active}) => `relative search-manufacturer__option
                            ${active ? 'bg-primary-blue text white':'text-gray-900'}
                            `} value={item}>
                                               {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-small' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-black' : 'text-green-700'
                            }`}
                          >
                            
                          </span>
                        ) : null}
                      </>
                    )}
                            </Combobox.Option>
                            )) }
                        
                    </ Combobox.Options>
                </Transition>

                
            </div>
        </Combobox>
    </div>
  )
}
export default SearchManufacturer;