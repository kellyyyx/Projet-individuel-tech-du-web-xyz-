import type { Tweet } from "../types/Tweet";
import React from 'react';
import "../App.css";

type TweetPreviewProps = {
  tweet: Tweet;
};

export const TweetPreview =  ({ tweet }: TweetPreviewProps): React.ReactNode => {
    const formattedDate = new Date(tweet.createdAt).toLocaleDateString('fr-FR');

    return (
        <article>
            <div>
                <strong>{tweet.authorName}</strong>

                <span>@{tweet.authorHandle}</span>

                <span> - {formattedDate}</span>

            </div>
            {tweet.image && (
                <img
                    src = {tweet.image.url}
                    alt = {tweet.image.alt}
                    className="tweetImage"
                />

            )}

            <p>{tweet.content}</p>
        </article>
    );
};
