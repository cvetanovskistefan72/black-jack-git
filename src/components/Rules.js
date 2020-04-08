import React, { Component } from 'react'
  class Rules extends Component {
    render() {
        return (
            <div id="rules-div" className="green darken-3">
               <div className="container  grey-text text-lighten-3">
               <br></br>
                <h5 className="">RULES OF PLAY</h5>
                <p>Beat The Dealer. There are some misconceptions
                 about the objective of the game of blackjack but at the simplest level all you are trying to do is beat the dealer.</p>
                 <br></br>
                 <h5>How do you beat the dealer?</h5>
                 
                 <ol>
                     <li>By drawing a hand value that is higher than the dealer’s hand value</li>
                     <li>By the dealer drawing a hand value that goes over 21.</li>
                     <li>By drawing a hand value of 21 on your first two cards, when the dealer does not.</li>
                 </ol>
                 <br></br>
                 <h5>How do you lose to the dealer? </h5>
                 <ol>
                     <li>Your hand value exceeds 21.</li>
                     <li>The dealers hand has a greater value than yours at the end of the round</li>
                      
                 </ol>
                 <p>It’s also important to note, the other players’ hands at the table
                  have nothing to do with winning the game of Blackjack like they do in Poker games. For all practical purposes, it’s just you against
                  the dealer. Unskilled patrons of the game will try to convince you “it’s a team sport” but don’t be fooled.</p>
               </div>
            </div>
        )
    }
}
export default   Rules;