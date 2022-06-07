// Components
import Tweet from "components/Tweet"
import NewReply from "components/NewReply"
import Tweets from "components/Tweets"

//Prisma and data
import { getTweet, getRelies } from "lib/data"
import prisma from "lib/prisma"

import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import Sidebar from "components/Sidebar"

export default function SingleTweet({ tweet, replies }) {
  const { data: session } = useSession()
  const router = useRouter()

  if (typeof window !== "undefinded" && tweet.parent) {
    router.push(`/${tweet.author.name}/status/${tweet.parent}`)
  }

  const handleDeleteTweet = async () => {
    const res = await fetch("/api/tweet", {
      body: JSON.stringify({
        id: tweet.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })

    if (res.status === 401) {
      alert("Unauthorized")
    }
    if (res.status === 200) {
      router.push("/home")
    }
  }

  return (
    <div className="mx-auto max-h-screen lg:max-w-6xl">
      <main className="grid grid-cols-9">
        <Sidebar />
        <div className="col-span-7 border-x lg:col-span-5">
          <Tweet tweet={tweet} />
          <NewReply tweet={tweet} />
          {session && session.user.email === tweet.author.email && (
            <div>
              <a href="#" onClick={handleDeleteTweet}>
                Delete
              </a>
            </div>
          )}
          <Tweets tweets={replies} nolink={true} />
        </div>
        {/* <div className="col-span-2 mt-2 px-2 hidden lg:inline"></div> */}
      </main>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  let tweet = await getTweet(params.id, prisma)
  tweet = JSON.parse(JSON.stringify(tweet))

  let replies = await getRelies(params.id, prisma)
  replies = JSON.parse(JSON.stringify(replies))

  return {
    props: {
      tweet,
      replies,
    },
  }
}
