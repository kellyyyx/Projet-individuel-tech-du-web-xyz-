import React, { useState} from 'react';
import type { Tweet } from './types/Tweet';
import { tweets as initialTweets } from './data/tweets';
import { TweetsContext } from './contexts/TweetsContext';

import { Outlet } from 'react-router-dom';
import type { TweetsContextValue } from './contexts/TweetsContext';


export const App = (): React.ReactNode => {
    const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets);

    //fonction qui va venir ajouter en tête du tableau un nouveau tweet
    const addTweet = (content: string): void => {

      //création du nouveau tweet
      const nouveauTweet: Tweet = {

        //identifiant produit par crypto.randomUUID()
        id: crypto.randomUUID(),
        authorName: "Vous",
        authorHandle: "vous",
        content: content,
        createdAt: new Date().toISOString(),
        likes: 0,
        likedByMe: false,
      };

      //On vient utiliser setTweets. "anciensTweets" représente la liste actuelle de tweets, on va venir y verser le contenu des anciens tweets sans muter le tableau existant
      //Ici, nouveauTweet (le tweet qui vient d'être publié) apparaîtra en haut du tableau
      setTweets((anciensTweets) => [nouveauTweet, ...anciensTweets]);

    }


    const context: TweetsContextValue = { tweets, addTweet };

    return (
        <main>
            <TweetsContext.Provider value={context}>
                <Outlet />
            </TweetsContext.Provider>
        </main>
    );
};


export default App;
