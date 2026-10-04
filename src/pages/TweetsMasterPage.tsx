import React, { useContext} from 'react';
import { TweetsContext } from '../contexts/TweetsContext';
import { TweetList } from '../components/TweetsList';

import { TweetForm } from '../components/TweetForm';


export const TweetsMasterPage = (): React.ReactNode => {

    const { tweets, addTweet, toggleLike } = useContext(TweetsContext)!;
    const TweetsPremierNiveau = tweets.filter(tweet => !tweet.parentId);

    //afin de pouvoir compter le nombre total de likes des tweets du fil, on va prendre le total qui commence à 0 et y rajouter le nombre de likes de chaque tweets
    const totalLikes = TweetsPremierNiveau.reduce((total, tweet) => total + tweet.likes, 0);

    return (
        <main>
            <h1>Fil d'actualité</h1>
            <p> Total des J'aime des tweets du fil : {totalLikes}</p>
            <TweetForm onSubmit={addTweet} />
            <TweetList tweets={TweetsPremierNiveau} onToggleLike={toggleLike}/>
        </main>
    );
};

export default TweetsMasterPage;