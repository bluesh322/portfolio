"use client"
import React from "react";
import { BtnList } from "../../Data";
import { div } from "framer-motion/client";

const Navigation = () => {

    const angleIncrement = 360 / BtnList.length;


    return (
        <div className='fixed w-full h-screen flex items-center justify-center'>
            <div className='flex items-center justify between relative'>
            {
                BtnList.map((btn, index) => {

                    const angleRadiant = (index * angleIncrement * Math.PI) / 180;
                    const radius = 'calc(20vw - 1rem)'
                    const x = `calc(${radius}*${Math.cos(angleRadiant)})`;
                    const y = `calc(${radius}*${Math.sin(angleRadiant)})`;

                    return <button key={index} className='absolute'
                        style={{
                            transform: `translate(${x}, ${y})`
                        }}>
                        {btn.label}
                    </button>
                })

            }
        </div>
        </div>
    )
}

export default Navigation;
