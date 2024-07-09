import { HeaderContainer } from "./styles"
import { GiEmptyHourglass } from "react-icons/gi";
import { MdOutlineTimer } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import { NavLink } from "react-router-dom";



export const Header = () => {
    return (
        <HeaderContainer>
            <span><GiEmptyHourglass size={60} /></span>
            <nav>
                <NavLink to="/" title="Timer">
                    <MdOutlineTimer size={32} />
                </NavLink>
                <NavLink to="/history" title="History">
                    <IoIosPaper size={32} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}
