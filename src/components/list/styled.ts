import styled from "styled-components";

export const ListContainer = styled.div`
  box-shadow: 0 0 10px 0 gainsboro;
  margin: 10% auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gainsboro;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`
export const ListTitle = styled.h1`
  color: gainsboro;
  width: 100%;
  text-align: center;
`
export const ListFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  height: 100px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    width: 90%;
    height: 90px;
  }
`
export const EntryField = styled.input`
  width: 60%;
  height: 40px;
  border: none;
  border-bottom: 1px solid gainsboro;

  &::placeholder {
    font-style: italic;
  }

  &:focus {
    outline: none;
  }
`
export const BlockAddTodos = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ButtonAddTodo = styled.button`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: transparent url("https://www.svgrepo.com/show/257687/plus.svg") no-repeat center;
  background-size: 70% 100%;
  font-size: 20px;
  padding: 5px;
  border: 1px solid gainsboro;
  color: gainsboro;
  position: absolute;
  right: 20%;
  cursor: pointer;
  transition: 1s;

  &:hover {
    background: transparent url("https://www.svgrepo.com/show/92343/plus.svg") no-repeat center;
    background-size: 70% 100%;
    border: 1px solid #348bc6;
    color: white;
  }
`
export const ListTodo = styled.div`
  margin: 30px 0;
  box-shadow: 0 0 10px -2px rgb(182 182 182 / 60%);
  width: 100%;
  max-height: 400px;
  overflow: scroll;
`
export const ListRadio = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: transparent;
  width: 100%;
  height: 50px;
  border-radius: 50px;
  box-shadow: 0.5px 0.5px 4px 0 rgba(128, 128, 128, 0.5);
  margin-bottom: 10px;
`
export const ButtonChoiceList = styled.label<{ status: boolean }>`
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.status ? '#cee8fa' : 'transparent'};
  width: 90px;
  height: 40px;
  text-align: center;
  border-radius: 50px;
  overflow: hidden;
  transition: linear 0.3s;
  color: ${props => props.status ? '#2d527c' : '#6e6e6edd'};
`
export const InputChoiceList = styled.input`
  display: none;
  appearance: none;

  &:checked + label {
    background-color: #cee8fa;
    color: #2d527c;
    font-weight: 900;
    transition: 0.3s;
  }
`

export const ButtonClearList = styled.button`
  border: 1px solid gainsboro;
  border-radius: 50px;
  background: transparent;
  color: #adadad;
  cursor: pointer;
  box-shadow: 0.5px 0.5px 4px 0 rgba(128, 128, 128, 0.5);
  height: 40px;
  width: 120px;

  &:hover {
    background: red;
    text-align: center;
    color: white;
  }
`
