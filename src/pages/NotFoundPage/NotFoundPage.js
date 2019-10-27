import React from 'react';
import { Link } from 'react-router-dom';

import { NotFoundWrapper, linkStyles } from './NotFoundPage.styles';

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <p>
        Página não encontrada{' '}
        <Link style={{ ...linkStyles }} to="/">
          Voltar para página inicial
        </Link>
      </p>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
