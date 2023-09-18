import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
    name: string;
    description: string;
    html_url: string
}

export function SimpleCard({ name, description, html_url }: Props) {
    const navigate = useNavigate();
    const { user } = useParams();
    return (
        <div role="button [font-family:'Montserrat-Bold',Helvetica]"
            onClick={() => navigate(`/${user}/${name}`)}
            
            className="w-full flex flex-col h-64  p-3 rounded-sm bg-neutral-50 drop-shadow-md hover:drop-shadow-lg cursor-pointer">
            <div className=" text-center">
                <div className="flex p-5 flex-col items-start ml-3 text-xl font-bold">
                    <h1>{name}</h1>
                </div>
                <hr className="border border-[#0070E0]" />
                <div className="flex flex-col items-center  ">
                    <div className="flex flex-col items-start p-5 gap-0.5">
                        <p className="text-[#6a6f73]">Link</p>
                        <span className="underline">{html_url}</span>
                        <p className="text-[#6a6f73]">Descrição</p>
                        <span>{description}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}