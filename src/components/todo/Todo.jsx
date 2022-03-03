import React from 'react';
import css from './Todo.module.css'
import book from '../../img/book.png'
import trash from '../../img/trash.png'


class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            todoValue: this.props.text
        }
    }

    handleChange(e) {
        this.setState({ todoValue: e.target.value })
    }


    submit(e) {
        e.preventDefault();// предатровщение обновления сайта
        this.props.onEdit(this.props.id, this.state.todoValue)
        this.setState({isEdit:false})
    }
    
    render() {
        return (
            <div className={css.wrapper}>
                {
                    this.state.isEdit
                        ? <form onSubmit={(e)=> this.submit(e)} className="input-group ">
                            <input
                                required
                                value={this.state.todoValue}
                                onChange={(e)=> this.handleChange(e)}
                                type="text"
                                className="form-control"
                                input
                            />
                            <button className="btn btn-primary" type="submit" id="button-addon2">Submit</button>
                        </form>
                        : < label className={css.todoCheck}>
                            <input
                                type="checkbox"
                                checked={this.props.status}
                                onChange={() => this.props.onCheck(this.props.id)}
                            />
                            <p className={this.props.status ? css.done : ""} >{this.props.text}</p>
                        </label>
                }


                <div className={css.buttons}>
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => this.setState({ isEdit: !this.state.isEdit })}>
                        <img src={book} alt="" />
                    </button>
                    <button type="button"
                        className="btn btn-danger"
                        onClick={() => this.props.onDelete(this.props.id)}>
                        <img src={trash} alt="" />
                    </button>

                </div>

            </div>

        )
    }
}

export default Todo;

