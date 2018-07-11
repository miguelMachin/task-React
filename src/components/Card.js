import React, { Component } from 'react';


class Card extends Component {
  
    handlerRemoveTask(index){
        console.log(index);
        this.props.onDeleteTask(index);
    }
    render() {
        return (
            <div className="col-md-4">
                <div className="card mt-4">
                    <div className="card-header">
                        <h3>{this.props.task.title}</h3>
                        <span className="badge badge-pill badge-danger ml-2">
                            {this.props.task.priority}
                        </span>
                    </div>
                    <div className="card-body">
                        <h3>{this.props.task.description}</h3>
                        <p><mark>{this.props.task.author}</mark></p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger mb-2" onClick={(e)=> this.handlerRemoveTask(this.props.task.id)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;