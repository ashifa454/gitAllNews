import React, { Component } from 'react'
import NavBar from './navbar';
import {Container,Row} from 'reactstrap';
import NewsCard from './newsCard';
export default class BookMarks extends Component {
    constructor(){
        super();
        this.state={
            news:[
                {
                    title:'HELLO WORLD',
                    description:'HELLO WORLD',
                    url:'abc.com'
                },{
                    title:'HELLO WORLD',
                    description:'HELLO WORLD',
                    url:'abc.com'
                },{
                    title:'HELLO WORLD',
                    description:'HELLO WORLD',
                    url:'abc.com'
                },{
                    title:'HELLO WORLD',
                    description:'HELLO WORLD',
                    url:'abc.com'
                },
                {
                    title:'HELLO WORLD',
                    description:'HELLO WORLD',
                    url:'abc.com'
                },
                {
                    title:'HELLO WORLD',
                    description:'HELLO WORLD',
                    url:'abc.com'
                },
                {
                    title:'HELLO WORLD',
                    description:'HELLO WORLD',
                    url:'abc.com'
                },
                {
                    title:'HELLO WORLD',
                    description:'HELLO WORLD',
                    url:'abc.com'
                },
                {
                    title:'HELLO WORLD',
                    description:'HELLO WORLD',
                    url:'abc.com'
                }
            ]
        }
    }
  render() {
    return (
      <div>
          <NavBar user={this.props.user}/>
          <Container style={{marginTop:'60px'}}>
            <Row>
              {
                  this.state.news.map((item,index)=>{
                     return <NewsCard item={item}/>
                  })
              }
            </Row>
          </Container>
      </div>
    )
  }
}
