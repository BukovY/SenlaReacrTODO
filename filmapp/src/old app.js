// constants
// actions
// reducers
// store

import users from "../dummy_data/users";

const initialState = {
    page: 'notConnect',
    apiKey: '687697daf00f72e0a7e20cf9f55a44ec',
    maxPage: 15,
    selectedFilter: 'Без фильтра',
    role: 'admin',
    userName: 'admin',
    selectPage: 1,
    selectFilmId: 0,
    inputs: {
        userVote: {
            value: '',
            valid: true,
            validateFunc: () => {
                let input = this.state.inputs.userVote
                if (input.value.indexOf('.') == -1 && input.value.indexOf(',') == -1 && input.value > 0 && input.value < 11) {
                    alert('Оценка корректная и она летит в запросе на сервер')
                } else {
                    input.valid = false
                }
            }
        },
        email: {
            value: '',
            valid: true,
            validateFunc: () => {
                let input = this.state.inputs.email
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!re.test(String(input.value).toLowerCase())) {
                    input.valid = false
                }
            }
        },
        password: {
            value: '',
            valid: true,
            validateFunc: () => {
                let input = this.state.inputs.password
                if (input.value.length < 5) {
                    input.valid = false
                }
            }
        },
        name: {
            value: '',
            valid: true,
            validateFunc: () => {
                let input = this.state.inputs.name
                input.valid = (input.value.match(/^[A-Za-zА-Яа-яЁё\s]+$/) && input.value.length > 5)
            }
        },
        surname: {
            value: '',
            valid: true,
            validateFunc: () => {
                let input = this.state.inputs.surname
                input.valid = (input.value.match(/^[A-Za-zА-Яа-яЁё\s]+$/) && input.value.length > 5)
            }
        },
        repeatPassword: {
            value: '',
            valid: true,
            validateFunc: () => {
                let input = this.state.inputs.repeatPassword
                if (input.value.length < 5) {
                    input.valid = false
                }
            }
        },
        // add-change film
        title: {
            value: '',
            valid: true,
            validateFunc: () => {
                let input = this.state.inputs.title
                input.valid = input.value.length > 3
            }
        },
        description: {
            value: '',
            valid: true,
            validateFunc: () => {
                let input = this.state.inputs.description
                input.valid = (input.value.length > 6 && input.value.length < 150)
            }
        },
        pathImage: {
            value: '',
            valid: true,
            validateFunc: () => {
                let input = this.state.inputs.pathImage
                input.valid = input.value.length > 6
            }
        },
        popularity: {
            value: '',
            valid: true,
            validateFunc: () => {
                let input = this.state.inputs.popularity
                if (input.value.indexOf('.') == -1 && input.value.indexOf(',') == -1 && input.value > 0 && input.value < 11) {
                    input.valid = true
                } else {
                    input.valid = false
                }
            }
        },
        realiseDate: {
            value: '',
            valid: true,
            validateFunc: () => {
                let input = this.state.inputs.realiseDate
                input.valid = input.value != ''
            }
        },
        genres: {
            value: [],
            valid: true,
            validateFunc: () => {
                let input = this.state.inputs.genres
                input.valid = input.value.length != 0
            }
        },
        averageVote: {
            value: '',
            valid: true,
            validateFunc: () => {
                let input = this.state.inputs.averageVote
                if (input.value.indexOf('.') == -1 && input.value.indexOf(',') == -1 && input.value > 0 && input.value < 500000) {
                    input.valid = true
                } else {
                    input.valid = false
                }
            }
        },
        voteCount: {
            value: '',
            valid: true,
            validateFunc: () => {
                let input = this.state.inputs.voteCount
                if (input.value > 0 && input.value < 250000) {
                    input.valid = true
                } else {
                    input.valid = false
                }
            }
        },
        isAdult: {
            value: true,
            valid: true,
            validateFunc: () => {
            }
        },
    },
    warning: '',
    users: users,
    isFetching: true,
    genres: [],
    filmData: [],
    myFilmAdd: [],
    delIds:[],
    isConnect: true,
}

const reducers = (state = initialState, action) => {
    switch(action.payload){

        default:
            return state
    }
}

export default reducers

import React, {Component} from 'react';
import Header from "./component/Header/Header";
import Homepage from "./component/Main/Homepage";
import AddFilm from "./component/Main/AddFilm";
import FilmInfo from "./component/Main/FilmInfo";
import ChangeFilm from "./component/Main/ChangeFilm";
import Sign from "./component/Main/Sign";
import Registration from "./component/Main/Registration";
import NotFound from "./component/Main/NotFound";
import users from '../src/dummy_data/users'
import {Route, Switch } from "react-router-dom";


