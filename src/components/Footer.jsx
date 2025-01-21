import styled from "styled-components"

const StyledFooter = styled.footer`
    background-color: rgba(5,5,5, .8);
    color: #d1d1d1;
    padding: 1rem;

    p {
        font-weight: 300;
        text-align: end;
    }
`

function Footer() {
    return (
        <StyledFooter>
            <p>© Desarrollado por Nexus, 2025</p>
        </StyledFooter>
    )
}

export default Footer