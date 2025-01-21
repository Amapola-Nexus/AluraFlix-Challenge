import styled from "styled-components"

const FieldsetStyle = styled.fieldset`
    border: none;
    padding-top: 1rem;

    label{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        color: white;

        textarea {
            resize: none;
            font-size: 1rem;
            padding: 7px;
            border-radius: 5px;
            border: none;
        }
    }
`

function TextAreaField(props) {
    return (
        <FieldsetStyle>
            <label>
                Resumen
                <textarea rows="4"
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                defaultValue={props.defaultValue}
                onChange={props.updateValue}
                ></textarea>
            </label>
        </FieldsetStyle>
    )
}

export default TextAreaField