import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

export default function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestions] = useState(false);
    const searchCache = useSelector(store => store.search);

    // console.log(searchCache)
    const dispatch = useDispatch();

    function toggleMenuHandler() {
        dispatch(toggleMenu());
    }

    useEffect(() => {
        //make an api call for every key press
        //but if the difference between 2 api's call is < 200ms decline the api call.
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }

        }, 200)
        return () => {
            clearTimeout(timer);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery])
    /**
     * key pressed i 
     *  render the component 
     *  useEffect()
     *  Like searchQuery is new const on every render 
     *  start timer after 200ms api calls
     *  - similary the timer function on render it 
     *  
     * key pressed ip 
     *  render the component
     *  useEffect() - search query is dependent
     * 
     */

    async function getSearchSuggestions() {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        dispatch(cacheResults({ [searchQuery]: json[1] }));
        setSuggestions(json[1]);
    }

    return (
        <div className="grid grid-flow-col p-2 shadow-lg items-center">
            <div className="flex col-span-1 gap-2">
                <img onClick={() => toggleMenuHandler()} className="h-16 cursor-pointer" src="https://www.svgrepo.com/show/312300/hamburger-menu.svg" alt="menu" />
                <img className="h-16" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-650-80.jpg.webp" alt="logo" />
            </div>
            <div className="col-span-10 relative">
                <div>
                    <input className="w-1/2 border border-gray-300 p-2 rounded-full rounded-r-none outline-none" type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button className="border border-gray-300 bg-gray-100 p-2 border-l-0 rounded-full rounded-l-none outline-none px-3">🔍</button>
                </div>
                {showSuggestion && <div className="absolute bg-white w-[29rem] shadow-lg rounded-lg border border-gray-100">
                    <ul>
                        {suggestions.map(d => <li key={d} className="px-2 py-2 hover:bg-gray-100 shadow-sm">🔍 {d}</li>)}
                    </ul>
                </div>}
            </div>
            <div className="col-span-1">
                <img className="h-16" src="https://static.vecteezy.com/system/resources/previews/005/545/335/non_2x/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="user" />
            </div>
        </div>
    )
}
