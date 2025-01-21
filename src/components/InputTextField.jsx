import styled from "styled-components"
import Tooltip from "./Tooltip"

const FieldsetStyle = styled.fieldset`
    border: none;
    padding-top: 1rem;
    position: relative;

    label{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        color: white;
        width: 90%;
    }

    .textInput {
        font-size: 1rem;
        padding: 7px;
        border-radius: 5px;
        border: none;
        margin-right: -11%;
    }
`


function InputTextField(props) {

    return (
        <FieldsetStyle>
        <label>
            {props.title}
            <input
            className="textInput"
            name={props.name}
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            value={props.value}
            onChange={props.updateValue}
            />
        </label>

        {props.needsTooltip && <Tooltip text={props.tooltipText}/>}

        </FieldsetStyle>
    )
}

export default InputTextField 