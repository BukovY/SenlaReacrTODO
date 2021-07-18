import {useDispatch} from "react-redux";
import {setLoading, setFilmData} from "./appReducer";
const API_KEY = '687697daf00f72e0a7e20cf9f55a44ec';

//const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${API_KEY}`;

export const getGallery = (page, sort) =>
    fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}`
    ).then((res) => res.json());

export const loadGallery = (page, sort, dispatch) => {
    console.log('in')
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}`
    dispatch(setLoading(true));
    fetch(url)
        .then((res)=>console.log(res.json()))


    getGallery(page, sort)
        .then((data) => {
            dispatch(setFilmData(data.results))
        })
        .then(() => dispatch(setLoading(false)));
};