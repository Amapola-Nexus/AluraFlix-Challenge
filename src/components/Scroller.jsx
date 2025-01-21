import styled from "styled-components"

const ScrollerStyles = styled.section`
    width: 100%;
    margin-block: 1.5rem;
    padding: 0 0 .5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: .75rem;

    overflow-x: auto;

    h3 {
        color: white;
        font-size: 2rem;
    }

    ul {
        width: 100%;
        display: flex;
        gap: 1rem;
        padding: 3px 3px 10px 3px;

        overscroll-behavior-inline: contain;
        scroll-snap-type: inline mandatory;
        scroll-padding-inline: 1rem;
        scrollbar-gutter: stable;

        & > * {
            scroll-snap-align: start;
        }
    }
`

function Scroller({children}) {
    return (
        <ScrollerStyles>
            {children}
        </ScrollerStyles>
    )
} 

export default Scroller