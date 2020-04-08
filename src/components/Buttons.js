import React, { Component } from 'react'

export default class Buttons extends Component {
    state={
        play:"",
         
        hit:"disabled",
        stay:"disabled"
    }

    playClick=()=>{
        this.props.handlePlay("play");
        this.setState({
            play:"disabled",
            hit:"enabled",
            stay:"enabled"
        })
    }
     
    hitClick=()=>{
        this.props.handlePlay("hit");
        
    }
    stayClick=()=>{
        this.props.handlePlay("stay");
        this.setState({
            play:"enabled",
            hit:"disabled",
            stay:"disabled"
            
        })
    }
    render() {
        return (
           <div>
            
            <div className="container center">
                <button className={"btn z-depth-0 blue "+this.state.play} onClick={this.playClick}>Play</button>
                 
                <button className={"btn z-depth-0 yellow "+this.state.hit} onClick={this.hitClick}>Hit</button>
                <button className={"btn z-depth-0 black white-text "+this.state.stay} onClick={this.stayClick}>Stay</button>
            </div>
           </div>
        )
    }
}
