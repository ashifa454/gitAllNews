import React, { Component } from 'react'
import {Col,Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,ButtonGroup,Button,CardFooter} from 'reactstrap';
import {db,auth} from './firebase';
export default class NewCard extends Component {
  addItemtoBookMarks=()=>{

  }
    render() {
    return (
        <Col lg={3} xs={12} sm={6} style={{paddingTop:'10px',paddingBottom:'10px'}}>
        <Card>
  <CardImg top width="100%" height='150' src={this.props.item.urlToImage} alt={this.props.item.title} />
  <CardBody>
    <CardTitle>{this.props.item.title.substring(0,20)}</CardTitle>
    <CardSubtitle>{(this.props.item.author)?this.props.item.author:'NOT_AVAILABLE'}</CardSubtitle>
    <CardText>{(this.props.item.description)?this.props.item.description.substring(0,100):''}</CardText>
  </CardBody>
  <CardFooter>
  <ButtonGroup size="xs">
  <Button href={this.props.item.url} target='_blank'>Visit</Button>
</ButtonGroup>
  </CardFooter>
</Card>
        </Col>
    )
  }
}
