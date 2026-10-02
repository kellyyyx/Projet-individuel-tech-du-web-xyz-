import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { tweets } from '../data/tweets';
import { TweetPreview } from '../components/TweetPreview';
import { TweetList } from '../components/TweetsList';


export const TweetDetailsPage = (): React.ReactNode => {
    //récupération de l'id avec useParams
    const { id } = useParams<{ id: string }>();

    // Recherche du tweet avec son id 
    const tweetPrincipal = tweets.find((tweet) => tweet.id === id);

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
            <TweetPreview tweet={tweetPrincipal} linkToDetail={false} />

            <h3> Réponse : </h3>

            {reponses.length > 0 ? (
                <TweetList tweets={reponses} />
            ) : (
                <p> Aucune réponse pour ce tweet </p>
            )}    
        </main>
    );
}; 

