import React from 'react';
import Todo from '../todo/Todo.jsx'



class TodoLists extends React.Component {


    render() {
       

        const arr = this.props.todos.map((todo) => {
            return <Todo 
            key={todo.id}
            id={todo.id}
            text={todo.title}
            status={todo.status}
            onEdit={this.props.onEdit}
            onDelete={this.props.onDelete}
            onCheck={this.props.onCheck}
             />
        })
        return (
            <div className='todo_wrapper'>
                {
                    arr.length ? arr : <h4 className='text-center mt-3'>Please add Todo :(</h4>
                }



            </div>

        )
    }
}

export default TodoLists;