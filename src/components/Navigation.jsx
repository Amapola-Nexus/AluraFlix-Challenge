import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";

const FixedNav = styled.nav`
    width: 3rem;
    height: 100%;
    padding: .6rem;
    overflow: clip;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle, rgba(5,5,5,0.5) 0%, rgba(5,5,5,1) 60%);;
    color: white;
    backdrop-filter: blur(5px);
    border-radius: 0 20px 20px 0;
    border: solid gray;
    border-width: 1px 1px 1px 0;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;

    ul {
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .nav-icon {
        color: white;
        font-size: 1.75rem;
        cursor: pointer;

        &:hover {
            filter: drop-shadow(0 0 0.75rem white);
        }
    }

`

function Navigation() {
    return(
        <FixedNav aria-label="Navegación Principal">
            <ul>
                <li>
                    <Link to="./"> <FaHome className="nav-icon"/> </Link>
                </li>
                <li>
                    <Link to="./favorites"> <FaRegStar className="nav-icon"/> </Link>
                </li>
                <li>
                    <Link to="./upload"> <FiUpload className="nav-icon"/> </Link>
                </li>
            </ul>
        </FixedNav>
    )
};

export default Navigation;