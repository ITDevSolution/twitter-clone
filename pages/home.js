//Components utils
import Head from "next/head"

// Hooks sessions and Router
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useState } from "react"

// Components
import NewTweet from "components/NewTweet"
import Tweets from "components/Tweets"

// query database
import prisma from "lib/prisma"
import { getTweets } from "lib/data"
import Sidebar from "components/Sidebar"
import Feed from "components/Feed"
import Widgets from "components/Widgets"
import LoadMore from "components/LoadMore"

export default function Home({ initialTweets }) {
  const [tweets, setTweets] = useState(initialTweets)

  const { data: session, status } = useSession()

  const loading = status === "loading"
  const router = useRouter()

  if (loading) {
    return null
  }

  if (!session) {
    router.push("/")
  }

  if (session && !session.user.name) {
    router.push("/setup")
  }

  return (
    <div className="mx-auto lg:max-w-6xl max-h-screen ">
      <Head>
        <title>Twitter Joeloff</title>
      </Head>

      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed>
          <NewTweet />
          <Tweets tweets={tweets} />
          <LoadMore tweets={tweets} setTweets={setTweets} />
        </Feed>

        <Widgets />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  let tweets = await getTweets(prisma, 2)
  tweets = JSON.parse(JSON.stringify(tweets))

  return {
    props: {
      initialTweets: tweets,
    },
  }
}
