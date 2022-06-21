import {createContext} from "react";

const TweetsContext = createContext();

// const TweetsContextProvider = ({children}) => {
//     return (
//         <TweetsContext.Provider>
//             {children}
//         </TweetsContext.Provider>
//     )
// }

export {TweetsContext};