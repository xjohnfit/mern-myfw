import { useState } from "react";
import { useNavigate } from "react-router-dom";
import No from "./No";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="-mt-16 flex h-screen flex-col items-center justify-center overflow-hidden bg-white">
            <No />
        </div>
    );
};
export default Home;