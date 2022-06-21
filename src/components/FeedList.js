import { useContext } from "react";
// import {TweetsContext} from "../contexts/TweetsContext";
import TweetContext from './TweetBox'



const FeedList = () => {

    const {tweetList} = useContext(TweetContext);
    
  return (
    <div>
        {tweetList.length}
    </div>
    
  )
}

export default FeedList;