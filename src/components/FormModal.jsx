import React from "react";
import styled from "styled-components";

const ModalStyles = styled.dialog`
    width: min(90%, 35rem);
    margin: auto;
    height: 20rem;
    padding-inline: 1rem;
    padding-block: 1rem;
    background-color: #0d0f24;
    border: 1px solid #4B2E39;
    border-radius: 1em;

    &::backdrop {
        background-color: rgba(0,0,0, .25);
    }

    .closeModal {
        color: white;
        font-size: 1.5rem;
        float: right;
        cursor: pointer;
    }

    .btn__container {
        padding-top: 1em;
        display: flex;
        gap: .5rem;

        button {
            width: max-content;
            padding: .75em;
            border-radius: 10px;
            cursor: pointer;
        }
    }

    .submitBtn {
        background-color: skyblue;
    }

    .resetBtn {
        background-color: gray;
    }
`

const FormModal = React.forwardRef((props, modalRef) => {
    return (
        <ModalStyles ref={modalRef}>
            {props.children}
        </ModalStyles>
    )
});

export default FormModal