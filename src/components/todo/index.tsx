import {Checkbox, CheckedTodo, DeleteButtonTodo, TextTodo, TodoBlock} from "./styled";
import React, {MouseEvent} from "react";

type PropsTodoItem = {
    id: string,
    value: string,
    delete: (ev: MouseEvent<HTMLButtonElement>) => void
    completed: (id: string) => void
    key: string,
    status: string
}

const TodoItem: React.FC<PropsTodoItem> = ({id, value, status, ...otherProps}) => {
    const changeStatusTodo = () => {
        otherProps.completed(id)
    }

    return (
        <TodoBlock id={id} key={otherProps.key}>
            <Checkbox type="checkbox" id={id} checked={status === 'completed'}/>
            <CheckedTodo htmlFor={id} onClick={changeStatusTodo}/>
            <TextTodo status={status}>{value}</TextTodo>
            <DeleteButtonTodo id={id} onClick={otherProps.delete}/>
        </TodoBlock>)
}
export default TodoItem