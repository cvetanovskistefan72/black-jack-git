import React, { Component } from 'react'
import Buttons from './Buttons'
import Player from './Player';
import Dealer from './Dealer';
 

class Game extends Component {
    state={
        dealer:[],
        player:[],
        suma:0,
        sumaDealer:0,
        game:null
    }
     
     
    handlePlay=(play)=>{
         
        if(play=="play"){
            this.setState({
                game:play
            })
             
            let x=Math.random()*10;
            
             x=Math.ceil(x);
              
            this.setState({
                dealer: this.state.dealer.concat(x),
                 
            })
            this.state.sumaDealer=x;
             x=Math.random()*10;
             let y=Math.random()*10;
             x=Math.ceil(x);
             y=Math.ceil(x);
             this.state.suma=x+y; 
             this.setState({
                player: this.state.player.concat(x).concat(y),
                 
            })
            
             
        }
        if(play=="stop"){
            this.setState({
                player: []
                 
            })
            this.setState({
                dealer: []
                 
            })
        }
        if(play=="hit"){
             
            let x=Math.random()*10;
            x=Math.ceil(x);
            this.setState({
                player: this.state.player.concat(x),
                
            })
             
            this.state.suma=this.state.suma+x
             console.log(this.state.suma)
           if(this.state.suma>21){
                 setTimeout(()=>{
                    this.setState({
                        dealer:[],
                        player:[]
                    })
                    alert("Sum of Player cards is over 21. Dealer wins");
                    window.location.reload();
                 },500)
                
           }
           
        }
        if(play=="stay"){
            let numbers=[]
            for(let i=0;i<10;i++){
                let x=Math.random()*10;
                x=Math.ceil(x);
              
            this.state.sumaDealer=this.state.sumaDealer+x;
            numbers.push(x)
            if(this.state.sumaDealer>21){
                break;
            }
            if(this.state.sumaDealer>this.state.suma){
                break;
            }
                             
            }
            console.log(this.state.sumaDealer)
            
            console.log(numbers)
            setTimeout(()=>{
                this.setState({
                dealer:this.state.dealer.concat(numbers.map((number)=>{
                
                    return number
                }))
            })
            },1000)
            
            setTimeout(()=>{
                if(this.state.sumaDealer>this.state.suma&&this.state.sumaDealer<=21){
                alert("Dealer wins")
                }
                else{
                alert("Player wins")
                }
            },2000)
            setTimeout(()=>{
                window.location.reload();
            },3000)
             
        }
        
    }

    render() {
        return (
            <div id="game-div" className="container">
                 <Buttons     handlePlay={this.handlePlay}  />
                 <br></br>
                            
                 <br></br>
                 <Player suma={this.state.suma}  game={this.state.game}   player={this.state.player}/>
                 <br></br>
                <Dealer  sumaDealer={this.state.sumaDealer}  game={this.state.game}   dealer={this.state.dealer}/>
            </div>
        )
    }
}
export default   Game;