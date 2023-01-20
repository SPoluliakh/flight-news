import styled from 'styled-components';
import { Card, CardMedia } from '@mui/material';

export const Wrap = styled(Card)`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${p => p.theme.space[2]}px;
`;

export const InnerWrap = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 90%;
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Image = styled(CardMedia)`
  height: 240px;
`;
