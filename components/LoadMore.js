import { RefreshIcon } from "@heroicons/react/outline"
import React from "react"

function LoadMore({ tweets, setTweets }) {
  const handleLoadMore = async () => {
    const lastTweetId = tweets[tweets.length - 1].id
    // alert(lastTweetId)
    const res = await fetch(`/api/tweets?take=2&cursor=${lastTweetId}`)
    const data = await res.json()
    setTweets([...tweets, ...data])
  }
  return (
    <div className="flex text-center justify-center">
      <button onClick={handleLoadMore}>
        <RefreshIcon className="h-8 w-8 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </button>
    </div>
  )
}

export default LoadMore
