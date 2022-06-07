import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline"

import timeago from "lib/timeago"
import Link from "next/link"

export default function Tweet({ tweet, nolink }) {
  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-100">
      <div className="flex space-x-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={tweet.author.image}
          alt=""
        />
        <div>
          <div className="flex items-center space-x-1">
            <Link href={`/${tweet.author.name}`}>
              <p className="mr-1 font-bold cursor-pointer">
                {tweet.author.name}
              </p>
            </Link>
            <p className="hidden text-sm text-gray-500 sm:inline">
              {`@${tweet.author.name.replace(/\s+/g, "").toLowerCase()}`}
            </p>
            {nolink ? (
              timeago.format(new Date(tweet.createdAt))
            ) : (
              <Link href={`/${tweet.author.name}/status/${tweet.id}`}>
                <p className="text-sm text-gray-500 cursor-pointer">
                  {timeago.format(new Date(tweet.createdAt))}
                </p>
              </Link>
            )}
          </div>

          <p className="pt-1">{tweet.content}</p>

          {/* {tweet.image && (
            <img
              src={tweet.image}
              alt=""
              className="mr-5 ml-0 mx-h-60 rounded-lg object-cover shadow-sm"
            />
          )} */}
        </div>
      </div>

      {/* ICONS */}
      <div className="flex justify-between mt-5">
        <div className="flex cursor-pointer space-x-3 text-gray-400">
          <ChatAlt2Icon className="h-5 w-5" />
          <p>5</p>
        </div>
        <div className="flex cursor-pointer space-x-3 text-gray-400">
          <SwitchHorizontalIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer space-x-3 text-gray-400">
          <HeartIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer space-x-3 text-gray-400">
          <UploadIcon className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}
