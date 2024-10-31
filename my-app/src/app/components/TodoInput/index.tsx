import React from 'react';
import styled from 'styled-components';

const Box = styled.div<{ isEditing?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${props => (props.isEditing ? '5px 0px' : '15px 25px')};
  width: 100%;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0; //Input 태그에 focus 됐을 때
`;

export default function TodoInput({
  setTodoList,
  isEditing,
  editContent,
  editModeTodo,
  editTodo,
}: {
  setTodoList?: (todo: ITodoItem) => void;
  isEditing?: boolean;
  editContent?: string;
  editModeTodo?: (content: string) => void;
  editTodo?: (content: string) => void;
}) {
  const [content, setContent] = React.useState<string>('');
  return (
    <Box isEditing={isEditing}>
      <Input
        placeholder="할 일을 입력해 주세요."
        value={content}
        // onBlur -> 입력 도중 다른 컴포넌트 및 창을 클릭하여 입력하는 상태가 사라지게 될 경우 발생하는 이벤트
        onBlur={e => {
          if (e.currentTarget === e.target) {
            editTodo && editTodo(content);
          }
        }}
        onChange={e => setContent(e.target.value)}
        onKeyPress={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
          // setTodoList가 존재할 때만 실행
          setTodoList &&
            setTodoList({
              id: '0',
              content: content,
              completed: false,
              editing: false,
            });
          setContent('');
        }}
      />
    </Box>
  );
}
