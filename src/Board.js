import React, {Component} from 'react';
import Block from './Block'
import './Board.css';
class Board extends Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: ["purple", "magenta", "lilac", "pink"]
    }
    render() {
        const blocks = Array.from({length: this.props.numBoxes}).map(
            () => <Block colors={this.props.allColors}/>)

        return (
            <div className="Board">{blocks}</div>
        )
    }
}
export default Board;
