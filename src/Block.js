import React, {Component} from 'react';
import {choice} from './helpers'
import './Block.css';
class Block extends Component {
    constructor(props) {
        super(props);
        this.state = {color: choice(this.props.colors)};
        this.handleClick = this.handleClick.bind(this);
    }
    setColor() {
        let newColor = choice(this.props.colors)
        this.setState({color: newColor});
    }
    handleClick() {
        this.setColor()
    }
    render() {
        return (
                <div
                    className="Block"
                    style={{backgroundColor: this.state.color}}
                    onClick={this.handleClick}
                >

                </div>
        )
    }
}
export default Block;
