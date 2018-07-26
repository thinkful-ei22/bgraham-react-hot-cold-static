import React, { Component } from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends Component {
    constructor (props){
        super (props);
        this.state = {
            guesses: [],
            userGuess: null,
            generatedAnswer: Math.floor(Math.random() * 101),
            feedback: "Make your guess!",
            modal: false
        }
    }
    
addGuess(num){

    this.setState({
    userGuess: Number(num), 
    guesses: [...this.state.guesses, Number(num)]
    });     

    const diff = Math.abs(num-this.state.generatedAnswer);

    if (diff >=50){
        this.setState({
            feedback: "Ice Cold"
        });
    }
    else if (diff >=30){
        this.setState({
            feedback: "Cold"
        });
    }
else if (diff >=10){
    this.setState({
        feedback: "Warm"
    });
}
    else if (diff >= 5){
        this.setState({
            feedback: "Hot"
        });
}

else if (diff >= 1){
    this.setState({
        feedback: "VERY Hot"
    });
}
else {
    this.setState({
        feedback: "CORRECT!!"
    });
}
    
}


newGame(){
    this.setState({
        guesses: [],
        userGuess: null,
        generatedAnswer: Math.floor(Math.random() * 101),
        feedback: "Make your guess!"
    });
}

showModal(){
    this.setState({
        modal: !this.state.modal
    })
}


    render(){
        
        return (
            <div>
                <Header newGame={() => this.newGame()} InfoModal={this.state.modal} toggleModal={() => this.showModal()} />
                <GuessSection feedback={this.state.feedback}  newGuess={(num) => this.addGuess(num)}  />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
    
}

