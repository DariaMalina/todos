import TodoItem from "../todo";
import React, { ChangeEvent, useState, MouseEvent, useCallback } from "react";
import {
  BlockAddTodos,
  ButtonAddTodo,
  ButtonChoiceList,
  ButtonClearList,
  EntryField,
  InputChoiceList,
  ListFooter,
  ListContainer,
  ListRadio,
  ListTitle,
  ListTodo,
} from "./styled";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../../types/todo";

enum VARIANT {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}

const List = () => {
  console.log("render list");
  const [entryField, setEntryField] = useState("");
  const [todosType, setTodosType] = useState<VARIANT | string>("all");
  const [allListTodos, setAllListTodos] = useState<Todo[]>([]);
  const variantList = ["all", "active", "completed"];

  const filterList = allListTodos.filter((el) => {
    if (todosType === VARIANT.ACTIVE || todosType === VARIANT.COMPLETED) {
      return el.type === todosType;
    }
    return el;
  });

  const changeTodoType = useCallback((ev: MouseEvent<HTMLInputElement>) => {
    setTodosType((ev.target as HTMLInputElement).id);
  }, []);

  const changeEntryField = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setEntryField(ev.target.value);
  }, []);

  const addNewTodo = useCallback(() => {
    setEntryField("");
    setAllListTodos([
      ...allListTodos,
      {
        value: entryField,
        type: VARIANT.ACTIVE,
        id: uuidv4(),
      },
    ]);
  }, [allListTodos, entryField]);

  const deleteTodo = useCallback(
    (ev: MouseEvent<HTMLButtonElement>) => {
      setAllListTodos([
        ...allListTodos.filter(
          (todo) => todo.id !== (ev.target as HTMLInputElement).id
        ),
      ]);
    },
    [allListTodos]
  );

  const deleteListCompletedTodo = useCallback(() => {
    setAllListTodos([
      ...allListTodos.filter((todo) => todo.type !== VARIANT.COMPLETED),
    ]);
    setTodosType(VARIANT.ALL);
  }, [allListTodos]);

  const completedTodo = useCallback(
    (id: string) => {
      const newList = allListTodos.map((el) => {
        if (el.id === id) {
          return {
            id: el.id,
            value: el.value,
            type:
              el.type === VARIANT.ACTIVE ? VARIANT.COMPLETED : VARIANT.ACTIVE,
          };
        } else {
          return el;
        }
      });
      setAllListTodos([...newList]);
    },
    [allListTodos]
  );

  return (
    <ListContainer key="list">
      <ListTitle key="todos">TODOS</ListTitle>
      <BlockAddTodos key="BlockAddTodos">
        <EntryField
          placeholder="Enter text to create To-Do"
          onChange={changeEntryField}
          value={entryField}
        />
        <ButtonAddTodo onClick={addNewTodo} />
      </BlockAddTodos>

      <ListTodo key="listTodo">
        {filterList.map(({ id, value, type }: Todo) => {
          return (
            <TodoItem
              id={id}
              value={value}
              delete={deleteTodo}
              completed={completedTodo}
              key={id}
              status={type}
            />
          );
        })}
      </ListTodo>

      <ListFooter key="listFooter">
        <ListRadio>
          {variantList.map((el) => {
            return (
              <div key={el}>
                <InputChoiceList
                  type="radio"
                  name="list"
                  id={el}
                  onClick={changeTodoType}
                />
                <ButtonChoiceList htmlFor={el} status={el === todosType}>
                  {el}
                </ButtonChoiceList>
              </div>
            );
          })}
        </ListRadio>
        <ButtonClearList onClick={deleteListCompletedTodo}>
          Clear Completed
        </ButtonClearList>
      </ListFooter>
    </ListContainer>
  );
};
export default React.memo(List);
