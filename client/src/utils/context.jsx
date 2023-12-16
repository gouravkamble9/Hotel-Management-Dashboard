import { createContext, useState } from "react";



export const Context=createContext();

const AppContext=({children})=>{

    const [booking,Setbooking]=useState([])
    const [customerData,SetCustomerData]=useState([])
    const [arrived,Setarrived]=useState(0)
    const [booked,Setbooked]=useState(0)
    const [checkin,Setcheckin]=useState(0)
    const [user,SetUser]=useState("User")
    const [task,SetTask]=useState([])
    const [filteredTask,SetFilteredTask]=useState([])
    const [menuIcon,SetMenuIcon]=useState(false)
    

    return(
        <Context.Provider value={{
            booking,
            Setbooking,
            customerData,
            SetCustomerData,
            arrived,
            Setarrived,
            booked,
            Setbooked,
            checkin,
            Setcheckin,
            user,
            SetUser,
            task,
            SetTask,
            filteredTask,
            SetFilteredTask,
            menuIcon,
            SetMenuIcon,

        }}>
            {children}
        </Context.Provider>
    )
}


export default AppContext