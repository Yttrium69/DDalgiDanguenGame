import React, { Component } from 'react';

class StateExample extends Component {
    constructor(props){//생성자를 이런 식으로 만드는 모양이다.
        //constructor 대신 class의 이름인 StateExample을 사용하면 오류가 난다.

        super(props);
        /*자식 객체에서 부모 객체를 참조하기 위해 사용한다.
        super()함수를 사용함으로써 이 component에서 this keyword를
        사용할 수 있다.*/

        this.state={
            loading: true,
            formData: 'no data'
        }
        /*this는 자신을 호출한 함수의 인스턴스를 담고 있다.
        여기서 this는 App.js에서 이 component를 만들었을 때 
        그 node를 가리킬 것이다. 
        
        StateExample component에 state 변수를 추가한다. 변수들을 {}로
        묶는다. state로 상태를 반영하는 변수를 두 개 선언하고 초기화까지 한다. 
        */



        this.handleData=this.handleData.bind(this);
        //bind가 뭔지는 다음에 배운다고 한다.

        setTimeout(this.handleData, 1000);
        //time.sleep()이랑 비슷해 보인다. 밀리초 단위인 것 같다.
        //1초를 기다린 후 handleDate를 실행한다.
    }

handleData(){
    const data='newData';
    const {formData}=this.state;
    //formData에 this 인스턴스의 state 변수들을 덮어씌운다.

    this.setState({
        loading: false,
        formData: data+formData
    })
    //이 인스턴스에서 setState()함수를 실행한다. argument로
    //loading과 formData를 전달한다. 전달하면서 각각 값을 바꿔 준다.

    console.log('loading값', this.state.loading);
}

    render() {

        return (
            <div>
                <span>로딩 중:{String(this.state.loading)}</span>
                <span>결과:{this.state.formData}</span>
            </div>
        );
    }
}

export default StateExample;