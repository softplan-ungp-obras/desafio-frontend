import React from 'react';
import Lottie from 'lottie-react-web';
import animation from './loading.json';

export default function Loading() {
  return (
    <Lottie
      options={{
        animationData: animation,
      }}
    />
  );
}
