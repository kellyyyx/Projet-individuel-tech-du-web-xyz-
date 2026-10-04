import React, { useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import { TweetsContext } from '../contexts/TweetsContext';
import { TweetPreview } from '../components/TweetPreview';
import { TweetList } from '../components/TweetsList';

import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const TweetDetailsPage = (): React.ReactNode => {
    //récupération de l'id avec useParams
    const { id } = useParams<{ id: string }>();
    
    const { tweets, toggleLike } = useContext(TweetsContext)!;

    // Recherche du tweet avec son id 
    const tweetPrincipal = tweets.find((tweet) => tweet.id === id);

    //le titre de la page est soit Tweet de <auteur> si on a trouvé le tweet sinon on mets Tweet introuvable si on l'a pas trouvé
    const titrePage = tweetPrincipal ? `Tweet de ${tweetPrincipal.authorName}`: "Tweet introuvable";

    useDocumentTitle(titrePage);

    if (!tweetPrincipal) {
        return (
            <main>
                <p> Ce tweet n'existe pas </p>
                <Link to="/"> Retour à l'accueil </Link>
            </main>
        );
    }

    // Recherche des réponses du tweet
    const reponses = tweets.filter((tweet) => tweet.parentId === id);

    return (
        <main>
            <TweetPreview tweet={tweetPrincipal} linkToDetail={false} onToggleLike={toggleLike} />

            <h3> Réponse : </h3>

            {reponses.length > 0 ? (
                <TweetList tweets={reponses}
                onToggleLike={toggleLike} />
            ) : (
                <p> Aucune réponse pour ce tweet </p>
            )}    
        </main>
    );
}; 

