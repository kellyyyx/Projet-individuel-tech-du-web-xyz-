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

    const toggleLike = (id: string): void => {
      setTweets((anciensTweets) =>
        //à partir de l'état précédent, on produit un nouveau tableau avec map
        anciensTweets.map((tweet) => {

          if (tweet.id === id) {

            return {

              ...tweet,
              //inversion de likedByMe
              likedByMe: !tweet.likedByMe,
              //incrémenté si le tweet n'est pas déjà liké, on décrémente si le tweet a déjà été liké (donc qu'on veut enlever notre like)
              likes: tweet.likedByMe ? tweet.likes -1 : tweet.likes + 1,
            };
          }
          //on retourne toujours les autres tweets, qui sont conservés sans modification
          return tweet;
        })
      );
    };


    const context: TweetsContextValue = { tweets, addTweet, toggleLike };

    return (
      <>
        <header className="header" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="/favicon-96x96.png" alt="logo de l'application XYZ" width="45"/>

          <h2 style={{ margin: 0 }}>XYZ</h2>
        </header>

        <main>
            <TweetsContext.Provider value={context}>
                <Outlet />
            </TweetsContext.Provider>
        </main>
      </>
    );
};


export default App;
