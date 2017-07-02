import React from 'react'
import './ImgContainer.css'

class ImageViewer extends React.Component {
    render() {
        console.log(this.props.src)
        return(
            <img src={this.props.src}
                className="col s8"></img>
        )
    }

}

export default ImageViewer