/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 peacock.glb --transform 
Files: peacock.glb [7.79MB] > C:\Users\blues\workspace\repos\portfolio\3d Models\peacock-transformed.glb [373.42KB] (95%)
Author: Rio2 (https://sketchfab.com/Rio2)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/burung-merak-poli-rendah-5141e8f12e404638b6ee3b1c73d34446
Title: Burung Merak Poli Rendah
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/peacock-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_56.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_57.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_58.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_59" geometry={nodes.Object_59.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_59.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_60.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_61" geometry={nodes.Object_61.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_61.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_62.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_63" geometry={nodes.Object_63.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_63.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_64.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_65" geometry={nodes.Object_65.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_65.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_66" geometry={nodes.Object_66.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_66.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_67" geometry={nodes.Object_67.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_67.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/peacock-transformed.glb')
