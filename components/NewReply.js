import { useState } from "react"
import { useRouter } from "next/router"
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline"

function NewReply({ tweet }) {
  const router = useRouter()
  const [reply, setReply] = useState("")

  const handleSubmitReply = async (e) => {
    e.preventDefault()
    if (!reply) {
      alert("Enter some text in the reply")
      return
    }
    const res = await fetch("/api/tweet", {
      body: JSON.stringify({
        parent: tweet.id,
        content: reply,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    router.reload(window.location.pathname)
  }

  const handleOnChangeReply = (e) => {
    setReply(e.target.value)
  }

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="mt-4 h-10 rounded-full object-cover"
        src={tweet.author.image}
        alt=""
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col" onSubmit={handleSubmitReply}>
          <input
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
            onChange={handleOnChangeReply}
            type="text"
            placeholder="Tweet your reply"
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
              disabled={!reply}
              className="bg-twitter text-slate-50 border px-8 py-2 mt-0 mr-2 font-bold rounded-full disabled:opacity-40"
            >
              Reply
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewReply
