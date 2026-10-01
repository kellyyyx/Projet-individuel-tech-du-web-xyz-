import React from 'react';
import { tweets } from '../data/tweets';
import { TweetList } from '../components/TweetsList';


export const TweetsMasterPage = (): React.ReactNode => {
    return (
        <main>
            <h1>Fil d'actualité</h1>
            <TweetList tweets={tweets}/>
        </main>
    );
};

export default TweetsMasterPage;