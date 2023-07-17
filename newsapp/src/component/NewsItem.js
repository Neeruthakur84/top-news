import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class NewsItem extends Component {
  
  render() {
    let  {title, descreption, imageUrl, newsUrl} = this.props
    return (      
      <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>          
          {descreption}
        </Card.Text>
        <Button href={newsUrl} target="_blank" rel="noopener noreferre">Read More</Button>  
      </Card.Body>
    </Card>
    )
  }
}
