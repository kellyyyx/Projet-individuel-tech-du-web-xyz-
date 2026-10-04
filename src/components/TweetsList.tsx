import type { Tweet } from "../types/Tweet";
import React from 'react';
import { TweetPreview } from "./TweetPreview";

type TweetsListProps = {
    tweets: Array<Tweet>;
    onToggleLike: (id: string) => void;
};

export const TweetList = ({ tweets, onToggleLike }: TweetsListProps): React.ReactNode => {
    return (
        <div className="tweetsList">
            {tweets.map((tweet) => (
                <TweetPreview key={tweet.id} tweet={tweet} onToggleLike={onToggleLike} />
            ))}
        </div>
    );
};