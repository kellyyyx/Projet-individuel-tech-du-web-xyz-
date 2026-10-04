import React, { useContext} from 'react';
import { TweetsContext } from '../contexts/TweetsContext';
import { TweetList } from '../components/TweetsList';

import { TweetForm } from '../components/TweetForm';


export const TweetsMasterPage = (): React.ReactNode => {

    const { tweets, addTweet } = useContext(TweetsContext)!;
    const TweetsPremierNiveau = tweets.filter(tweet => !tweet.parentId);

    return (
        <main>
            <h1>Fil d'actualité</h1>
            <TweetForm onSubmit={addTweet} />
            <TweetList tweets={TweetsPremierNiveau}/>
        </main>
    );
};

export default TweetsMasterPage;