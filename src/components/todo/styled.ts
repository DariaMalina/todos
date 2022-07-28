import styled from "styled-components";


export const TodoBlock = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid gainsboro;
  justify-content: space-between;
  align-items: center;

`
export const Checkbox = styled.input`
  display: none;

  &:checked + label:before {
    content: '';
    background: #fff;
    border-radius: 5px;
    border: 2px solid #ddd;
    display: inline-block;
    vertical-align: middle;
    width: 25px;
    height: 25px;
    text-align: center;
    margin: 2px;
  }

  &:checked + label:before {
    border: none;
    transition: 1s;
    background: transparent url("https://www.svgrepo.com/show/193779/checked-tick.svg") no-repeat;
  }
`
export const CheckedTodo = styled.label`
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  margin-left: 20px;
  border-radius: 50%;
  cursor: pointer;
`

export const TextTodo = styled.p<{status:string}>`
  text-decoration: ${props=>props.status==='completed'?'line-through':'none'};
  color: ${props=>props.status==='completed'?'#c5c5c5':'black'};
  width: 80%;
`
export const DeleteButtonTodo = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: transparent url("https://www.svgrepo.com/show/243868/delete.svg") no-repeat;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    background-image: url("https://www.svgrepo.com/show/244047/delete-trash.svg");
  }

`