import { BookmarksIcon, ExploreIcon, HomeIcon, ListsIcon, MessagesIcon, MoreIcon, NotificationsIcon,  ProfileIcon} from "../icons/Icon";
import TwitterLogo from '../images/twitter.svg'
import SideLink from '../components/SideLink'
import { useState } from "react";
import UserBox from '../components/UserBox'


const Sidebar = () => {
    const [active, setActive] = useState("Home");
    const handleMenuItemClick = (name) => {
        setActive(name);
    };
    return(
        <div className="h-screen sticky top-0 flex flex-col justify-between w-72 px-2">

            <div>
                <div className="mt-1 mb-4 ml-1 flex w-14 h-14 items-center justify-center rounded-full hover:bg-gray-lightest">
                    <img src={TwitterLogo} alt="Twitter Logo" className="w-10 h-10" />
                </div>
                <nav className="mb-4">
                    <ul>
                        {
                            sideLinks.map(link =>{
                                return (
                                   <SideLink key={link.name} name={link.name} Icon={link.icon} active={active} handleMenuItemClick={handleMenuItemClick}/>
                                )
                            })
                        }
                    </ul>

                   
                </nav>
                <button className="bg-primary-base shadow-lg hover:bg-primary-dark text-white rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200">Tweet</button>

                
            </div>

            <div>
                <UserBox/>
            
            </div>
              

          

        </div>
    )
}

export default Sidebar;

const sideLinks = [
    {
        name : "Home",
        icon : HomeIcon
    },
    {
        name : "Explore",
        icon : ExploreIcon
    },
    {
        name : "Notifications",
        icon : NotificationsIcon
    },
    {
        name : "Messages",
        icon : MessagesIcon
    },
    {
        name : "Bookmarks",
        icon : BookmarksIcon
    },
    {
        name : "Lists",
        icon : ListsIcon
    },
    {
        name : "Profile",
        icon : ProfileIcon
    },
    {
        name : "More",
        icon : MoreIcon
    },
];


                    