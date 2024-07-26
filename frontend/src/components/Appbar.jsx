import { useNavigate } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard";

export const Appbar = () => {
    const navigate = useNavigate();
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            Wallet App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-3 mt-1">
            <button type="button" onClick={()=>{
                 localStorage.removeItem("userId")
                 localStorage.removeItem("token")
                     navigate("/")
            }} class="text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-700 dark:border-blue-700"> Sign Out</button>

            </div>
            <div className="flex flex-col justify-center h-full mr-3">
                Hello
            </div>
            <div className=" flex justify-center mt-1 mr-4">
                <div className="flex flex-col justify-center h-full text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                    </svg>

                </div>
            </div>
        </div>
    </div>
}