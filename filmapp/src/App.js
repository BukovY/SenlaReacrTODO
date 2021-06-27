import React, { Component } from 'react';
import Header from "./component/Header/Header";
import Homepage from "./component/Main/Homepage";
import AddFilm from "./component/Main/AddFilm";
import FilmInfo from "./component/Main/FilmInfo";
import ChangeFilm from "./component/Main/ChangeFilm";
import Sign from "./component/Main/Sign";
import Registration from "./component/Main/Registration";


export default class App extends Component {
  state = {
    page: 'main', // notFound +main +addFilm filmInfo +changeFilm +sign +registration
    apiKey: '687697daf00f72e0a7e20cf9f55a44ec',
    maxPage: 15,
    selectedFilter: 'Без фильтра',
    role: 'admin', // def user admin
    userName: 'admin',
    selectPage: 1,
    selectFilmId: 0,
    inputs:{
      userVote:{
        value: '',
        valid: true,
        validateFunc: () => {
          let input = this.state.inputs.userVote
          if(input.value.indexOf('.') == -1 && input.value.indexOf(',') == -1 && input.value > 0 && input.value < 11){
            alert('Оценка корректная и она летит в запросе на сервер')
          } else {
            input.valid = false
          }
        }
      },
      email:{
        value: '',
        valid: true,
        validateFunc: () => {
          let input = this.state.inputs.email
          let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(!re.test(String(input.value).toLowerCase())){
            input.valid = false
          }
        }
      },
      password: {
        value: '',
        valid: true,
        validateFunc: () => {
          let input = this.state.inputs.password
          if(input.value.length < 5){
            input.valid = false
          }
        }
      },
      name:{
        value: '',
        valid: true,
        validateFunc: () => {
          let input = this.state.inputs.name
          input.valid = input.value.match(/^[A-Za-zА-Яа-яЁё\s]+$/)
        }
      },
      surname:{
        value: '',
        valid: true,
        validateFunc: () => {
          let input = this.state.inputs.surname
          input.valid = input.value.match(/^[A-Za-zА-Яа-яЁё\s]+$/)
        }
      },
      repeatPassword:{
        value: '',
        valid: true,
        validateFunc: () => {
          let input = this.state.inputs.repeatPassword
          if(input.value.length < 5){
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
          input.valid = input.value.length > 6
        }
      },
      description: {
        value: '',
        valid: true,
        validateFunc: () => {
          let input = this.state.inputs.description
          input.valid = input.value.length > 6
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
          if(input.value.indexOf('.') == -1 && input.value.indexOf(',') == -1 && input.value > 0 && input.value < 11){
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

          if(input.value > 0 && input.value < 11){
            this.state.inputs.averageVote.valid = true
          } else {
            this.state.inputs.averageVote.valid = false
          }
        }
      },
      voteCount: {
        value: '',
        valid: true,
        validateFunc: () => {
          let input = this.state.inputs.voteCount
          if(input.value > 0 && input.value < 250000){
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
    users: [{ name: "admin", password: "533533", role: "admin", email: 'admin@mail.ru' },
      { name: "John", password: "533533", role: "user", email: 'user@mail.ru' }],

    // https://code.tutsplus.com/ru/tutorials/fetching-data-in-your-react-application--cms-30670
    isFetching: true,
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    filmData: [
      {
        "adult": false,
        "backdrop_path": "/eqVgQwv8HfDN2tv4XWhqW5GryV4.jpg",
        "genre_ids": [
          27,
          35
        ],
        "id": 607383,
        "original_language": "en",
        "original_title": "Aquaslash",
        "overview": "To celebrate their graduation, the teenagers from Valley Hills High School have organized an ’80s-themed party at the old Wet Valley water park. Things turn gruesome when it's revealed that a mysterious maniac has inserted giant razor blades into one of the water slides. The water park thus becomes the backdrop for a bloodbath (literally), and everyone is a suspect...",
        "popularity": 259.23,
        "poster_path": "/wB8qqLIaYDkYEnjbS5hAJiTuYU6.jpg",
        "release_date": "2019-07-29",
        "title": "Aquaslash",
        "video": false,
        "vote_average": 3.9,
        "vote_count": 60
      },
      {
        "adult": false,
        "backdrop_path": "/2M2JxEv3HSpjnZWjY9NOdGgfUd.jpg",
        "genre_ids": [
          53,
          28,
          80,
          18
        ],
        id: 553604,
        "original_language": "en",
        "original_title": "Honest Thief",
        "overview": "A bank robber tries to turn himself in because he's falling in love and wants to live an honest life...but when he realizes the Feds are more corrupt than him, he must fight back to clear his name.",
        "popularity": 257.71,
        "poster_path": "/zeD4PabP6099gpE0STWJrJrCBCs.jpg",
        "release_date": "2020-09-03",
        "title": "Honest Thief",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 917
      },
      {
        "adult": false,
        "backdrop_path": "/3ombg55JQiIpoPnXYb2oYdr6DtP.jpg",
        "genre_ids": [
          878,
          28
        ],
        "id": 560144,
        "original_language": "en",
        "original_title": "Skylines",
        "overview": "When a virus threatens to turn the now earth-dwelling friendly alien hybrids against humans, Captain Rose Corley must lead a team of elite mercenaries on a mission to the alien world in order to save what's left of humanity.",
        "popularity": 262.431,
        "poster_path": "/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg",
        "release_date": "2020-10-25",
        "title": "Skylines",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 296
      },
      {
        "adult": false,
        "backdrop_path": "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
        "genre_ids": [
          878,
          28
        ],
        "id": 335983,
        "original_language": "en",
        "original_title": "Venom",
        "overview": "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
        "popularity": 247.077,
        "poster_path": "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
        "release_date": "2018-09-28",
        "title": "Venom",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 10880
      },
      {
        "adult": false,
        "backdrop_path": "/nz8xWrTKZzA5A7FgxaM4kfAoO1W.jpg",
        "genre_ids": [
          878,
          28
        ],
        "id": 651571,
        "original_language": "en",
        "original_title": "Breach",
        "overview": "A hardened mechanic must stay awake and maintain an interstellar ark fleeing the dying planet Earth with a few thousand lucky souls on board... the last of humanity. Unfortunately, humans are not the only passengers. A shapeshifting alien creature has taken residence, its only goal is to kill as many people as possible. The crew must think quickly to stop this menace before it destroys mankind.",
        "popularity": 292.514,
        "poster_path": "/13B6onhL6FzSN2KaNeQeMML05pS.jpg",
        "release_date": "2020-12-17",
        "title": "Breach",
        "video": false,
        "vote_average": 4.5,
        "vote_count": 412
      },
      {
        "adult": false,
        "backdrop_path": "/zlqMASc3vEtdym2OvXgE7fC6onT.jpg",
        "genre_ids": [
          28,
          878
        ],
        "id": 338762,
        "original_language": "en",
        "original_title": "Bloodshot",
        "overview": "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
        "popularity": 222.165,
        "poster_path": "/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
        "release_date": "2020-03-05",
        "title": "Bloodshot",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 3815
      },
      {
        "adult": false,
        "backdrop_path": "/a9zFUuxzChmAlIybVge9IZt1hH0.jpg",
        "genre_ids": [
          35
        ],
        "id": 578908,
        "original_language": "en",
        "original_title": "Bad Trip",
        "overview": "Two pals embark on a road trip full of funny pranks that pull real people into mayhem.",
        "popularity": 224.395,
        "poster_path": "/A1Gy5HX3DKGaNW1Ay30NTIVJqJ6.jpg",
        "release_date": "2021-03-26",
        "title": "Bad Trip",
        "video": false,
        "vote_average": 6,
        "vote_count": 225
      },
      {
        "adult": false,
        "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        "genre_ids": [
          12,
          878,
          28
        ],
        "id": 299534,
        "original_language": "en",
        "original_title": "Avengers: Endgame",
        "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
        "popularity": 221.564,
        "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        "release_date": "2019-04-24",
        "title": "Avengers: Endgame",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 18299
      },
      {
        "adult": false,
        "backdrop_path": "/iID0at69rWzZOIarUIFrfDOFJA.jpg",
        "genre_ids": [
          27,
          14,
          18,
          10770
        ],
        "id": 786300,
        "original_language": "en",
        "original_title": "Tentacles",
        "overview": "A young Los Angeles couple Tara and Sam fall head over heels into a new romance, entwining their lives — until their intimacy transforms into something terrifying.",
        "popularity": 225.604,
        "poster_path": "/kBKKXVbVwIP81u8Bnhguux48Sdn.jpg",
        "release_date": "2021-02-12",
        "title": "Tentacles",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 75
      },
      {
        "adult": false,
        "backdrop_path": "/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg",
        "genre_ids": [
          53,
          80
        ],
        "id": 602269,
        "original_language": "en",
        "original_title": "The Little Things",
        "overview": "Deputy Sheriff Joe \"Deke\" Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who's terrorizing Los Angeles. As they track the culprit, Baxter is unaware that the investigation is dredging up echoes of Deke's past, uncovering disturbing secrets that could threaten more than his case.",
        "popularity": 246.551,
        "poster_path": "/tLO1aD1ghdtVMT32z2sRmzgYKYd.jpg",
        "release_date": "2021-01-28",
        "title": "The Little Things",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 900
      },
      {
        "adult": false,
        "backdrop_path": "/7TxeZVg2evMG42p0uSbMJpWNQ8A.jpg",
        "genre_ids": [
          10751,
          16,
          14
        ],
        "id": 520946,
        "original_language": "en",
        "original_title": "100% Wolf",
        "overview": "Freddy Lupin, heir to a proud family line of werewolves, is in for a shock when on his 14th birthday his first 'warfing' goes awry, turning him into a ferocious poodle. The pack elders give Freddy until the next moonrise to prove he has the heart of a wolf, or risk being cast out forever. With the help of an unlikely ally in a streetwise stray named Batty, Freddy must prove he's 100% Wolf.",
        "popularity": 246.175,
        "poster_path": "/2VrvxK4yxNCU6KVgo5TADJeBEQu.jpg",
        "release_date": "2020-06-26",
        "title": "100% Wolf",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 167
      },
      {
        "adult": false,
        "backdrop_path": "/jnq4fV53Px9HvUZD2bQIxtGSwS7.jpg",
        "genre_ids": [
          80,
          18,
          28
        ],
        "id": 644083,
        "original_language": "en",
        "original_title": "Twist",
        "overview": "A Dickens classic brought thrillingly up to date in the teeming heartland of modern London, where a group of street smart young hustlers plan the heist of the century for the ultimate payday.",
        "popularity": 241.011,
        "poster_path": "/h3oT6lZcYC2khtZnzHBgqthj5W.jpg",
        "release_date": "2021-01-22",
        "title": "Twist",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 86
      },
      {
        "adult": false,
        "backdrop_path": "/aoHiMjRt0Qs1dtkV61LyxTnQtJl.jpg",
        "genre_ids": [
          12,
          14
        ],
        "id": 337401,
        "original_language": "en",
        "original_title": "Mulan",
        "overview": "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
        "popularity": 221.475,
        "poster_path": "/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        "release_date": "2020-09-04",
        "title": "Mulan",
        "video": false,
        "vote_average": 7,
        "vote_count": 4837
      },
      {
        "adult": false,
        "backdrop_path": "/dEh93Ni98JWh7fmhD56ZlOFQmoT.jpg",
        "genre_ids": [
          80,
          18,
          53,
          28
        ],
        "id": 606523,
        "original_language": "ko",
        "original_title": "낙원의 밤",
        "overview": "An assassin named Tae-goo is offered a chance to switch sides with his rival Bukseong gang, headed by Chairman Doh. Tae-goo rejects the offer that results in the murder of his sister and niece. In revenge, Tae-goo brutally kills Chairman Doh and his men and flees to Jeju Island where he meets Jae-yeon, a terminally ill woman. Though, the henchman of the Bukseong gang, Executive Ma is mercilessly hunting Tae-goo to take revenge.",
        "popularity": 200.482,
        "poster_path": "/dYCWUAidqgakGETwZkfGxU7CWhL.jpg",
        "release_date": "2020-09-03",
        "title": "Night in Paradise",
        "video": false,
        "vote_average": 7,
        "vote_count": 109
      },
      {
        "adult": false,
        "backdrop_path": "/uEJuqp08dH6IQwZJGASlPZOXqKu.jpg",
        "genre_ids": [
          18,
          10402,
          10749
        ],
        "id": 467909,
        "original_language": "en",
        "original_title": "In the Heights",
        "overview": "The story of Usnavi, a bodega owner who has mixed feelings about closing his store and retiring to the Dominican Republic or staying in Washington Heights.",
        "popularity": 237.811,
        "poster_path": "/RO4KoJyoQMQzh9z76d4v4FJMmJ.jpg",
        "release_date": "2021-06-10",
        "title": "In the Heights",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 30
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          16
        ],
        "id": 829859,
        "original_language": "en",
        "original_title": "Thor & Loki - Blood Brothers",
        "overview": "A serious motion comic drama about Loki, who becomes the ruler of Asgard after a successful coup, only to realize that even gods must deal with hard political choices. But does anything matter if even fate itself is against you?",
        "popularity": 184.891,
        "poster_path": "/sDwkabg58Y9uZHkj2lQl5EBaaBH.jpg",
        "release_date": "2011-09-13",
        "title": "Thor & Loki - Blood Brothers",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg",
        "genre_ids": [
          12,
          35,
          14
        ],
        "id": 512200,
        "original_language": "en",
        "original_title": "Jumanji: The Next Level",
        "overview": "As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.",
        "popularity": 218.786,
        "poster_path": "/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg",
        "release_date": "2019-12-04",
        "title": "Jumanji: The Next Level",
        "video": false,
        "vote_average": 7,
        "vote_count": 5857
      },
      {
        "adult": false,
        "backdrop_path": "/y07caIA4yErsDOZ2IzfSDGzTz7B.jpg",
        "genre_ids": [
          27,
          878
        ],
        "id": 791910,
        "original_language": "en",
        "original_title": "Rise of the Mummy",
        "overview": "A group of archaeology students awaken an ancient mummy. After being trapped in a time loop, the only way they can escape, is to defeat the mummy. As the body count rises, it seems the Mummy has to collect the souls of those who woke him to be able to walk the earth - for good.",
        "popularity": 216.527,
        "poster_path": "/tmghT8HaddVIS9hEXIOI9GuDchi.jpg",
        "release_date": "2021-04-03",
        "title": "Rise of the Mummy",
        "video": false,
        "vote_average": 4.8,
        "vote_count": 22
      },
      {
        "adult": false,
        "backdrop_path": "/6mKAKhj8POVGqV1GsroS5mGIUe9.jpg",
        "genre_ids": [
          14,
          28,
          12
        ],
        "id": 666750,
        "original_language": "en",
        "original_title": "Dragonheart: Vengeance",
        "overview": "Lukas, a young farmer whose family is killed by savage raiders in the countryside, sets out on an epic quest for revenge, forming an unlikely trio with a majestic dragon and a swashbuckling, sword-fighting mercenary, Darius.",
        "popularity": 240.802,
        "poster_path": "/qs6gz6atyQcAvqC6qZaslOjliUG.jpg",
        "release_date": "2020-02-04",
        "title": "Dragonheart: Vengeance",
        "video": false,
        "vote_average": 7,
        "vote_count": 222
      },
      {
        "adult": false,
        "backdrop_path": "/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg",
        "genre_ids": [
          18,
          28,
          53
        ],
        "id": 545609,
        "original_language": "en",
        "original_title": "Extraction",
        "overview": "Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord.",
        "popularity": 210.059,
        "poster_path": "/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
        "release_date": "2020-04-24",
        "title": "Extraction",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 3887
      }
    ],
  };

  statusHandler =(action)=>{
    switch (action) {
      case 'mainLogOut':
        this.setState(({userName, page, role, selectPage, selectedFilter})=>{
          return {
            userName: '',
            page: 'main',
            role: 'def',
            selectPage: 1,
            selectedFilter: 'Без фильтра'
          }
        })
        break;
      case 'sign':
        this.setState(({page})=>{
          return {
            page: 'sign',
          }
        })
        break;
      case 'registration':
        this.setState(({page})=>{
          return {
            page: 'registration',
          }
        })
        break;
      case 'main':
        this.state.isFetching = true
        this.state.page = 'main'
        this.state.selectPage = 1
        this.state.selectedFilter = 'Без фильтра'
        this.updateData()

          break;
      case 'addFilm':
        for(let i of ['title', 'description', 'pathImage', 'popularity', 'realiseDate', 'genres','averageVote', 'voteCount', 'isAdult']){
          if(i != 'genres'){
            this.state.inputs[i].value = ''
            this.state.inputs[i].valid = true
          } else {
            this.state.inputs[i].value = []
            this.state.inputs[i].valid = true
          }
        }
        this.setState(({page})=>{
          return {
            page: 'addFilm',
            inputs: this.state.inputs
          }
        })
          break;
        default:
          alert('Something wrong')
        break;
    }
  }
  changeFilm = (id) => {
    // записать параметры фильмы в инпуты
    let film = this.state.filmData.filter(el => el.id == id)[0]
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
    this.setState(({page, selectFilmId})=>{
      return {
        page: 'changeFilm',
        selectFilmId: id,
        inputs: this.state.inputs
      }
    })
  }
  deliteFilm = (id) => {
    this.setState(({filmData, page})=>{
      return {
        filmData: this.state.filmData.filter(el => el.id != id),
        page: 'main'
      }
    })
  }
  openFilmInfo = (id, tagName) => {
    if(tagName != 'BUTTON'){
      let inputs = this.state.inputs
      inputs.userVote.valid = true
      inputs.userVote.value = ''
      this.setState(({page, selectFilmId, inputs})=>{
        return {
          page: 'filmInfo',
          selectFilmId: id,
          inputs: this.state.inputs
        }
      })
    }
  }
  changeInput = (key, value) => {
    let inputsNew = this.state.inputs
    inputsNew[key].value = value
    inputsNew[key].valid = true
    this.setState(({inputs, warning})=>{
      return {
        inputs: this.state.inputs,
        warning: ''
      }
    })
  }
  validateInputs = (key, ...arg) => {
    for(let i of arg){
      this.state.inputs[i].validateFunc()
    }
    switch (key) { // changeVote signIn
      case 'signIn':
        let isAllValid = true
        for(let i of arg){
          if(this.state.inputs[i].valid == false){
            isAllValid = false
            break
          }
        }
        if(isAllValid){
          let current = ''
          for(let i of this.state.users){
            if(this.state.inputs.email.value == i.email) {
              current = i
              break
            }
          }
          if(typeof current == 'object' ){ // email in
            if(current.password == this.state.inputs.password.value){ // ok
              // затираем значение перезаписываем имя и меняем роль перекидываем не главную
              for(let i of arg){
                this.state.inputs[i].value = ''
              }
              this.setState(({role, page, userName})=>{
                return {
                  role: current.role,
                  page: 'main',
                  userName: current.name
                }
              })
            } else { // wrong password
              this.state.inputs.password.valid = false
              this.setState(({warning})=>{
                return {
                  warning: 'Wrong password'
                }
              })

            }

          } else { // email not found
            this.state.inputs.email.valid = false
            this.setState(({warning})=>{
              return {
                warning: 'Email not found'
              }
            })
          }
        }
        break;
      // еще случаи валидации на регистрацию изминение фильма и добавление фильма
      case 'register':
        let isAllValidReg = true
        let isUserRegister = false
        for(let i of this.state.users){
          if(i.email == this.state.inputs.email.value){
            isUserRegister = true
            this.state.warning = 'User is registred, signIn please'
          }
        }
        if(isUserRegister){ // return warning и сделать валидными все инпуты
          console.log('regidtred user')
          for(let i of arg){
            this.state.inputs[i].valid = true
          }
          this.setState(({inputs, warning})=>{
            return {
              inputs: this.state.inputs,
              warning: this.state.warning
            }
          })
        } else {
          for(let i of arg){
            if(this.state.inputs[i].valid == false){
              isAllValidReg = false
            }
          }

          if(isAllValidReg && this.state.inputs.password.value == this.state.inputs.repeatPassword.value){
            // log new user role user
            let newUser = {name: this.state.inputs.name.value, password: this.state.inputs.password.value, role: "user", email: this.state.inputs.email.value}
            // def inputs
            for(let i of arg){
              this.state.inputs[i].value = ''
            }
            this.setState(({role, userName, users, inputs, page})=>{
              return {
                page: 'main',
                role: 'user',
                userName: newUser.name,
                users: [...this.state.users, newUser],
                inputs: this.state.inputs
              }
            })
          } else { {
            this.setState(({inputs})=>{
              return {
                inputs: this.state.inputs,
              }
            })
          }
          }
        }
        break;
      case 'changeVote':
        this.setState(({})=>{
          return {}
        })
        break
      case 'clear':
        for(let i of arg){
          if(i != 'genres'){
            this.state.inputs[i].value = ''
            this.state.inputs[i].valid = true
          } else {
            this.state.inputs[i].value = []
            this.state.inputs[i].valid = true
          }
        }
        this.setState(({inputs})=>{
          return {
            inputs: this.state.inputs
          }
        })
        break
      case 'addFilm':
        let addFilmAllValid = true;
        for(let i of arg){
          if(this.state.inputs[i].valid == false){
            addFilmAllValid = false
            break
          }
        }
        if(addFilmAllValid){
          alert('all valid go to DB')
          this.setState(({})=>{
            return {

            }
          })
        }
        break
      default:
        alert('Something wrong')
        break;
    }

    this.setState(({})=>{
      return {}
    })
  }
  changePanginationPage = (count) => {
    this.setState(({selectedFilter})=>{
      return {
        selectPage: count,
        isFetching: true
      }
    })
  }
  changeFilter = (item) => {
    this.setState(({selectedFilter})=>{
      return {
        selectedFilter: item,
        isFetching: true
      }
    })
  }

  updateData =() => {
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
        .then(response => {return response.json()})
        .then(data => {
          this.setState(({filmData, isFetching})=>{
            return {
              filmData: data.results,
              isFetching: false
            }
          })
        })
  }


  // add func
  adultInputChange = (el) => { // need inverse el
    let inputsNew = this.state.inputs
    inputsNew.isAdult.value = !el
    this.setState(({inputs})=>{
      return {
        inputs: inputsNew
      }
    })
  }
  genresInputChange = (el) => {
    let input = this.state.inputs.genres
    if(input.value.indexOf(el) == -1){
      input.value.push(el)
    } else {
      input.value = input.value.filter(element => element != el)
    }
    this.setState(({inputs})=>{
      return {
        inputs: inputs
      }
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
    fetch(url)
        .then(response => {return response.json()})
        .then(data => {this.setState(({filmData, isFetching})=>{
          return {
            filmData: data.results,
            isFetching: false
          }
        })
        })
  }
  componentDidUpdate(nextProps, nextState, nextContext) {
    if(this.state.isFetching){
      this.updateData()
    }
  }


  render() {

    let selectedFilm = {}
    if(this.state.page == 'changeFilm' || this.state.page == 'filmInfo'){
      selectedFilm = this.state.filmData.filter(el => el.id == this.state.selectFilmId)[0]
    }


    return (
        <div className="container">
          <Header username={this.state.userName} statusHandler={this.statusHandler} role={this.state.role}/>
          {this.state.page == 'main' ? <Homepage filmData={this.state.filmData}
                                                 role={this.state.role}
                                                 selectPage={this.state.selectPage}
                                                 maxPanginationPage={this.state.maxPage}
                                                 isFetching={this.state.isFetching}
                                                 statusHandler={this.statusHandler}
                                                 changeFilm={this.changeFilm}
                                                 deliteFilm={this.deliteFilm}
                                                 openFilmInfo={this.openFilmInfo}
                                                 changePanginationPage={this.changePanginationPage}
                                                 changeFilter={this.changeFilter}/> : ''}



          {this.state.page == 'addFilm' ? <AddFilm title={this.state.inputs.title}
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
                                                   changeInput={this.changeInput}/>: ''}

          {this.state.page == 'filmInfo' ? <FilmInfo selectedFilm={selectedFilm}
                                                     genres={this.state.genres}
                                                     role={this.state.role}
                                                     changeFilm={this.changeFilm}
                                                     deliteFilm={this.deliteFilm}
                                                     changeInput={this.changeInput}
                                                     userVote={this.state.inputs.userVote}
                                                     validateInputs={this.validateInputs}/> : ''}
          {this.state.page == 'changeFilm' ? <ChangeFilm title={this.state.inputs.title}
                                                         id={this.state.selectFilmId}
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
                                                         changeInput={this.changeInput}/> : ''}
          {this.state.page == 'sign' ? <Sign statusHandler={this.statusHandler}
                                             email={this.state.inputs.email}
                                             password={this.state.inputs.password}
                                             warning={this.state.warning}
                                             changeInput={this.changeInput}
                                             validateInputs={this.validateInputs}/> : ''}
          {this.state.page == 'registration' ? <Registration name={this.state.inputs.name}
                                                             surname={this.state.inputs.surname}
                                                             password={this.state.inputs.password}
                                                             repeatPassword={this.state.inputs.repeatPassword}
                                                             email={this.state.inputs.email}
                                                             warning={this.state.warning}
                                                             changeInput={this.changeInput}
                                                             validateInputs={this.validateInputs} /> : ''}


        </div>
    );
  }
}
/*

фиксим баги валидации

сделать подгргузку жанров
добиваем стили
 */
