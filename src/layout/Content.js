import {PopularIcon} from '../icons/Icon';
import TweetBox from '../components/TweetBox';
import Divider from '../components/Divider';
// import {TweetsContext} from '../contexts/TweetsContext';
import FeedList from '../components/FeedList';


const Content = () => {
  
    return(
        <main className="flex-1 flex flex-col border-r border-l">
            <header className='flex sticky top-0 justify-between items-center p-4 border-b border-gray-extraLight bg-white'>
                <span className='font-bold text-xl text-gray-900'>Home</span>
                <PopularIcon className="w-5 h-5 text-primary-base"/>
            </header>    
            <div className='flex px-4 py-3 space-x-4'>
                <img 
                src="https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg" 
                alt="User Profile" 
                className = "w-11 h-11 rounded-full"
                />  
                <TweetBox/>                
            </div>
            <Divider/>            
            <FeedList />                        
        </main>
    )
}

export default Content;