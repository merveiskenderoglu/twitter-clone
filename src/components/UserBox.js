

const UserBox = () => {
    return(
        <div className="flex items-center mb-4 m-auto hover:bg-primary-light cursor-pointer rounded-full py-2 pl-2 pr-4 transform transition-colors duration-200">  

            <div>
                <img 
                src="https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg" 
                alt="User Profile" 
                className = "w-11 h-11 rounded-full"
                />                
            </div>          
          
            <div className="flex flex-col ml-3">
                <span>User Name</span>
                <span>@username</span>
            </div>

            <div className="flex space-x-1 ml-auto">
                <div className="w-1 h-1 rounded-full bg-gray-900"></div>
                <div className="w-1 h-1 rounded-full bg-gray-900"></div>
                <div className="w-1 h-1 rounded-full bg-gray-900"></div>
            </div>
            
            
        </div>
    )
}

export default UserBox;