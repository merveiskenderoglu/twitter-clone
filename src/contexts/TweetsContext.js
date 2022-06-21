import { createContext } from "react";
import { useState, useEffect } from "react";

const TweetsContext = createContext();


const TweetsContextProvider = ({ children }) => {

    const [tweet, setTweet] = useState("");
    const [tweetList, setTweetList] = useState(["30","20","10"]);


    const addTweetList = (tweet) => {
        if (tweet !== ""){
        setTweetList(prevState => [tweet,...prevState])}       
    }

    useEffect((tweet) => {
        console.log(tweet);
        console.log(tweetList);
        setTweet("");
    },[tweetList])

    


    return (
        <TweetsContext.Provider value={{tweet, setTweet, tweetList, setTweetList, addTweetList }}>
            {children}
        </TweetsContext.Provider>
    )
}

export { TweetsContext };

export default TweetsContextProvider;