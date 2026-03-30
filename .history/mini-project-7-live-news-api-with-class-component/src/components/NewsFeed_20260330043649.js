import React, { Component } from 'react';
import NewsCard from './NewsCard';

class NewsFeed extends Component {
    constructor(props){
        super(props);
        this.state = {
            article :[],
            loading: true
        };

    }

    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=1c8b9e7a0c5d4e7b9f1c8e2f3a4b5c')
        .then(response => response.json())
        .then(data=>{
            this.setState({
                article: data.articles,
                loading: false
            });
        })
        .cat
    }
}