import { createContext } from "react";
import type { Tweet } from "../types/Tweet";

export type TweetsContextValue = {
    tweets:Array<Tweet>;
    //ajout de addTweet
    addTweet: (content: string) => void;
    //ajout de toggleLike 
    toggleLike: (id: string) => void;
}

export const TweetsContext = createContext<TweetsContextValue | undefined>(
    undefined,
);