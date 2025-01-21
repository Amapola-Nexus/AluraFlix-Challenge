import styled from "styled-components"

const FieldsetStyle = styled.fieldset`
    border: none;
    display: flex;
    padding-top: 1rem;

    select {
        font-size: 1rem;
        padding: 7px;
        border-radius: 5px;
        border: none;
    }

    label{
        display: flex;
        flex-direction: column;  
        gap: .5rem;
        color: white;
    }
`

function CategorySelect(props) {

    const genres = [
        'Acción',
        'Animación',
        'Aventura',
        'Ciencia Ficción',
        'Comedia',
        'Crimen',
        'Drama',
        'Fantasía',
        'Romance',
        'Suspenso',
        'Terror',
    ];

    return (
        <FieldsetStyle>
            <label>
                Categoría
                <select
                defaultValue={props.value}
                name={props.name}
                onChange={props.updateValue}>
                        <option disabled value="" defaultValue="" hidden>Seleccione categoría...</option>
                    { genres.map((genre) => {
                    return(
                        <option key={genre} value={genre}>{genre}</option>
                    )
                    })
                    }
                </select>
            </label>

        </FieldsetStyle>
    )
}

export default CategorySelect