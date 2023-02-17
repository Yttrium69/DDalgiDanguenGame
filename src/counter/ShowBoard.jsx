import React, { Component } from 'react';

class ShowBoard extends Component {
    
    isCorrectFruit(arr){
        let inspector=false;
        switch(arr.length){
            case 0:
                inspector=true;
                break;
            case 1:
                if(arr[0]==="딸기") inspector=true;
                break;
            case 2:
                if(arr[1]==="당근") inspector=true;
                break;
            case 3:
                if(arr[2]==="수박") inspector=true;
                break;
            case 4:
                if(arr[3]==="참외") inspector=true;
                break;
            case 5:
                if(arr[4]==="멜론") inspector=true;
                break;
            case 6:
                if(arr[5]==="게임") {inspector=false;   }
                break;
            default: inspector=false;
        }
        return inspector;
    }

    render() {
        let fArr=this.props.fruitArr;
        let imgArr=[];

        if(this.isCorrectFruit(fArr)===false)
        {   if(fArr[fArr.length-1]=="게임"){
            for(let i=0; i<fArr.length;i++){
                imgArr.push(this.props.changeToImg(fArr[i], "_green"));
            }}
            else{for(let i=0; i<fArr.length;i++){
            imgArr.push(this.props.changeToImg(fArr[i], "_red"));
            }}
            setTimeout(
                ()=>{this.props.clearArr();}, 50)
        }
        else{
            for(let i=0; i<fArr.length-1;i++){
                imgArr.push(this.props.changeToImg(fArr[i], ""));
                }
            if(fArr.length){imgArr.push(this.props.changeToImg(fArr[fArr.length-1], "_green"));}
                
        }


        return (
            <div className="ShowBoard_div">
                <span>{imgArr}</span>
            </div>
        );
    }
}

export default ShowBoard;