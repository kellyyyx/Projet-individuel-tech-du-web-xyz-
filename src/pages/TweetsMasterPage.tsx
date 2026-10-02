import React from 'react';
import { tweets } from '../data/tweets';
import { TweetList } from '../components/TweetsList';


export const TweetsMasterPage = (): React.ReactNode => {

    const TweetsPremierNiveau = tweets.filter(tweet => !tweet.parentId);

    return (
        <main>
            <h1>Fil d'actualité</h1>
            <TweetList tweets={TweetsPremierNiveau}/>
        </main>
    );
};

export default TweetsMasterPage;