import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body : "#fff", 
    fontColor : "#000",
}

export const darkTheme = {
    body : "#343a40",
    fontColor : "#fff",
}

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${ (props) => props.theme.body }
    }

    #footer-menu {
        background-color: ${ (props) => props.theme.body } !important
    }

    .row .card{
        background-color: ${ (props) => props.theme.body } !important
    }

    .fixed-top {
        background-color: ${ (props) => props.theme.body } !important
    }

    .justify-content-center .card{
        background-color: ${ (props) => props.theme.body } !important
    }

    .message-list .list-group-item {
        background-color: ${ (props) => props.theme.body } !important
    }

    .message-list .list-group-item.custom-active {
        background-color: ${ (props) => ( props.theme.body == '#fff') ? "#0be7a4": props.theme.body } !important
    }

    .fixed-top .row {
        background-color: ${ (props) => props.theme.body } !important
    }

    .fixed-bottom .row {
        background-color: ${ (props) => props.theme.body } !important
    }
`;