import React, { Component } from 'react';
import UpBtn from './UpBtn';
import DownBtn from './DownBtn';
import CntInit from './CntInit';
import WatermelonBtn from './WatermelonBtn';
import ShowBoard from './ShowBoard';
import Reset from './Reset';
import styled from 'styled-components';



class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            cnt:1,
            fruitArr:[]
        };
        this.increase=this.increase.bind(this);
        this.decrease=this.decrease.bind(this);
        this.cntInit=this.cntInit.bind(this);
        this.addWatermelon=this.addWatermelon.bind(this);
        this.clearArr=this.clearArr.bind(this);
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
            const fruitArr=state.fruitArr.concat(title);
            return {fruitArr};
        })
    }

    clearArr(){
        setTimeout(
            ()=>this.setState(state=>{
            const fruitArr=[];
            return {fruitArr};
        }), 150)
    }
    changeToImg(title, color){
        // color="_red"
        let tmp=<div></div>;
        const imgPath="img/"+title+color+".png";
        tmp=<img alt={title} src={imgPath}></img>
        return tmp;
    }

        render() {
            return(
            <div>
                <h1>딸기당근수박참외메론게임</h1>
                <ShowBoard 
                changeToImg={this.changeToImg}
                fruitArr={this.state.fruitArr}
                clearArr={this.clearArr}
                ></ShowBoard>
                    <div class="Counter_btnArea">
                        <WatermelonBtn changeToImg={this.changeToImg} title="딸기" onWatermelon={this.addWatermelon}></WatermelonBtn>
                        <WatermelonBtn changeToImg={this.changeToImg} title="수박" onWatermelon={this.addWatermelon}></WatermelonBtn>
                        <WatermelonBtn changeToImg={this.changeToImg} title="당근" onWatermelon={this.addWatermelon}></WatermelonBtn>
                        <WatermelonBtn changeToImg={this.changeToImg} title="멜론" onWatermelon={this.addWatermelon}></WatermelonBtn>
                        <WatermelonBtn changeToImg={this.changeToImg} title="참외" onWatermelon={this.addWatermelon}></WatermelonBtn>
                        <WatermelonBtn changeToImg={this.changeToImg} title="게임" onWatermelon={this.addWatermelon}></WatermelonBtn>
                    </div>
            </div>
            )
        }
}

export default Counter;