import {createContext} from "react";
import { useState } from "react";

const TweetsContext = createContext();

const TweetsContextProvider = ({children}) => {

    const [tweet, setTweet] = useState("");  
    const [tweetList, setTweetList] = useState([]);

    const addTweetList = (tweet) => {
        if (tweet !== "") {
        setTweetList([...tweetList, tweet]);
        setTweet("");
        console.log(tweetList)}
        console.log(tweet);
        
    }

    return (
        <TweetsContext.Provider value = {{tweet, setTweet, tweetList, setTweetList, addTweetList}}>
            {children}
        </TweetsContext.Provider>
    )
}

export {TweetsContext};

export default TweetsContextProvider;