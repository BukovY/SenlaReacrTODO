import React, {Component, useEffect} from "react";
import users from "./dummy_data/users";
import Header from "./component/Header/Header";
import {Route, Switch} from "react-router-dom";
import Homepage from "./component/Main/Homepage";
import AddFilm from "./component/Main/AddFilm";
import FilmInfo from "./component/Main/FilmInfo";
import ChangeFilm from "./component/Main/ChangeFilm";
import Sign from "./component/Main/Sign";
import Registration from "./component/Main/Registration";
import NotFound from "./component/Main/NotFound";
import {useSelector, useDispatch} from "react-redux";
import appReducer, {setFilmData, setLoading} from "./store/appReducer";
import {loadGallery} from "./store/Middlevare";


const App =()=>{
    let selectPage = useSelector((state) => state.panginationChange.selectPage)
    let genres = useSelector((state) => state.appReducer.genges)
    let sort = 'popularity.desc'
    let isFetching = useSelector((state) => state.appReducer.isFetching)
    let dispatch = useDispatch()


    let data = useSelector((state) => state.appReducer.filmData)

    //loadGallery(selectPage, sort, dispatch);

    let url = `https://api.themoviedb.org/3/discover/movie?api_key=687697daf00f72e0a7e20cf9f55a44ec&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${selectPage}&with_watch_monetization_types=flatrate`
    let genresUrl = `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=687697daf00f72e0a7e20cf9f55a44ec`
    //if(genres.length == 0){
    //    fetch(genresUrl)
    //        .then(response => {return response.json()})
    //        .then(data => dispatch(setFilmData(data.genres)))
    //        .then(dispatch(setLoading(false)))
    //}



    /*

    .then(fetch(url)
            .then(response => {return response.json() })
            .then(data => dispatch(setFilmData(data.genres))))

    export const loadGallery = (page, sort) => (dispatch) => {
  dispatch(setIsLoadingGallery(true));
  getGallery(page, sort)
    .then((data) => {
      dispatch({ type: LOAD_GALLERY, payload: data.results });
    })
    .then(() => dispatch(setIsLoadingGallery(false)));
};
     */

    return(
        <>
            some
            {isFetching? <p>Грузим</p> : <p>Загружено</p>}

        </>
    )

}
export default App