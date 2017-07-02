import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import ImageViewer from './components/ImageViewer'
import Desc from './components/Desc'
const config = require('./config')


class App extends Component {


  constructor(props) {
    super(props)
    this.resp = undefined
    this.url = 'https://api.nasa.gov/planetary/apod?api_key='+config.key
    this.state = {
      data : false
    }
  }
  componentDidMount() {
    console.log('component will mount')
    axios.get(this.url)
      .then((resp) => {
        this.resp = resp
        console.log('resp,', this.resp)
        this.setState({
          data : true
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
     let content = this.state.data ? <div className="row">
                                        <ImageViewer src={this.resp.data.url}></ImageViewer>
                                        <Desc desc={this.resp.data.explanation}></Desc>
                                    </div>     : <h2>Loading...</h2>
   return(
    <div>
      <div className="card-panel teal lighten-2 text center">
        <h4>Picture of the day</h4>
      </div>
      {content}
    </div>  
   )
  }
}

export default App;
