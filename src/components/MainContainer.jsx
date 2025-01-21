import styled from "styled-components";

const MainStyles = styled.main`
    width: 100%;
    padding-left: 3rem;
    min-height: calc(100dvh - 5rem);
`

function MainContainer({children}) {
    return (
        <MainStyles>
            {children}
        </MainStyles>
    )
};

export default MainContainer