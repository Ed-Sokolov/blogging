import {NavigateFunction} from "react-router-dom";

export const prevPage = (navigate: NavigateFunction): void => {
    window.history.state && window.history.state.idx > 0 ? navigate(-1) : navigate('/', {replace: true});
}