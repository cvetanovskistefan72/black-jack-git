import React, { Component } from 'react'

export default class Dealer extends Component {
    render() {
        return (
            <div>
             {this.props.game?<p className="score">Dealer score: {this.props.sumaDealer}</p>:null}
                 {this.props.dealer.map((number,i)=>{
                    let number2=Math.floor(Math.random()*3)+1;
                    if(number!=10){
                        return <img  key={i}className="cards" src={require('../img/'+number+".jpg")} />
                    }else{
                        return <img  key={i}className="cards" src={require('../img/'+number+"."+number2+".jpg")} />
                    }
                 })}
            </div>
        )
    }
}
