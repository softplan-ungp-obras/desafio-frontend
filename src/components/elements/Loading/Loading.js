import React from 'react';
import Lottie from 'lottie-react-web';
import animation from './loading.json';

export default function Loading() {
  return (
    <Lottie
      width="200px"
      height="200px"
      options={{
        animationData: animation,
        loop: true,
      }}
    />
  );
}
