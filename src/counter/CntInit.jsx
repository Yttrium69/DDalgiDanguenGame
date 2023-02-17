import React, { Component } from 'react';

class CntInit extends Component {
    render() {
        return (
            <div>
                 <div><button onClick={()=>this.props.onCntInit()}>Initiate</button></div>
            </div>
        );
    }
}

export default CntInit;