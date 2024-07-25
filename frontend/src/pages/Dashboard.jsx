import { useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = ( {onClose, pop_func} ) => {
 
    if(!localStorage.getItem("token")) return null;
    
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance onClose={onClose}  pop_func = {pop_func} />
            <Users  onClose={onClose}  pop_func = {pop_func}  />
        </div>
    </div>
}