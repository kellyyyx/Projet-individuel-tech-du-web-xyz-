import React from 'react';
// import { tweets } from './data/tweets';
// import { TweetList } from './components/TweetsList';
import { Outlet } from 'react-router-dom';


export const App = (): React.ReactNode => {
 return (
   <main>
     <Outlet />
   </main>
 );
};


export default App;
