// app/Sidebar.tsx 
'use client';

import { useEffect, useState } from 'react';

function getConversations() {
  return {
    data: {
      titles: ["Project Ideas", "Math Notes", "API Design", "Next.js Practice"]
    }
  };
}

export default function Sidebar() {

  // useState is a React hook that returns a pair: [currentValue, setterFunction]
  // What that means is that we could use just an array but the ui wont update thats why we need useState
  // const [titles, setTitles] => titles = current value or just the array (starts as []) and setTitles = a function to update that array and tell the ui to update the site (it overwrite the array by default)
  // string is to set the type the array can hold
  const [titles, setTitles] = useState<string[]>(["Here put initialValue if had some at the beggining"]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const result = getConversations();

    // So this is the structure of our data
    // It's encapsulated in a data, then we need to go in titles to acces the array of titles
    setTitles(result.data.titles);

    // Does this once because [] empty. If it had something it would be like a watcher and each time the ui refresh, if the watcher is different its running this part too
  }, []);

  // add a new chat
  // Empty () means no parameters required
  // Could also be written as :
  // function handleNewChat() {}
  // If want custom chat we can do: const handleNewChat = (title: string) => {}
  const handleNewChat = () => {

    // The arrow replaces some code. Without arrow code would have been:
    // setTitles(function(prevTitles) {
    //   return [...prevTitles, "Untitled Chat"];
    // });
    // The '...' represent to basically copy each item and the ',' then adds the extra item we want in a new array
    // preTitles is also arbitrary. We can replace by whatever we want. This setTitles with the prevTitles is a built in function of useStat so what ever the name we give instead of prevTitle would automatically give the array of title it had previously
    setTitles(prevTitles => [...prevTitles, "Untitled Chat"]);
  };

  const handleTitleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Conversations</h2>
      
      {/* "New Chat" button */}
      <button
        onClick={handleNewChat}
        // Styling
        className="w-full mb-4 p-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium transition"
      >
        + New Chat
      </button>

      <div className="space-y-2">
        {titles.map((title, index) => (
          <div
            key={index}
            onClick={() => handleTitleClick(index)}

            // Style dynamic selon la condition 
            className={`p-3 rounded cursor-pointer transition ${
              // if statement
              // ? = true and : = false
              activeIndex === index 
                ? 'bg-red-600'           
                : 'hover:bg-gray-700'    
            }`}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}