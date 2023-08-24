/*import React, { Component } from 'react'
import NewsItem from './Newsitem/Newsitem2'
import Spinner from './Spinner';
import './News.css'

import PropTypes from "prop-types"

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string

  }
  capatilize=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1); 
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1
    }
    document.title=`${this.capatilize(this.props.category)}-News Buzz`
  }
  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(50);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  handleNext = async () => {

    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }


  handlePrev = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  }
  render() {
    return (
      <div className="app" >

        <div className='heading'>
          <h6>Popular {this.capatilize(this.props.category)}</h6>
        </div>
        {this.state.loading && <Spinner />}
        <div className='container' >
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='row' key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

            </div>
          })}

        </div>
        <div className='btns'>
          <button disabled={this.state.page <= 1} type='button' className='btn prev' onClick={this.handlePrev}> Prev</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type='button' className='btn next' onClick={this.handleNext}>Next </button>
        </div>
      </div>
    )
  }
}

export default News*/
