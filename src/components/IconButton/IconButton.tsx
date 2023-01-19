import React from 'react';
import Ink from 'react-ink';

import * as Icons from '@assets/icons';

import { Container } from './IconButton.styles';

interface IconButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  icon: keyof typeof Icons;
  children?: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, ...rest }) => {
  const Icon = Icons[icon];

  return (
    <Container {...rest} data-testid="icon-button-container">
      <Icon />
      <Ink />
    </Container>
  );
};
