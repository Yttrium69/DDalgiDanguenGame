import React, { Component } from 'react';
import UpBtn from './UpBtn';
import DownBtn from './DownBtn';
import CntInit from './CntInit';
import WatermelonBtn from './WatermelonBtn';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            cnt:1,
            fruitArr:["딸기",]
        };
        this.increase=this.increase.bind(this);
        this.decrease=this.decrease.bind(this);
        this.cntInit=this.cntInit.bind(this);
        this.addWatermelon=this.addWatermelon.bind(this);
    }

    increase() {
        this.setState(({cnt})=>({cnt:cnt+1}));
    }

    decrease() {
        this.setState(({cnt})=>({cnt:cnt-1}));
    }

    cntInit(){
        this.setState(({cnt})=>({cnt:0}))
    }

    addWatermelon(title){
        this.setState(state=>{
            const fruitArr=state.fruitArr.concat([title, ]);
            return {fruitArr};
        })
    }

        render() {
            return(
            <div>
                <span>카운터: {this.state.cnt}</span>
                <UpBtn onUp={this.increase}></UpBtn>
                <DownBtn onDown={this.decrease}></DownBtn>
                <CntInit onCntInit={this.cntInit}></CntInit>
                <WatermelonBtn title="딸기" onWatermelon={this.addWatermelon}></WatermelonBtn>
                <WatermelonBtn title="당근" onWatermelon={this.addWatermelon}></WatermelonBtn>
                <WatermelonBtn title="수박" onWatermelon={this.addWatermelon}></WatermelonBtn>
                <WatermelonBtn title="참외" onWatermelon={this.addWatermelon}></WatermelonBtn>
                <WatermelonBtn title="멜론" onWatermelon={this.addWatermelon}></WatermelonBtn>
                <WatermelonBtn title="게임" onWatermelon={this.addWatermelon}></WatermelonBtn>
                <span>{this.state.fruitArr}</span>
            </div>
            )
        }
}

export default Counter;