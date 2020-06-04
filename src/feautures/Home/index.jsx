import React, { PureComponent } from 'react';
import styles from './Home.module.css';
import News from '../../components/News';
import axios from 'axios';

const API_PATH = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=77fc7d5e7fe74f938feb2d1cb84aa141';
const AUTHOR_API = 'https://randomuser.me/api/?results=100';

class Home extends PureComponent {
  state = {
    news: [],
    authors: []
  };

  componentDidMount() {
    axios({
      method: 'get',
      url: `${API_PATH}`,
    })
      .then(result => {
        this.setState({ news: result.data.articles })
      })
      .catch(error => this.setState({ error: error.message }));

    this.getAuthors();
  };

  getAuthors = () => {
    axios({
      method: 'get',
      url: `${AUTHOR_API}`,
    })
      .then(response => {
        this.setState({
          authors: response.data.results
        })
      })
      .catch(error => this.setState({ error: error.message }));
  }
  
  render() {
    const { news, authors } = this.state;

    return (
      <div className={styles.container}>
        {news.length && authors.length && news.map((news, idx) => (
          <News
            {...news}
            author={
              this.state.authors[idx].name.first + ' ' + this.state.authors[idx].name.last 
            }
          />
        ))}
      </div>
    )
  }
}

export default Home;