import React, { Component } from 'react';

class BooleanComponent extends Component {
    render() {
        const message=this.props.alchol? '술 마시기':'리액트 하기'

        return (
            <div className="message-container">
                {message}
            </div>
        );
    }
}

export default BooleanComponent;