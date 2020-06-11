import React, {Component} from 'react'
import NewBoxForm from './NewBoxForm'
import { v1 as uuid } from 'uuid';
class BoxList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes: [
                {height: '', width: '', color: ''}
            ]
        }
        this.addBox = this.addBox.bind(this)
    }
    addBox(box) {
        this.setState(state => ({
            boxes: [...state.boxes, box]
        }))
    }
    render() {
        let boxes = this.state.boxes.map(box => (
           <li key={uuid()} style={{width: `${box.width}px`, height: `${box.height}px`, backgroundColor: box.color}}></li>
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
