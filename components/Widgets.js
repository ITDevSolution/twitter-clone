import { SearchIcon } from "@heroicons/react/outline"
import React from "react"
import { TwitterTimelineEmbed } from "react-twitter-embed"

function Widgets() {
  return (
    <div className="col-span-2 mt-2 px-2 hidden lg:inline">
      {/* Search */}
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full">
        <SearchIcon className="h-5 w-5" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 outline-none bg-transparent"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="joelGowFans"
        options={{ height: 1000 }}
      />
    </div>
  )
}

export default Widgets
