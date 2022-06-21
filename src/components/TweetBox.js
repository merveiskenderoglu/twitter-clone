
import { GIFIcon, MediaIcon, PollIcon, EmojiIcon, ScheduleIcon, LocationIcon } from "../icons/Icon";
import { useState } from "react";
// import {TweetsContext} from '../contexts/TweetsContext';
import { createContext } from "react";




const TweetBox = () => {
    
    //text area'ya girilen yazıyı tweet olarak almak istiyorum
    //text area'ya yazılan yazıyı tweet olarak tanımlayacağım
    //bu tweetleri alıp bir arrayda tutacağım
    //bu array'den ana ekrana yazdıracağım
    //tweet tek bir nesne için useState yazacağım ve input value'yu burada alacağım
    //tweetList için ayrı bir useState yazacağım, setTweetList ile listeyi oluşturacağım

    const TweetContext = createContext();


    const [tweet, setTweet] = useState("");

    const [tweetList, setTweetList] = useState([""]);


    const addTweetList = (tweet) => {
        setTweetList([...tweetList, tweet]);
        setTweet("");
    }

    const handleSubmit = (tweet) => {
        addTweetList(tweet);
        console.log(tweet);
        console.log(tweetList)
                
    }

    

     
    return (

        <>

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
                onClick={()=> handleSubmit(tweet)}
                >Tweet</button>
            </div>
        </div>

        <TweetContext value={tweetList}/>
        </>
    )
}

export default TweetBox;





