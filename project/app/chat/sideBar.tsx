// app/sidebar.tsx
'use client';

import { useEffect, useState } from 'react';

// Mock function (replace this with your real function)
function getConversations() {
  return {
    data: {
      titles: ["Project Ideas", "Math Notes", "API Design", "Next.js Practice"]
    }
  };
}

export default function Sidebar() {
  const [titles, setTitles] = useState<string[]>([]);

  useEffect(() => {
    // Call your function and extract titles
    const result = getConversations();
    setTitles(result.data.titles);
  }, []);

  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Conversations</h2>
      <div className="space-y-2">
        {titles.map((title, index) => (
          <div
            key={index} // 👈 better to use a unique ID if available
            className="p-3 rounded hover:bg-gray-700 cursor-pointer transition"
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}