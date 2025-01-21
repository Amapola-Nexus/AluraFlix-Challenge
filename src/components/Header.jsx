import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    height: 4rem;
    padding: .5em 2em;
    background-color: rgba(5,5,5, .8);

    img {
        width: 9rem;
        margin-left: auto;
    }
`

function Header() {
    return (
        <StyledHeader>
            <img src="../assets/Logo.svg"/>
        </StyledHeader>
    )
};

export default Header;
