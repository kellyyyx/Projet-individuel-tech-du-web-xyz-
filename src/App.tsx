import React, { useState} from 'react';
import type { Tweet } from './types/Tweet';
import { tweets as initialTweets } from './data/tweets';
import { TweetsContext } from './contexts/TweetsContext';

import { Outlet } from 'react-router-dom';
import type { TweetsContextValue } from './contexts/TweetsContext';


export const App = (): React.ReactNode => {
    const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets);
    const context: TweetsContextValue = { tweets };

    return (
        <main>
            <TweetsContext.Provider value={context}>
                <Outlet />
            </TweetsContext.Provider>
        </main>
    );
};


export default App;
