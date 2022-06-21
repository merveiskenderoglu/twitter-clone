import { SearchIcon } from '../icons/Icon'
import { Timeline } from 'react-twitter-widgets'






const Widgets = () => {
    return (
        <aside className="w-80">
            <div className=' flex bg-white h-[61px] sticky top-0'>
                <div className=' flex items-center space-x-4 p-3 bg-gray-200 rounded-full text-gray-dark m-2  focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-base focus-within:text-primary-base'>
                    <SearchIcon className="w-5 h-5" />
                    <input type="text" placeholder='Search Twitter' className='placeholder-gray-dark bg-transparent focus:outline-none w-full' />
                </div>
            </div>
            <div className='mt-6'>
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'TwitterDev'
                    }}
                    options={{
                        height: '600'
                    }}
                />
            </div>
        </aside>
    )
}

export default Widgets;