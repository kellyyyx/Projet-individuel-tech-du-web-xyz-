import React from 'react';
import { Link } from 'react-router-dom';

import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const NotFoundPage = (): React.ReactNode => {
    //le titre est "page introuvable" ici, on le place avant le return puisque son utilisation doit être inconditionnelle
    useDocumentTitle("Page introuvable");
    return (
        <main>
            <h1> Page introuvable </h1>
            <Link to="/"> Retour à l'accueil </Link>
        </main>
    );
};

export default NotFoundPage;

