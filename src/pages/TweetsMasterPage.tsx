import React, { useContext} from 'react';
import { TweetsContext } from '../contexts/TweetsContext';
import { TweetList } from '../components/TweetsList';


export const TweetsMasterPage = (): React.ReactNode => {

    const { tweets } = useContext(TweetsContext)!;
    const TweetsPremierNiveau = tweets.filter(tweet => !tweet.parentId);

    return (
        <main>
            <h1>Fil d'actualité</h1>
            <TweetList tweets={TweetsPremierNiveau}/>
        </main>
    );
};

export default TweetsMasterPage;