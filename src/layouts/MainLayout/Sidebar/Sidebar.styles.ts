import styled from 'styled-components';

import { Theme } from '@styles/theme';

export const Container = styled.div`
  background: ${Theme.colors['color-secondary-darker-60']};

  padding: ${Theme.space['spacing-xs']};

  display: flex;
  flex-direction: column;
  align-items: center;
`;
