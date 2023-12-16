import { GoHome } from "react-icons/go";
import { HiOutlineChartPie } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { FiCalendar } from "react-icons/fi";

import { FaRegEnvelope } from "react-icons/fa";

import { FiSettings } from "react-icons/fi";


export const iconsArray =[
    {
            menu:"home",
            icon:<GoHome/>,
            path:"/"
    },
    {
        menu:"chart",
            icon:<HiOutlineChartPie/>,
            path:"/report"
    },
    {
        menu:"like",
        icon:<FaRegHeart/>,
        path:"/favourite"
    },
    {
        menu:"task",
        icon:<BiTask/>,
        path:"/task"
    },
    {   
        menu:"calendar",
        icon:<FiCalendar/>,
        path:"/schedule"

    },
    {
        menu:"message",
        icon:<FaRegEnvelope/>,
        path:"/message"

    },
    {
        menu:"setting",
        icon:<FiSettings/>,
        path:"/setting"
    },
        


]