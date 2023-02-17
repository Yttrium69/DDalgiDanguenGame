import React, { Component } from 'react';

class DownBtn extends Component {
    render() {
        return (
            <div>
                 <div><button onClick={()=>{this.props.onDown();
                this.props.onFruit();}}>Down</button></div>
            </div>
        );
    }
}

export default DownBtn;