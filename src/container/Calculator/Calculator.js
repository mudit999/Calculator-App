import React, {Component} from 'react';
import classes from './Calculator.module.css';
import Button from '../../component/UI/Button/Button';
import * as math from 'mathjs';


class CalculatorSec extends Component{

    state = {
        input : "",
        output : ""
    }

    clearBtnHandler = () => {
        this.setState({
            input : "",
            output : ""
        })
    }

    addToInputHandler = val => {
        this.setState({ input: this.state.input + val })
    };

    equalBtnHandler = () => {
        this.setState({ output: math.evaluate(this.state.input) })
    };

    
    render(){
        return (
            <div className = {classes.Calculator_grid}>
                <div className = {classes.output}>
                    <div className = {classes.previous_operand}>
                        {this.state.input}
                    </div>
                    <div className = {classes.current_operand}>
                        {this.state.output}
                    </div>
                </div>
                <button 
                    className = {classes.span_three}
                    onClick = {this.clearBtnHandler}>AC</button>
                <Button clicked = {this.addToInputHandler}>/</Button>
                <Button clicked = {this.addToInputHandler}>1</Button>
                <Button clicked = {this.addToInputHandler}>2</Button>
                <Button clicked = {this.addToInputHandler}>3</Button>
                <Button clicked = {this.addToInputHandler}>*</Button>
                <Button clicked = {this.addToInputHandler}>4</Button>
                <Button clicked = {this.addToInputHandler}>5</Button>
                <Button clicked = {this.addToInputHandler}>6</Button>
                <Button clicked = {this.addToInputHandler}>+</Button>
                <Button clicked = {this.addToInputHandler}>7</Button>
                <Button clicked = {this.addToInputHandler}>8</Button>
                <Button clicked = {this.addToInputHandler}>9</Button>
                <Button clicked = {this.addToInputHandler}>-</Button>
                <Button clicked = {this.addToInputHandler}>.</Button>
                <Button clicked = {this.addToInputHandler}>0</Button>
                <button 
                    className = {classes.span_two}
                    onClick = {this.equalBtnHandler}>=</button>
            </div>
        )
    }
}

export default CalculatorSec;