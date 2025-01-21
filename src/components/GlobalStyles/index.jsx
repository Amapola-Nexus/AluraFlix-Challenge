import { createGlobalStyle } from "styled-components";
import RobotoRegular from "./Fonts/Roboto-Regular.ttf";
import RobotoItalic from "./Fonts/Roboto-Italic.ttf";
import RobotoLight from "./Fonts/Roboto-Light.ttf";
import RobotoLightItalic from "./Fonts/Roboto-LightItalic.ttf";
import RobotoMedium from "./Fonts/Roboto-Medium.ttf";
import RobotoMediumItalic from "./Fonts/Roboto-MediumItalic.ttf";
import RobotoBold from "./Fonts/Roboto-Bold.ttf";
import RobotoBoldItalic from "./Fonts/Roboto-BoldItalic.ttf";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: inherit;
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'Roboto';
        src: local("Roboto Regular"), local("RobotoRegular"), url(${RobotoRegular}) format('ttf');
        font-style: normal;
        font-weight: 400;
    }

    @font-face {
        font-family: 'Roboto';
        src: local("Roboto Italic"), local("RobotoItalic"), url(${RobotoItalic}) format('ttf');
        font-style: italic;
        font-weight: 400;
    }

    @font-face {
        font-family: 'Roboto';
        src: local("Roboto Light"), local("RobotoLight"), url(${RobotoLight}) format('ttf');
        font-style: normal;
        font-weight: 300;
    }

    @font-face {
        font-family: 'Roboto';
        src: local("Roboto Light Italic"), local("RobotoLightItalic"), url(${RobotoLightItalic}) format('ttf');
        font-style: italic;
        font-weight: 300;
    }

    @font-face {
        font-family: 'Roboto';
        src: local("Roboto Medium"), local("RobotoMedium"), url(${RobotoMedium}) format('ttf');
        font-style: normal;
        font-weight: 600;
    }

    @font-face {
        font-family: 'Roboto';
        src: local("Roboto Medium Italic"), local("RobotoMediumItalic"), url(${RobotoMediumItalic}) format('ttf');
        font-style: italic;
        font-weight: 600;
    }

    @font-face {
        font-family: 'Roboto';
        src: local("Roboto Bold"), local("RobotoBold"), url(${RobotoBold}) format('ttf');
        font-style: normal;
        font-weight: 700;
    }

    @font-face {
        font-family: 'Roboto';
        src: local("Roboto Bold Italic"), local("RobotoBoldItalic"), url(${RobotoBoldItalic}) format('ttf');
        font-style: italic;
        font-weight: 700;
    }

    html {
        hanging-punctuation: first last;
        font-family: 'Roboto';
        letter-spacing: 0.03rem;
    }

    @media (prefers-reduced-motion: no-preference) {
        iframe {
            scroll-behavior: smooth
        }
    }

    body {
        min-height: 100svh;
        background-color: #1A1A1D;
    }

    body.modal-open {
        overflow-y: hidden;
    }

    img, picture, svg, video {
        display: block;
        max-width: 100%;
    }

    ul, menu, li {
        list-style-type: none;
    }

    button {
        all: unset;
        outline: revert;
    }
`

// https://coolors.co/32021f-4b2e39-6c596e-6f7d8c-77a0a9

export default GlobalStyles