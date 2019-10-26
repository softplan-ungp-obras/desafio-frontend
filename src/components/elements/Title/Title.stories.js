import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './index';
import GlobalStyle from '~/styles/global';

const Titles = [
  { id: 1, level: 'headline', as: '1' },
  { id: 2, level: 'title', as: '2' },
  { id: 3, level: 'subtitle', as: '3' },
  { id: 4, level: 'label', as: '4' },
];

const stories = storiesOf('elements', module);
stories.add(`Title`, () => (
  <>
    <GlobalStyle />
    {Titles.map(item => (
      <Title key={item.id} as={item.as} level={item.level}>
        Titulo {item.level}
      </Title>
    ))}
  </>
));
