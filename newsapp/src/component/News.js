import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Button, Col, Row } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

export default class News extends Component {
 apiKey = "4ff2431f0a6a44e79db95c67481f5e1d"
 
 static defaultProps = {
    country : 'in',
    category: 'general',
    pageSize : 8
 }

 static propTypes = {
    country : propTypes.string,
    category : propTypes.string,
    pageSize : propTypes.number
 }

 handleOnClickPrev = ()=> {
    this.fetchNewsArticles(this.state.page - 1)
    this.setState( {
        page: this.state.page - 1
    })       
 }

  handleOnClickNext = ()=> {
    this.fetchNewsArticles(this.state.page + 1)
    this.setState( {
        page: this.state.page + 1
    })   
  }

  async fetchNewsArticles(page = 1) {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.apiKey}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${page}`
    await fetch(url)
    .then((res) => res.json()     
    )
    .then((data) => {
        console.log(data.articles)
        this.setState({
            newsArticles : data.articles
        })   
       
    })
    .catch((err) => {
       console.log(err.message);
    });


  }

 constructor(props) {
    super(props);
    this.state = {
        newsArticles: [],
        page: 1,
        loading : false
    };
  }
 
componentDidMount() {
    
    this.fetchNewsArticles(this.state.page)    
 }

  render() {
    return (
      <div className='container' fluid>
        <h1 className='text-center' style={{marginTop: 20}}>News: Top Headlines</h1>
        <Row style={{ marginTop:20 }}>
            {this.state.newsArticles && 
            this.state.newsArticles.map((element) =>
            <Col  style={{ margin:20}}>            
                <NewsItem newsUrl = {element.url} 
                            title = {element.title} 
                            descreption = {element.descreption} 
                            imageUrl = {element.urlToImage}/>
             </Col>   )                     
            }
        </Row>
        <div className='d-flex justify-content-between' style={{ margin: 40 }}>
            <Button variant="primary" onClick={this.handleOnClickPrev}>Prev</Button>{' '}
            <Button variant="primary" onClick={this.handleOnClickNext}>Next</Button>{' '}
            
        </div>
      </div>
    )
  }
}
