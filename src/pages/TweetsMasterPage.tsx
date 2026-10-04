import React, { useContext} from 'react';
import { TweetsContext } from '../contexts/TweetsContext';
import { TweetList } from '../components/TweetsList';

import { TweetForm } from '../components/TweetForm';

import { useDocumentTitle } from '../hooks/useDocumentTitle';


export const TweetsMasterPage = (): React.ReactNode => {

    //utilisation inconditionnelle avec le titre : Accueil comme demandé pour TweetsMasterPage
    useDocumentTitle("Accueil");

    const { tweets, addTweet, toggleLike } = useContext(TweetsContext)!;

    const TweetsPremierNiveau = tweets.filter(tweet => !tweet.parentId);

    //afin de pouvoir compter le nombre total de likes des tweets du fil, on va prendre le total qui commence à 0 et y rajouter le nombre de likes de chaque tweets
    const totalLikes = TweetsPremierNiveau.reduce((total, tweet) => total + tweet.likes, 0);

    return (
        <main>
            <h1>Fil d'actualité</h1>
            <p> {totalLikes} mentions j'aime</p>
            <TweetForm onSubmit={addTweet} />
            <TweetList tweets={TweetsPremierNiveau} onToggleLike={toggleLike}/>
        </main>
    );
};

export default TweetsMasterPage;