import styled from "styled-components";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useFavContext } from "../Contexts/Favorites";
import favImage from "../assets/Fav.svg";
import { useContext, useRef, useState } from "react";
import FormModal from "./FormModal";
import InputTextField from "./InputTextField";
import CategorySelect from "./CategorySelect";
import { Link } from "react-router-dom";
import TextAreaField from "./TextAreaField";
import { MoviesContext } from "../Contexts/Movies";

const CardStyles = styled.li`
    width: 14rem;
    aspect-ratio: 4 / 5;
    flex-shrink: 0;
    position: relative;

    .notShowing {
        visibility: hidden;
    }

    .icon {
        display: none;
        width: 30px;
        height: 30px;
        position: absolute;
        top: 10px;
        left: 10px;
    }

    .icon.displayed {
        display: block;
    }

    .btnWasClicked {
        animation: bounce .35s ease forwards;
    }

    @keyframes bounce {
        0% {
            opacity: 0;
            transform: scale(1);
        }
        20% {
            opacity: 1;
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

    .card-content {
    display: flex;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    outline: 2px solid transparent;
    cursor: pointer;
    transition: outline .15s linear, background-size .15s ease-in-out;

        &:hover{
            outline: 2px solid white;
            background-size: 105%;
        }
    }

    .title__container {
        display: inline-block;
        vertical-align: sub;
        place-self: flex-end;
        width: 100%;
        padding-inline: 10px;
        height: 3.5rem;
    }

    .title__container h4 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1.1rem;
        font-weight: 600;
        color: white;
        text-shadow: 1px 1px 3px black;
    }
`
const CollapsibleStyles = styled.menu`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: max-content;
    gap: .3rem;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;

    li {
        display: flex;

        button {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            background-color: #094792;
            color: white;
            font-size: 1.1rem;
            padding: 3px 5px;
            cursor: pointer;
            gap: .5rem;

            interpolate-size: allow-keywords;
            transition: width .3s ease;

            &:focus-visible {
                outline: 2px solid purple;
                outline-offset: 2px;
            }

            .button-icon {
                min-width: 1.1rem;
            }
        }
    }

    .options {
        border-radius: 0 0 0 10px;
    }

    .notFirst {
        border-radius: 10px 0 0 10px;
    }

    .notClicked {
        width: 1.1rem;
        overflow: clip;

        &:hover {
            width: max-content;
        }
    }

    .clicked {
        width: max-content;
    }
`

function MovieCard({id, title, genre, posterURL, landscapeURL, trailerURL, description}) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [toggleClass, setToggleClass] = useState(false);
    const [isShowing, setIsShowing] = useState(true)

    const { updateMovie, deleteMovie } = useContext(MoviesContext)

    const [activeData, setActiveData] = useState([]);
    const modalRef = useRef(null);

    const {fav, addFav} = useFavContext()
    const isFav = fav.some(fave => fave.id === id)
    const [btnIsClicked, setBtnIsClicked] = useState(false)

    function closeModal() {
        modalRef.current?.close()
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setActiveData((prev) => ({ ...prev, [name]: value }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        updateMovie(activeData.id, {
            id: activeData.id,
            title: activeData.title,
            genre: activeData.genre,
            posterURL: activeData.posterURL,
            landscapeURL: activeData.landscapeURL,
            trailerURL: activeData.trailerURL,
            description: activeData.description
        })
    }

    function handleDelete() {
        setIsShowing(false);
        deleteMovie(id);
    }
    
    return (
    <>
    <FormModal ref={modalRef}>
        <button
            className="closeModal"
            onClick={closeModal}
            > <RxCross2/> </button>
        <h2 style={{color: 'white'}}>Editar datos de película</h2>
        <InputTextField
            title="Título"
            name="title"
            placeholder="Editar título de la película..."
            defaultValue={title}
            updateValue={handleChange}
            />
        <InputTextField
            title="Enlace a poster en formato retrato"
            name="posterURL"
            placeholder="Editar enlace..."
            defaultValue={posterURL}
            needsTooltip
            tooltipText='Esta es la imagen de portada, se recomienda que sea en formato vertical (más alta que ancha)'
            updateValue={handleChange}
            />
        <InputTextField
            title="Enlace a poster en formato apaisado"
            name="landscapeURL"
            placeholder="Editar enlace..."
            defaultValue={landscapeURL}
            needsTooltip
            tooltipText='Esta es la imagen del banner, se recomienda que sea en formato horizontal (más ancha que alta)'
            updateValue={handleChange}
            />
        <CategorySelect
            value={genre}
            name="genre"
            updateValue={handleChange}
            />
        <InputTextField
            title="Enlace a tráiler"
            name="trailerURL"
            placeholder="Editar enlace de youtube..."
            defaultValue={trailerURL}
            needsTooltip
            tooltipText='Selecciona el video en Youtube, presiona Compartir debajo del reproductor del video y selecciona "Copiar vínculo"'
            updateValue={handleChange}
            />
        <TextAreaField
            name="description"
            placeholder="Editar descripción de película..."
            defaultValue={description}
            updateValue={handleChange}
        />
        <div className="btn__container">
                <button className="submitBtn" type="submit"
                onClick={handleSubmit}
                >Subir</button>
                <button className="resetBtn" type="reset">Limpiar</button>
        </div>
    </FormModal>
    {isShowing &&
    <CardStyles>
        <img
        className={`icon ${isFav && 'displayed'} ${btnIsClicked && 'btnWasClicked'}`} 
        src={favImage}
        />
        <CollapsibleStyles aria-expanded={!isCollapsed}>
            <li
            onClick={() => {
                setToggleClass(!toggleClass);
                setIsCollapsed(!isCollapsed);
            }}>
                <button className={toggleClass ? 'clicked options' : 'notClicked options'}>
                    <span>Opciones</span>
                    <RiArrowDownSLine className="button-icon"/>
                </button>
            </li>
            <li>
                <button className="notFirst"
                    style={isCollapsed ? {display: 'none'} : {display: 'flex'}}
                    onClick={() => {
                        modalRef.current?.showModal()
                        setActiveData({id, title, posterURL, genre, landscapeURL, trailerURL, description})
                        setToggleClass(!toggleClass);
                        setIsCollapsed(!isCollapsed);
                    }}>
                    <span>Editar</span>
                    <MdModeEdit className="button-icon"/>
                </button>
            </li>
            <li>
                <button className="notFirst" style={isCollapsed ? {display: 'none'} : {display: 'flex'}}
                        onClick={() => {
                        addFav({id, title, posterURL});
                        setBtnIsClicked(!btnIsClicked)
                        if (isFav) {
                            setBtnIsClicked(false)
                        };
                        setToggleClass(!toggleClass);
                        setIsCollapsed(!isCollapsed);
                        }}>
                    <span>Favorito</span>
                    <FaRegStar className="button-icon"/>
                </button>
            </li>
            <li>
                <button className="notFirst" style={isCollapsed ? {display: 'none'} : {display: 'flex'}}
                onClick={handleDelete}>
                    <span>Eliminar</span>
                    <RxCross2 className="button-icon"/>
                </button>
            </li>
        </CollapsibleStyles>
        <Link to={`/${id}`} style={{textDecoration: 'none'}}>
            <div className="card-content" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%), url(${posterURL})`}}>
                <div className="title__container">
                    <h4>{title}</h4>
                </div>
            </div>
        </Link>
    </CardStyles> }
    </>)
};

export default MovieCard
