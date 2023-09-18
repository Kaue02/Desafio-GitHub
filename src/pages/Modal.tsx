import { useParams } from "react-router-dom";
import { useLoading } from "../context/LoadingContext";
import { getRepositoryByUser } from "../api/user.service";
import { useEffect, useState } from "react";

interface Props {
    name: string
    visibility: string;
    html_url: string;
    description: string;
    language: string;
}

export function Modal() {

    const { isLoading, setLoadingState } = useLoading();
    const [git, setGit] = useState<Props[]>([]);

    const { user } = useParams();
    const { name } = useParams();

    const getRepository = async () => {
        setLoadingState(true);
        const response = user && (await getRepositoryByUser(user));
        setGit(response);
        console.log(response);
        setLoadingState(false);
    }

    useEffect(() => {
        getRepository();
    }, []);

    return (
        <>
            <div className="p-5 mx-14">

            </div>
        </>
    )
}