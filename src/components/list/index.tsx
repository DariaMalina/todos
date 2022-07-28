import TodoItem from "../todo";
import React, {ChangeEvent, useState, MouseEvent} from "react";
import {
    BlockAddTodos,
    ButtonAddTodo,
    ButtonChoiceList,
    ButtonClearList,
    EntryField, InputChoiceList,
    ListFooter,
    ListContainer, ListRadio,
    ListTitle,
    ListTodo
} from "./styled";
import {v4 as uuidv4} from 'uuid';
import {Todo} from "../../types/todo";

enum VARIANT {
    ALL = 'all',
    ACTIVE = 'active',
    COMPLETED = 'completed'
}


const List = () => {
    const [entryField, setEntryField] = useState('')
    const [todosType, setTodosType] = useState<VARIANT | string>('all')
    const [allListTodos, setAllListTodos] = useState<Todo[]>([])
    const variantList = ['all', 'active', 'completed']

    const filterList = allListTodos.filter(el => {
        if (todosType === VARIANT.ACTIVE || todosType === VARIANT.COMPLETED) {
            return el.type === todosType
        }
        return el
    })

    const changeTodoType = (ev: MouseEvent<HTMLInputElement>) => {
        setTodosType((ev.target as HTMLInputElement).value)
    }
    const changeEntryField = (ev: ChangeEvent<HTMLInputElement>) => {
        setEntryField(ev.target.value)
    }
    const addNewTodo = () => {
        setEntryField('')
        setAllListTodos([...allListTodos, {
            value: entryField,
            type: VARIANT.ACTIVE,
            id: uuidv4()
        }])
    }
    const deleteTodo = (ev: MouseEvent<HTMLButtonElement>) => {
        setAllListTodos([...allListTodos.filter(todo => todo.id !== (ev.target as HTMLInputElement).id)])
    }


    const deleteListCompletedTodo = () => {
        setAllListTodos([...allListTodos.filter(todo => todo.type !== VARIANT.COMPLETED)])
        setTodosType(VARIANT.ALL)
    }
    const completedTodo = (id: string) => {
        const newList = allListTodos.map(el => {

            if (el.id === id) {
                return {
                    id: el.id,
                    value: el.value,
                    type: el.type === VARIANT.ACTIVE ? VARIANT.COMPLETED : VARIANT.ACTIVE
                }
            } else {
                return el
            }

        })
        setAllListTodos([...newList])
    }


    return (<ListContainer>
        <ListTitle>TODOS</ListTitle>
        <BlockAddTodos>
            <EntryField placeholder='Enter text to create To-Do' onChange={changeEntryField} value={entryField}/>
            <ButtonAddTodo onClick={addNewTodo}/>
        </BlockAddTodos>

        <ListTodo>
            {filterList.map(({id, value, type}: Todo) => {
                return <TodoItem id={id} value={value} delete={deleteTodo} completed={completedTodo} key={id}
                                 status={type}/>
            })}
        </ListTodo>

        <ListFooter>
            <ListRadio>
                {variantList.map(el => {
                    return <>
                        <InputChoiceList type='radio' name='list' id={el} onClick={changeTodoType}/>
                        <ButtonChoiceList htmlFor={el} status={el === todosType}>{el}</ButtonChoiceList>
                    </>
                })}
            </ListRadio>
            <ButtonClearList onClick={deleteListCompletedTodo}>Clear Completed</ButtonClearList>
        </ListFooter>

    </ListContainer>)
}
export default List