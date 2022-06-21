import { useContext } from "react";
import { TweetsContext } from "../contexts/TweetsContext";


const FeedList = () => {

    const {tweetList} = useContext(TweetsContext);
    
    

    

    return (

        
        <div>
           
            
            {tweetList.map((item,index) => (
            <div key={index} className="flex items-center m-4 bg-gray-lightest rounded-full p-4 hover:ring-2 hover:ring-primary-base" >
                <div>
                    <img
                        src="https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg"
                        alt="User Profile"
                        className="w-11 h-11 rounded-full"
                    />
                </div>
                <div className="ml-5">
                    {item}
                </div>
            </div>
            ))}

        </div>
    )

}

export default FeedList;