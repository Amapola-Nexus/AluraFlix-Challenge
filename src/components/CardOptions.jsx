// import styled from "styled-components";
// import { RiArrowDownSLine } from "react-icons/ri";
// import { MdModeEdit } from "react-icons/md";
// import { FaRegStar } from "react-icons/fa6";
// import { RxCross2 } from "react-icons/rx";
// import { useState } from "react";

// const CollapsibleStyles = styled.menu`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-end;
//     width: max-content;
//     gap: .3rem;
//     position: absolute;
//     top: 10px;
//     right: 10px;
//     z-index: 5;

//     li {
//         display: flex;

//         button {
//             display: flex;
//             align-items: center;
//             justify-content: flex-end;
//             background-color: purple;
//             color: white;
//             border-radius: 10px;
//             font-size: 1.1rem;
//             padding: 3px 5px;
//             cursor: pointer;
//             gap: .5rem;

//             interpolate-size: allow-keywords;
//             transition: width .3s ease;

//             &:focus-visible {
//                 outline: 2px solid purple;
//                 outline-offset: 2px;
//             }

//             .button-icon {
//                 min-width: 1.1rem;
//             }
//         }
//     }

//     .notClicked {
//         width: 1.1rem;
//         overflow: clip;

//         &:hover {
//             width: max-content;
//         }
//     }

//     .clicked {
//         width: max-content;
//     }
// `

// function CardOptions(props) {
//     const [isCollapsed, setIsCollapsed] = useState(props.collapsed);
//     const [toggleClass, setToggleClass] = useState(false)

//     return (
//         <CollapsibleStyles aria-expanded={!isCollapsed}>
//             <li
//             onClick={() => {
//                 setToggleClass(!toggleClass);
//                 setIsCollapsed(!isCollapsed);
//             }}>
//                 <button className={toggleClass ? 'clicked' : 'notClicked'}>
//                     <span>Opciones</span>
//                     <RiArrowDownSLine className="button-icon"/>
//                 </button>
//             </li>
//             <li>
//                 <button style={isCollapsed ? {display: 'none'} : {display: 'flex'}}>
//                     <span>Editar</span>
//                     <MdModeEdit className="button-icon"/>
//                 </button>
//             </li>
//             <li>
//                 <button style={isCollapsed ? {display: 'none'} : {display: 'flex'}}>
//                     <span>Eliminar</span>
//                     <RxCross2 className="button-icon"/>
//                 </button>
//             </li>
//         </CollapsibleStyles>
//     )
// }

// export default CardOptions