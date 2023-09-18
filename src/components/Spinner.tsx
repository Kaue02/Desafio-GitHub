export function Spinner() {
    return (
        <div className="w-[273px] h-[173px] relative">
            <div className="w-[273px] h-[50px] left-0 top-[123px] absolute text-center text-zinc-800 text-3xl font-bold font-['Montserrat'] leading-[51px]">Carregando...</div>
            <div className="w-20 h-20 left-[97px] top-0 absolute rounded-full border-2 border-sky-600" />
            <div className="w-[46px] h-[46px] left-[114px] top-[17px] absolute rounded-full border-4 border-sky-600" />
        </div>
    )
}