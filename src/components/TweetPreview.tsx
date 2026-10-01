import type { Tweet } from "../types/Tweet";
import React, { useState } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';


type TweetPreviewProps = {
 tweet: Tweet;
};


export const TweetPreview =  ({ tweet }: TweetPreviewProps): React.ReactNode => {
   const [ContenuDeplie, setContenuDeplie] = useState(false);


   const formattedDate = new Date(tweet.createdAt).toLocaleDateString('fr-FR');


   const LongueurTweet = tweet.content.length > 180;


   const texteAffiche = LongueurTweet && !ContenuDeplie
   ? tweet.content.slice(0, 180) + "..." :tweet.content;


   const ChangementAffichage = () => {
       setContenuDeplie((ValeurPrecedente) => !ValeurPrecedente);
   }


   return (
       <article>
           <div>
               <strong>{tweet.authorName}</strong>


               <span>@{tweet.authorHandle}</span>


               <span> - {formattedDate}</span>


           </div>
           {tweet.image && (
               <Link to={`/tweets/${tweet.id}`}>
                   <img
                       src = {tweet.image.url}
                       alt = {tweet.image.alt}
                       className="tweetImage"
                   />
               </Link>


           )}


           <p>{texteAffiche}</p>


           {LongueurTweet && (
               <button onClick={ChangementAffichage}>
                   {ContenuDeplie ? "Voir moins" : "Voir plus"}
               </button>
           )}
           <div className="lienDiscussion">
               <Link to={`/tweets/${tweet.id}`}> Voir la discussion </Link>
           </div>
       </article>
   );
};
