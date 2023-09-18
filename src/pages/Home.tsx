import { useEffect, useState } from "react";
import { UserCard } from "../components/UserCard";
import { useParams } from "react-router-dom";
import { getRepositoryByUser, getUserByName } from "../api/user.service";
import { Spinner } from "../components/Spinner";
import { SimpleCard } from "../components/SimpleCard";
import { Header } from "../components/Header";
import { useLoading } from "../context/LoadingContext";


interface SimpleCards {
    name: string;
    description: string;
    html_url: string
}
interface UserSimpleData {
    login: string
    bio: string
    avatar_url: string
}

export function Home() {

    const { isLoading, setLoadingState } = useLoading();

    const [git, setGit] = useState<SimpleCards[]>([]);
    const [userGit, setUserGit] = useState<UserSimpleData>();

    const { user } = useParams();

    const getUser = async () => {
        const response = user && (await getUserByName(user));
        setUserGit(response);
    }

    const getRepository = async () => {
        setLoadingState(true);
        const response = user && (await getRepositoryByUser(user));
        setGit(response);
        setLoadingState(false);
    }

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        getRepository();
    }, []);

    return (
        <>

            <main className="bg-gray-200 h-screen w-screen">
                <Header />
                <div className="[font-family:'Montserrat-Regular',Helvetica]">
                    <div className="flex flex-col gap-4 bg-white mt-7 mx-16 border rounded-md ">
                        <UserCard key={userGit?.login} login={userGit?.login} description={userGit?.bio} picture={userGit?.avatar_url} />
                        <div className="">
                            {isLoading ? (
                                <div className="my-10 flex justify-center items-center">
                                    <Spinner />
                                </div>
                            ) : (
                                <div>
                                    <h2 className="text-xl ml-11 font-bold ">Repositórios</h2>
                                    <div className="grid grid-cols-3 gap-4 m-10">
                                        {git.map(({ description, name, html_url }) => (
                                            <SimpleCard key={name} name={name} description={description} html_url={html_url} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}