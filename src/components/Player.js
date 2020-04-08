import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div>
                {!this.props.game?<h1 className="center click-to-play">Click Play</h1>:null}
                {this.props.game?<p className="score">Player score: {this.props.suma}</p>:null}
                {this.props.player  .map((number,i)=>{
                    let number2=Math.floor(Math.random()*3)+1;
                    if(number!=10){
                        return <img  key={i}className="cards" src={require('../img/'+number+".jpg")} />
                    }else{
                        return <img  key={i}className="cards" src={require('../img/'+number+"."+number2+".jpg")} />
                    }
                     
                 })
          
                 }
               
            </div>
        )
    }
}
