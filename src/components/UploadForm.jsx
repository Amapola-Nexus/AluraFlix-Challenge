import styled from "styled-components"
import InputTextField from "./InputTextField"
import CategorySelect from "./CategorySelect"
import { useContext, useState } from "react"
import TextAreaField from "./TextAreaField"
import { MoviesContext } from "../Contexts/Movies"

const UploadFormStyles = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 60ch;
    height: fit-content;
    margin-inline: auto;
    margin-block: 20px;
    padding-inline: 1rem;
    padding-bottom: 1em;
    border: 2px solid gray;

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

function UploadForm() {
    const { newMovie } = useContext(MoviesContext)

    const [formData, setFormData] = useState({
        id: undefined,
        title: "",
        posterURL: "",
        landscapeURL: "",
        genre: "",
        trailerURL: "",
        description: "",
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    function getId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
    
        return (match && match[2].length === 11)
          ? match[2]
          : null;
    }

    const videoId = getId(formData.trailerURL)

    function handleSubmit(e) {
        e.preventDefault();
        let dataToSend = {
            id: Date.now(),
            title: formData.title,
            posterURL: formData.posterURL,
            landscapeURL: formData.landscapeURL,
            genre: formData.genre,
            trailerURL: 'https://www.youtube.com/embed/' + videoId,
            description: formData.description
        }
        newMovie(dataToSend)
    }

    return (
        <UploadFormStyles onSubmit={handleSubmit}>
            <InputTextField
                title="Título"
                name="title"
                value={formData.title}
                placeholder="Ingrese título de la película..."
                updateValue={handleChange}
                />
            <InputTextField
                title="Enlace a poster en formato retrato"
                name="posterURL"
                value={formData.posterURL}
                placeholder="Ingrese enlace a imagen en formato retrato..."
                needsTooltip
                tooltipText='Esta es la imagen de portada, se recomienda que sea en formato vertical (más alta que ancha)'
                updateValue={handleChange}
                />
            <InputTextField
                title="Enlace a poster en formato apaisado"
                name="landscapeURL"
                value={formData.landscapeURL}
                placeholder="Ingrese enlace a poster en formato apaisado..."
                needsTooltip
                tooltipText='Esta es la imagen del banner, se recomienda que sea en formato horizontal (más ancha que alta)'
                updateValue={handleChange}
                />

            <CategorySelect
                name="genre"
                value={formData.genre}
                updateValue={handleChange}
            />

            <InputTextField
                title="Enlace a tráiler"
                name="trailerURL"
                placeholder="Ingresar enlace de youtube..."
                value={formData.trailerURL}
                needsTooltip
                tooltipText='Selecciona el video en Youtube, presiona Compartir debajo del reproductor del video y selecciona "Copiar vínculo"'
                updateValue={handleChange}
                />

            <TextAreaField
                name="description"
                placeholder="Ingresar descripción de película..."
                value={formData.description}
                updateValue={handleChange}
            />
            <div className="btn__container">
                <button className="submitBtn" type="submit">Subir</button>
                <button className="resetBtn" type="reset">Limpiar</button>
            </div>
        </UploadFormStyles>
    )
}

export default UploadForm