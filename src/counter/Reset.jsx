import React, { Component } from 'react';

class Reset extends Component {
    render() {
        return (
            <div>
                 <div><button onClick={()=>this.props.clearArr()}>Reset</button></div>
            </div>
        );
    }
}

export default Reset;