import styled from 'styled-components';
import React from 'react';

const Circle = styled.div<{ checked?: boolean }>`
  width: 20px;
  height: 20px;
  min-width: 20px;
  border-radius: 50%;
  border: 2px solid ${props => (props.checked ? 'red' : '#eee')};
  padding: 3px;

  // '&'은 Circle 자신을 지칭
  // Circle 안에 있는 클래스가 'checkbox-icon'태그에 스타일을 적용한다.
  & > .checkbox-icon {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: red;
  }
`;

export default function Checkbox({
  checked,
  onClick,
}: {
  checked?: boolean;
  onClick?: () => void;
}) {
  return (
    <Circle checked={checked} onClick={onClick}>
      {checked ? <div className="checkbox-icon" /> : null}
    </Circle>
  );
}
