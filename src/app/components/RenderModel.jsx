"use client"
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import React, { Suspense } from 'react';

const RenderModel = ({children, className}) => {
    return (
        <Canvas
        className={clsx("w-screen h-screen -z-8 relative", className)}>
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <Environment preset='forest'/>
        </Canvas>
    )
}

export default RenderModel;
