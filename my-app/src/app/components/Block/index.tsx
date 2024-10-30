// TodoItem의 margin을 조절하기 위한 컴포넌트

import styled from 'styled-components';

export default styled.div<{
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  // 네개 다 props로 값이 안올 수 있기 때문에 '?'로 표시
}>`
  margin-top: ${props => props.marginTop || 0};
  margin-bottom: ${props => props.marginBottom || 0};
  margin-left: ${props => props.marginLeft || 0};
  margin-right: ${props => props.marginRight || 0};
`;
