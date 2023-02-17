import React, { Component } from 'react';

class WatermelonBtn extends Component {
    render() {
        return (
            <div>
                 <div><button onClick={()=>this.props.onWatermelon(this.props.title)}>{this.props.title}</button></div>
            </div>
        );
    }
}

export default WatermelonBtn;