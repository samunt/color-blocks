import React, {Component} from 'react'
import { v1 as uuid } from 'uuid';
class NewBoxForm extends Component {
    constructor(props) {
        super(props)
        this.state = {width:'', height:'', color:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt) {
        evt.preventDefault()
        let newBox = {...this.state, id:uuid()}
        this.props.addBox(newBox)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="width">Width:</label>
                <input
                    type="text"
                    id="width"
                    name="width"
                    key={uuid()}
                    value={this.state.width}
                    onChange={this.handleChange}
                />
                <label htmlFor="height">Height:</label>
                <input
                    type="text"
                    id="height"
                    name="height"
                    key={uuid()}
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <label htmlFor="color">Color:</label>
                <input
                    type="text"
                    id="color"
                    name="color"
                    key={uuid()}
                    value={this.state.color}
                    onChange={this.handleChange}
                />
                <button>SUBMIT</button>
            </form>
        )
    }
}
export default NewBoxForm
