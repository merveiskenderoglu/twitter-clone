
import { GIFIcon, MediaIcon, PollIcon, EmojiIcon, ScheduleIcon, LocationIcon } from "../icons/Icon";

import { TweetsContext } from "../contexts/TweetsContext";
import { useContext } from "react";


const TweetBox = () => {    

    const {tweet, setTweet, tweetList, setTweetList, addTweetList} = useContext(TweetsContext);

    return (       

        <div className="flex flex-col w-full mt-2">

            <textarea className="text-xl placeholder:-gray-dark outline-none overflow-hidden resize-none bg-transparent" placeholder="What's happening?" onChange={(e) => setTweet(e.target.value)} value={tweet}/>



            <div className="flex items-center justify-between -ml-3">
                <div className="flex flex-row">
                    <div className="flex items-center justify-center rounded-full hover:bg-gray-lightest w-10 h-10">
                        <MediaIcon className="w-5 h-5 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center rounded-full hover:bg-gray-lightest w-10 h-10">
                        <GIFIcon className="w-5 h-5 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center rounded-full hover:bg-gray-lightest w-10 h-10">
                        <PollIcon className="w-5 h-5 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center rounded-full hover:bg-gray-lightest w-10 h-10">
                        <EmojiIcon className="w-5 h-5 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center rounded-full hover:bg-gray-lightest w-10 h-10">
                        <ScheduleIcon className="w-5 h-5 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center rounded-full hover:bg-gray-lightest w-10 h-10">
                        <LocationIcon className="w-5 h-5 text-primary-base" />
                    </div>

                </div>
                <button className="bg-primary-base text-white rounded-full px-4 py-2 " 
                onClick={()=> addTweetList(tweet)}
                >Tweet</button>
            </div>
        </div>

        
        
    )
}

export default TweetBox;





