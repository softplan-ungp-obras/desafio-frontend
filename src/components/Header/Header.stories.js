import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './index';

const stories = storiesOf('components/Header', module);
stories.add(`Header`, () => <Header />);
