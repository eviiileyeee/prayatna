import { useState, useEffect } from "react";
import GitHubStatsCard from "./GithubStatsCard";
import {
    Triangle,
} from "lucide-react"

export default function UserProfile(props) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [openMenu, setopenMenu] = useState(false);
    useEffect(() => {

        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setIsDarkMode(true);
        }
    }, []);

    return (
        <div className="  bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 text-center mb-8 md:mb-0">
                    <img src={props.user.profileImage} alt="Profile" className="rounded-full object-cover w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105" />
                    <h1 className="text-2xl font-bold text-indigo-800 dark:text-white mb-2">{props.user.username}</h1>
                    <p className="text-gray-600 dark:text-gray-300">{props.user.profession}</p>
                    <button
                        className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300"
                        onClick={() => props.setTab("settings")}
                    >Edit Profile</button>
                   
                </div>
                <div className="md:w-2/3 md:pl-8">
                    <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">About Me</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        {props.user.discription }
                    </p>
                    <button
                        className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none h-7
                    focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 
                     text-black shadow   px-4 py-2  whitespace-pre md:flex group 
                    relative  justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black 
                    hover:ring-offset-2 m-5 dark:text-white"
                        onClick={() => setopenMenu(!openMenu)}>
                        Show github stats <Triangle className="h-3 rotate-180" />
                    </button>
                    {openMenu ? <GitHubStatsCard user={props.user} /> : ""}
                    <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {['JavaScript', 'React', 'Node.js', 'Python', 'SQL'].map((skill, index) => (
                            <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm hover:bg-blue-900 hover:text-white transition-colors duration-300">{skill}</span>
                        ))}
                    </div>
                    <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">Contact Information</h2>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center">
                            {props.user.email || ""}
                        </li>
                        <li className="flex items-center">
                            {props.user.phoneNumber || ""}
                        </li>
                        <li className="flex items-center opacity-50 cursor-not-allowed">
                            address
                        </li>
                    </ul>
                    
                </div>
            </div>
 
        </div>
    );
}


