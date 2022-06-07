import React from "react"

function utils() {
  const handleCleanDB = async () => {
    await fetch("/api/utils", {
      body: JSON.stringify({
        task: "clean_database",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
  }

  const handleGenerateUserTweets = async () => {
    await fetch("/api/utils", {
      body: JSON.stringify({
        task: "generate_users_and_tweets",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
  }

  const handleGenerateOneTweet = async () => {
    await fetch("/api/utils", {
      body: JSON.stringify({
        task: "generate_one_tweet",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-5xl">Utils</h2>

      <div className="flex-1 mb-5 mt-10">
        <button
          className="bg-black text-slate-50 border rounded-full px-8 py-3 mt-2 font-bold"
          onClick={handleCleanDB}
        >
          Clean Database
        </button>
      </div>

      <div className="flex-1 mb-5">
        <button
          className="bg-black text-slate-50 border rounded-full px-8 py-3 mt-2 font-bold"
          onClick={handleGenerateUserTweets}
        >
          Generate users and tweets
        </button>
      </div>

      <div className="flex-1 mb-5">
        <button
          className="bg-black text-slate-50 border rounded-full px-8 py-3 mt-2 font-bold"
          onClick={handleGenerateOneTweet}
        >
          Generate 1 new Tweet
        </button>
      </div>
    </div>
  )
}

export default utils
