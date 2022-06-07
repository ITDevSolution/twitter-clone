// import { RefreshIcon } from "@heroicons/react/outline"
import React from "react"

function Feed(props) {
  return (
    <div className="col-span-7 border-x lg:col-span-5">
      <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
      {/* <div className="flex text-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          onClick={handleLoadMore}
          className="h-8 w-8 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div> */}
      {props.children}
    </div>
  )
}

export default Feed
