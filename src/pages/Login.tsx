import { useNavigate } from "react-router-dom";
import subtract from "../assets/Subtract.jpg"
import wtech from "../assets/wtech.jpg"
import {  useState } from "react";
import { useLoading } from "../context/LoadingContext";
import { Spinner } from "../components/Spinner";
import { Erro } from "../components/Erro";



export function Login() {

    const { isLoading, setLoadingState } = useLoading();
    const navigate = useNavigate();
    const [name, setName] = useState("");

    const handleName = (event: any) => {
        setName(event.target.value);
    }


    return (
        <div className="grid grid-cols-5 h-screen w-screen">
            <div className="col-span-3 h-screen top-0 left-0 bg-[#05478a]  " >
                <div className="flex max-md:flex-col flex-row gap-3 items-center mt-80 justify-center">
                    <img className="" alt="Wtech" src={subtract} />
                    <img className="" alt="Subtract" src={wtech} />
                </div>
            </div>
            {isLoading ? (
                <div className="my-10 flex justify-center items-center">
                    <Spinner />
                </div>
            ) : (
                <div className="col-span-2 mt-72">
                    <div className="max-md:gap-3 flex flex-col items-center gap-5">
                        <h1 className="font-bold text-4xl"> Entrar </h1>
                        <form>
                            <div className=" relative mt-2 rounded-md shadow-sm my-4">
                                <label>Usuário</label>
                                <input type="text" onChange={handleName} name="price" id="price" className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                <button type="button" onClick={() => navigate(`/${name}`)} className=" h-full w-full bg-[#05478a] my-5 py-3 rounded-lg text-white"> Entrar </button>
                            </div>
                        </form>
                    </div >
                </div >
            )}
        </div >
    );
};