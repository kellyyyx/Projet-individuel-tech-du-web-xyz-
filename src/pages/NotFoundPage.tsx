import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = (): React.ReactNode => {
  return (
    <main>
        <h1> Page introuvable </h1>
        <Link to="/"> Retour à l'accueil </Link>
    </main>
  );
};

export default NotFoundPage;

