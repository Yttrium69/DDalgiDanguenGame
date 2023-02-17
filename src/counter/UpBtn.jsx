import React, { Component } from 'react';

class UpBtn extends Component {
    render() {
        return (
            <div>
                 <div><button onClick={()=>this.props.onUp()}>Up</button></div>
            </div>
        );
    }
}

export default UpBtn;