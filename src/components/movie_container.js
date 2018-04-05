import React, {Component}  from 'react';
import axios from 'axios';
import Movie from './movies';

class MovieContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    }
    componentWillMount(){
        const itunesAPI = "http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json"
        axios.get(itunesAPI).then((res)=>{
            console.log(res);
            this.setState({
                movies: res.data.feed.entry
            });
            console.log(this.state);
        });
    }
    render (){
        const movieList = this.state.movies.map((item, index)=>{
            return <Movie info={item} key={index}/>
        });
        return (
            <div>
                 {movieList}   
            </div>
        )
    }
}

export default MovieContainer;