import React, { Component } from 'react';

class FormTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            description: '',
            priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.onAddTask(this.state);
        console.log("enviado");
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h3>Add new Task</h3>
                </div>
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="from-group mt-1">
                        <input type="text"
                            name="title"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Title"
                        />
                    </div>
                    <div className="from-group mt-4">
                        <input type="text"
                            name="author"
                            className="form-control"
                            placeholder="Author"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="from-group mt-4">
                        <input type="text"
                            name="description"
                            className="form-control"
                            placeholder="Description"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="from-group mt-4">
                        <select className="form-control" name="priority"
                            onChange={this.handleInput}>
                            <option value="low">low</option>
                            <option value="medium">medium</option>
                            <option value="high">high</option>
                        </select>
                    </div>
                    <input type="submit" className="btn btn-primary mt-2" value="Save" />
                </form>
            </div>
        )
    }
}

export default FormTask;
