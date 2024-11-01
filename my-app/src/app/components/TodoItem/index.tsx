import React from 'react';
import styled from 'styled-components';
import Block from '../Block';
import CircleButton from '../Button/CircleButton';
import Checkbox from '../Checkbox';
import TodoInput from '../TodoInput';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em; //em은 단위
  border-bottom: 1px solid #eee;

  & > .delete-button {
    display: none;
  }

  &:hover {
    padding: 11.5px 15px 11.5px 25px;
    & > .delete-button {
      display: flex;
    }
  }
`;

const TodoContent = styled.span<{ checked: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-work;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  // 여기까지 내용이 많으면 다음줄로 넘겨주는 코드
  cursor: text;
  text-decoration: ${props => (props.checked ? 'line-through' : 'initial')};
  color: ${props => (props.checked ? '#aaa' : '#212121')};
`;

export default function TodoItem({ todo }: { todo: ITodoItem }) {
  return (
    <Box>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <Checkbox checked={todo.completed} />
        <Block marginLeft="10px" />
        {todo.editing ? (
          <TodoInput />
        ) : (
          <TodoContent checked={todo.completed}>{todo.content}</TodoContent>
        )}
      </div>
      <CircleButton
        className="delete-button"
        onClick={() => {}}
        Icon={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        )}
      />
    </Box>
  );
}
