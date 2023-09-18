import imgHeader from "../assets/Group 82.jpg"
import {useNavigate} from "react-router-dom"
export function Header() {
    const navigate = useNavigate();
    return (
        <div className="flex w-screen h-20 p-6 bg-white">
            <div role="button" onClick={()=> navigate("/")}>
            <img className="h-6" alt="Group" src={imgHeader} />
            </div>
        </div>
    )
}