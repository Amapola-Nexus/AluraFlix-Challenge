import { useState } from "react"
import styled from "styled-components";
import { RxQuestionMarkCircled } from "react-icons/rx";

const TooltipContainer = styled.div`
    position: absolute;
    display: inline-block;
    top: 1rem;
    right: 0;

    .spanIcon {
        color: white;
        font-size: 1.2rem;
    }

    .tooltip {
        position: absolute;
        top: -5px;
        right: 105%;
        min-width: 20ch;
        text-wrap: balance;
        background-color: black;
        color: white;
        padding: 4px 5px;
        border-radius: 5px;
        font-weight: 300;
        z-index: 9;
    }
`

function Tooltip({text}) {
    const [isVisible, setIsVisible] = useState(false);

    function closeOnEsc(e) {
        if (isVisible && e.key === "Escape") setIsVisible(false)
    }

    return (
        <TooltipContainer
        tabindex="0"
        role='tooltip'
        onMouseEnter={()=> setIsVisible(true)}
        onFocus={()=> setIsVisible(true)}
        onMouseLeave={()=> setIsVisible(false)}
        onBlur={()=> setIsVisible(false)}
        onKeyDown={(e)=> {if (isVisible && e.key === "Escape") setIsVisible(false)}}
        >
            <span className="spanIcon"> <RxQuestionMarkCircled /> </span>
            {isVisible && <span className="tooltip">{text}</span>}
        </TooltipContainer>
    )
}

export default Tooltip