import React from 'react'
import './Desc.css'

class Desc extends React.Component {

    render() {
        return(
            <p className="col s4">
                {this.props.desc}
            </p>
        )
    }
}

export default Desc