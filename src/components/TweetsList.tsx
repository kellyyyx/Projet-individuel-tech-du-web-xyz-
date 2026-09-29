import type { Tweet } from "../types/Tweet";
import React from 'react';
import { TweetPreview } from "./TweetPreview";

type TweetsListProps = {
    tweets: Array<Tweet>;
};

export const TweetList = ({ tweets }: TweetsListProps): React.ReactNode => {
    return (
        <div className="tweetsList">
            {tweets.map((tweet) => (
                <TweetPreview key={tweet.id} tweet={tweet} />
            ))}
        </div>
    );
};