import React, {Component} from 'react'
import NewBoxForm from './NewBoxForm'
import { v1 as uuid } from 'uuid';
class BoxList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes: [
                {height: '', width: '', color: '', id:''}
            ]
        }
        this.addBox = this.addBox.bind(this)
        this.deleteBox = this.deleteBox.bind(this)
    }
    deleteBox(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }
    addBox(box) {
        this.setState(state => ({
            boxes: [...state.boxes, box]
        }))
    }
    render() {
        let boxes = this.state.boxes.map(box => (
            <div>
                <li id={box.id} key={box.id} style={{width: `${box.width}px`, height: `${box.height}px`, backgroundColor: box.color}}></li>
                <button onClick={() => this.deleteBox(box.id)}>DELETE ME</button>
            </div>
        ));
        return (
            <div>
                <ul>
                    {boxes}
                </ul>
                <NewBoxForm addBox={this.addBox}/>
            </div>

        )
    }
}

export default BoxList
