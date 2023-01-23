import TodoCard from "./TodoCard"

import classes from './components.module.css'

const TodoList = ({ todoList, editTodo, deleteTodo, completedOnChange }) => {

    return (
        <div className={classes.flexList}>
            {todoList.map((todo) =>
                <TodoCard todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} completedOnChange={completedOnChange}/>
            )}
        </div>
    )
}

export default TodoList