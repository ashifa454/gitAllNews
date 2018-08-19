import React, { Component } from 'react'
import NavBar from './navbar';
import {Container,Row} from 'reactstrap';
import NewsCard from './newsCard';
export default class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            news:[
            ]
        }
    }
    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=25fd2106bcbf49eaa4d02d0595371d80').then(response=>response.json())
        .then((data)=>{
            if(data.status==='ok'){
                this.setState({
                    news:data.articles
                })
            }
        })
        .catch(err=>{
            alert(err)
        })
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
