import React, { useEffect, useState } from "react";
import faker from "faker";

function Suggestions() {
  const [suggestion, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestion = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestion);
  }, []);
  return (
    <div className="mt-4 ml-10 ">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestion for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestion.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img className="w-10 h-10 rounded-full border p-[2px]" src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt=""
        width={128}
        height={128} />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">From To {profile.company.name}</h3>
             </div>
             <button className="text-blue-400 text-sm" >Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
