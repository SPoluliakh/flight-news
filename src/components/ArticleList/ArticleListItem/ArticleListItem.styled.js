import styled from 'styled-components';

export const Items = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3 - 30px);
  margin-right: 30px;
  margin-bottom: 30px;
`;

export const Wrap = styled.div`
  flex-grow: 1;
`;

export const Img = styled.img`
  width: 460px;
  height: 360px;
`;
