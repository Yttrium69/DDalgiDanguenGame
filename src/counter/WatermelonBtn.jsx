import React, { Component } from 'react';


class WatermelonBtn extends Component {

    render() {
        let title=this.props.title;
        return (
                 <div class="WatermelonBtn_div">
                    <button class="WatermelonBtn_btn" onClick={()=>this.props.onWatermelon(this.props.title)}>
                        {title}
                    </button>
                </div>
        );
    }
}

// const WatermelonBtn=styled.button`
//     color: red;
// `

export default WatermelonBtn;