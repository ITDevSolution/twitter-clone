import { useSession } from "next-auth/react"
import { useState } from "react"

import { useRouter } from "next/router"
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline"

export default function NewTweet() {
  const [content, setContent] = useState("")
  const { data: session } = useSession()

  const router = useRouter()

  //don't display if we're not logged in
  if (!session || !session.user) return null

  const validateContent = async (e) => {
    e.preventDefault()

    if (!content) {
      alert("No content")
      return
    }

    await fetch("/api/tweet", {
      body: JSON.stringify({
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
    setContent("")
    router.reload(window.location.pathname)
  }

  const onChangeInput = (e) => {
    setContent(e.target.value)
    // console.log(e.target.value)
  }

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="mt-4 h-14 rounded-full object-cover"
        src={session.user.image}
        alt=""
      />

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col" onSubmit={validateContent}>
          <input
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
            type="text"
            placeholder="What's Happening?"
            name="content"
            value={content}
            onChange={onChangeInput}
          />
          {/* Icons */}
          <div className="flex items-center">
            <div className="flex space-x-2 text-twitter flex-1">
              <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform dutarion-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="h-5 -w5" />
              <EmojiHappyIcon className="h-5 -w5" />
              <CalendarIcon className="h-5 -w5" />
              <LocationMarkerIcon className="h-5 -w5" />
            </div>

            <button
              disabled={!content}
              className="bg-twitter text-slate-50 border px-8 py-2 mt-0 mr-2 font-bold rounded-full disabled:opacity-40"
            >
              Tweet
            </button>
          </div>

          {/* <div className="flex flex-1 flex-row-reverse">
          
        </div> */}
        </form>
      </div>
    </div>
  )
}
