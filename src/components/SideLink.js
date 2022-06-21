const SideLink = ({name,Icon,active, handleMenuItemClick}) => {
    const isActive = active === name;
    return(
        <li className="group" onClick={() => handleMenuItemClick(name)}>
            <a href={name} className="cursor-pointer block pointer-events-none">
                <div className="inline-block">
                    <div className={`flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-3 py-3 pr-8 ${isActive ? "text-primary-base" : "" }`}>
                        <Icon/>
                        <span className="ml-4 font-bold">{name}</span>    
                    </div>  
                </div>              
            </a>            
        </li>
    )
}

export default SideLink;