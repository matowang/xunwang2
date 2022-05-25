import { lazy, Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

import Monkey from '../../components/3DModels/Monkey';
import Search from '../../components/3DModels/Search';
// import Model from '../../components/3DModels/Model';

//const Monkey = lazy(() => import("../../components/3DModels/Monkey"));

import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Model = (props: JSX.IntrinsicElements['mesh']) => {
    const mesh = useRef<THREE.Mesh>(null!)
    useFrame((state, delta) => (mesh.current.rotation.y += 0.05));
    return (
        <mesh ref={mesh} scale={1}>
            <Monkey />
        </mesh>
    )
}

const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
        () => {
            const controls = new OrbitControls(camera, gl.domElement);
            controls.minDistance = 0;
            controls.maxDistance = 100;
            return () => {
                controls.dispose();
            };
        },
        [camera, gl]
    );
    return null;
};

function Box(props: JSX.IntrinsicElements['mesh']) {
    const mesh = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

const Test: NextPage = () => {
    return (
        <div className='h-screen'>
            <Canvas>
                <CameraController />
                <Suspense fallback={"Loading"}>
                    <Model />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                </Suspense>
            </Canvas>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
            // Will be passed to the page component as props
        },
    };
}

export default Test;