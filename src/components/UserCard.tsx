interface Props {
    login: string | undefined;
    description: string | undefined;
    picture: string | undefined;
}

export function UserCard({ login, description, picture }: Props) {
    return (
        <div className="flex gap-10 p-4 w-100 h-40 m-20 border border-gray-300 shadow-md rounded-xl [font-family:'Montserrat-Regular',Helvetica]">
            <div className="">
                <img src={picture} className="bg-black row-span-full w-32 border rounded-sm" alt="foto do usuário" />
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-0.5">
                    <h2 className="">Nome </h2>
                    <p className="font-bold">{login}</p>
                </div>
                <div className="flex flex-col gap-0.5">
                    <h3 className="">Bio </h3>
                    <p className="">{description}</p>
                </div>
            </div>
        </div>
    )
}