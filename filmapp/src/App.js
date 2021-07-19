import React, {Component} from "react";
import Header from "./component/Header/Header";
import {Route, Switch} from "react-router-dom";
import Homepage from "./component/Main/Homepage/Homepage";
import AddFilm from "./component/Main/AddFilm/AddFilm";
import FilmInfo from "./component/Main/FilmInfo/FilmInfo";
import ChangeFilm from "./component/Main/ChangeFilm/ChangeFilm";
import Sign from "./component/Main/Sign/Sign";
import Registration from "./component/Main/Registration/Registration";
import NotFound from "./component/Main/NotFound/NotFound";
import './css/Main.css'
import './css/Loader.css'
import './css/Input.css'
import './css/Button.css'


export default class App extends Component {
    state = {
        page: 'notConnect',
        apiKey: '687697daf00f72e0a7e20cf9f55a44ec',
        maxPage: 15,
        selectedFilter: 'Без фильтра',
        selectPage: 1,
        selectFilmId: 0,
        inputs: {
            userVote: {
                value: '',
                valid: true,
                validateFunc: () => {
                    let input = this.state.inputs.userVote
                    if (input.value.indexOf('.') === -1 && input.value.indexOf(',') === -1 && input.value >= 0 && input.value < 11) {
                        alert('Оценка корректная и она летит в запросе на сервер')
                    } else {
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
                    if (input.value.indexOf('.') === -1 && input.value.indexOf(',') === -1 && input.value >= 0 && input.value < 11) {
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
                    input.valid = input.value !== ''
                }
            },
            genres: {
                value: [],
                valid: true,
                validateFunc: () => {
                    let input = this.state.inputs.genres
                    input.valid = input.value.length !== 0
                }
            },
            averageVote: {
                value: '',
                valid: true,
                validateFunc: () => {
                    let input = this.state.inputs.averageVote
                    if (input.value.indexOf('.') === -1 && input.value.indexOf(',') === -1 && input.value > 0 && input.value < 500000) {
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
        isFetching: true,
        genres: [],
        filmData: [],
        myFilmAdd: [],
        delIds:[],
        isConnect: true,
    };

    statusHandler = (action) => {
        switch (action) {
            case 'main':
                this.setState(({}) => {
                    return {isFetching: true, page: 'main', selectPage: 1, selectedFilter: 'Без фильтра'}
                })
                this.updateData()
                break;
            case 'addFilm':
                for (let i of ['title', 'description', 'pathImage', 'popularity', 'realiseDate', 'genres', 'averageVote', 'voteCount', 'isAdult']) {
                    if (i !== 'genres') {
                        this.state.inputs[i].value = ''
                        this.state.inputs[i].valid = true
                    } else {
                        this.state.inputs[i].value = []
                        this.state.inputs[i].valid = true
                    }
                }
                this.setState(({}) => {
                    return {inputs: this.state.inputs}
                })
                break;
            default:
                alert('Something wrong')
                break;
        }
    }
    changeFilm = (id) => {
        let film = [...this.state.myFilmAdd, ...this.state.filmData].filter(el => Number(el.id) === Number(id))[0]
        this.state.inputs.title.value = film.original_title
        this.state.inputs.title.valid = true
        this.state.inputs.description.value = film.overview
        this.state.inputs.description.valid = true
        this.state.inputs.pathImage.value = film.poster_path
        this.state.inputs.pathImage.valid = true
        this.state.inputs.popularity.value = String(film.popularity)
        this.state.inputs.popularity.valid = true
        this.state.inputs.realiseDate.value = film.release_date
        this.state.inputs.realiseDate.valid = true
        this.state.inputs.genres.value = film.genre_ids
        this.state.inputs.genres.valid = true
        this.state.inputs.averageVote.value = String(film.vote_average)
        this.state.inputs.averageVote.valid = true
        this.state.inputs.voteCount.value = String(film.vote_count)
        this.state.inputs.voteCount.valid = true
        this.state.inputs.isAdult.value = String(film.adult)
        this.state.inputs.isAdult.valid = true
        this.setState(({}) => {
            return {selectFilmId: id, inputs: {...this.state.inputs}}
        })
    }
    deleteFilm = (id) => {
        this.setState(({}) => {
            return {delIds: [...this.state.delIds, id], page: 'main'}
        })
    }
    openFilmInfo = (id, tagName) => {
        if (String(tagName) !== String('BUTTON')) {
            let inputs = this.state.inputs
            inputs.userVote.valid = true
            inputs.userVote.value = ''
            this.setState(({}) => {
                return {page: 'filmInfo', selectFilmId: id, inputs: this.state.inputs}
            })
        }
    }
    changeInput = (key, value) => {
        let inputsNew = this.state.inputs
        inputsNew[key].value = value
        inputsNew[key].valid = true
        this.setState(({}) => {
            return {inputs: this.state.inputs, warning: ''}
        })
    }
    validateInputs = (key, ...arg) => {
        for (let i of arg) {
            this.state.inputs[i].validateFunc()
        }
        switch (key) {
            case 'changeVote':
                this.setState(({}) => {
                    return {}
                })
                break
            case 'clear':
                for (let i of arg) {
                    if (i !== 'genres') {
                        this.state.inputs[i].value = ''
                        this.state.inputs[i].valid = true
                    } else {
                        this.state.inputs[i].value = []
                        this.state.inputs[i].valid = true
                    }
                }
                this.state.warning = ''
                this.setState(({}) => {
                    return {inputs: this.state.inputs, warning: this.state.warning}
                })
                break
            case 'addFilm':
                let addFilmAllValid = true;
                for (let i of arg) {
                    if (this.state.inputs[i].valid === false) {
                        addFilmAllValid = false
                        break
                    }
                }
                if (addFilmAllValid) {
                    let obg={
                        title:this.state.inputs.title.value,
                        original_title: this.state.inputs.title.value,
                        overview:this.state.inputs.description.value,
                        poster_path: this.state.inputs.pathImage.value,
                        popularity: this.state.inputs.popularity.value,
                        release_date: this.state.inputs.realiseDate.value,
                        genre_ids: [...this.state.inputs.genres.value],
                        vote_average:this.state.inputs.averageVote.value,
                        vote_count:this.state.inputs.voteCount.value,
                        adult:this.state.inputs.isAdult.value,
                        id: parseInt(Math.random()*100000)
                    }
                    for (let i of arg) {
                        if (i !== 'genres') {
                            this.state.inputs[i].value = ''
                            this.state.inputs[i].valid = true
                        } else {
                            this.state.inputs[i].value = []
                            this.state.inputs[i].valid = true
                        }
                    }
                    this.state.myFilmAdd.push(obg)
                    console.log(this.state.myFilmAdd)
                    this.setState(({}) => {
                        return {myFilmAdd: this.state.myFilmAdd}
                    })
                }
                break
            default:
                alert('Something wrong')
                break;
        }
        this.setState(({}) => {
            return {}
        })
    }
    changePaginationPage = (count) => {
        this.setState(({}) => {
            return {selectPage: count, isFetching: true}
        })
    }
    changeFilter = (item) => {
        this.setState(({}) => {
            return {selectedFilter: item, isFetching: true}
        })
    }
    updateData = () => {
        let filter;
        switch (this.state.selectedFilter) {
            case 'Без фильтра':
                filter = 'popularity.desc';
                break;
            case 'По убыванию рейтинга':
                filter = 'vote_average.desc';
                break;
            case 'По возрастанию рейтинга':
                filter = 'vote_average.asc';
                break;
            case 'По убыванию даты релиза':
                filter = 'release_date.desc';
                break;
            case 'По возрастанию даты релиза':
                filter = 'release_date.asc';
                break;
            default:
                alert('Нет такого фильтра, если добавил чноно новое то отрефакторь чтоб работало старое')
        }
        let url1 = `https://api.themoviedb.org/3/discover/movie?api_key=${this.state.apiKey}&language=en-US&sort_by=${filter}&include_adult=false&include_video=false&page=${this.state.selectPage}&with_watch_monetization_types=flatrate`
        fetch(url1)
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState(({}) => {
                    return {filmData: data.results, isFetching: false}
                })
            })
            .catch(err => this.setState(({}) => {
                return {page: 'notConnect'}
            }))
    }
    adultInputChange = (el) => { // need inverse el
        let inputsNew = this.state.inputs
        inputsNew.isAdult.value = !el
        this.setState(({}) => {
            return {inputs: inputsNew}
        })
    }
    genresInputChange = (el) => {
        let input = this.state.inputs.genres
        if (input.value.indexOf(el) === -1) {
            input.value.push(el)
        } else {
            input.value = input.value.filter(element => element !== el)
        }
        this.setState(({inputs}) => {
            return {inputs: inputs}
        })
    }
    componentDidMount() {
        let filter1;
        switch (this.state.selectedFilter) {
            case 'Без фильтра':
                filter1 = 'popularity.desc';
                break;
            case 'По убыванию рейтинга':
                filter1 = 'vote_average.desc';
                break;
            case 'По возрастанию рейтинга':
                filter1 = 'vote_average.asc';
                break;
            case 'По убыванию даты релиза':
                filter1 = 'release_date.desc';
                break;
            case 'По возрастанию даты релиза':
                filter1 = 'release_date.asc';
                break;
            default:
                alert('Нет такого фильтра, если добавил чноно новое то отрефакторь чтоб работало старое')
        }
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.state.apiKey}&language=en-US&sort_by=${filter1}&include_adult=false&include_video=false&page=${this.state.selectPage}&with_watch_monetization_types=flatrate`
        let genresUrl = `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${this.state.apiKey}`
        fetch(genresUrl)
            .then(response => {return response.json()})

            .then(data => this.state.genres = data.genres)
            .then(fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.setState(({}) => {
                        return {filmData: data.results, isFetching: false}
                    })
                }))
    }
    componentDidUpdate(nextProps, nextState, nextContext) {
        if (this.state.isFetching) {
            this.updateData()
        }
    }
    render() {
        let filmToRender = []
        let remainingFilm = this.state.filmData.filter(el => this.state.delIds.indexOf(el.id) === -1)
        if(this.state.page === 'main' && this.state.selectedFilter === 'Без фильтра' && this.state.myFilmAdd.length > 0 && this.state.selectPage === 1){
            let counter = 0;
            for(let i of this.state.myFilmAdd){
                if(counter < 20){
                    filmToRender.push(i)
                    counter++
                }
            }
            for(let i of remainingFilm){
                if(counter < 20){
                    filmToRender.push(i)
                    counter++
                }
            }
        } else {
            filmToRender = remainingFilm
        }

        return (<div className="container">
            <Header statusHandler={this.statusHandler}/>
            <Switch>
                <Route path='/' exact>
                    <Homepage filmData={filmToRender}
                              addFilm={this.state.myFilmAdd}
                              selectPage={this.state.selectPage}
                              maxPaginationPage={this.state.maxPage}
                              isFetching={this.state.isFetching}
                              selectedFilter={this.state.selectedFilter}
                              statusHandler={this.statusHandler}
                              changeFilm={this.changeFilm}
                              deleteFilm={this.deleteFilm}
                              openFilmInfo={this.openFilmInfo}
                              changePaginationPage={this.changePaginationPage}
                              changeFilter={this.changeFilter}/>
                </Route>
                <Route path='/addfilm'>
                    <AddFilm title={this.state.inputs.title}
                             description={this.state.inputs.description}
                             pathImage={this.state.inputs.pathImage}
                             popularity={this.state.inputs.popularity}
                             realiseDate={this.state.inputs.realiseDate}
                             genres={this.state.inputs.genres}
                             averageVote={this.state.inputs.averageVote}
                             voteCount={this.state.inputs.voteCount}
                             isAdult={this.state.inputs.isAdult}
                             genresMap={this.state.genres}
                             genresInputChange={this.genresInputChange}
                             validateInputs={this.validateInputs}
                             adultInputChange={this.adultInputChange}
                             changeInput={this.changeInput}/>
                </Route>
                <Route path='/filminfo/:id'>
                    <FilmInfo selectedFilm={filmToRender.filter(el => Number(el.id) === Number(this.state.selectFilmId))[0]}
                              genres={this.state.genres}

                              changeFilm={this.changeFilm}
                              deleteFilm={this.deleteFilm}
                              changeInput={this.changeInput}
                              userVote={this.state.inputs.userVote}
                              validateInputs={this.validateInputs}/>
                </Route>
                <Route path='/changefilm/:id'>
                    <ChangeFilm title={this.state.inputs.title}
                                idF={this.state.selectFilmId}
                                description={this.state.inputs.description}
                                pathImage={this.state.inputs.pathImage}
                                popularity={this.state.inputs.popularity}
                                realiseDate={this.state.inputs.realiseDate}
                                genres={this.state.inputs.genres}
                                averageVote={this.state.inputs.averageVote}
                                voteCount={this.state.inputs.voteCount}
                                isAdult={this.state.inputs.isAdult}
                                genresMap={this.state.genres}
                                genresInputChange={this.genresInputChange}
                                validateInputs={this.validateInputs}
                                adultInputChange={this.adultInputChange}
                                changeInput={this.changeInput}/>

                </Route>
                <Route path='/sign'>
                    <Sign/>
                </Route>
                <Route path='/registration' exact>
                    <Registration/>
                </Route>
                <Route path='/404'>
                    <NotFound statusHandler={this.statusHandler}/>
                </Route>
            </Switch>
        </div>);
    }
}
