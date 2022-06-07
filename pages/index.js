import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

import Tweets from "components/Tweets"
import prisma from "lib/prisma"
import { getTweets } from "lib/data"

import Link from "next/link"

export default function Home({ tweets }) {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading") {
    return null
  }

  if (session) {
    router.push("/home")
  }

  return (
    <div className="  items-center  mt-10">
      <Tweets tweets={tweets} />
      <div className=" text-center  p-4 border m-4 ">
        <h2 className=" mb-10 text-black text-2xl">Join the conversation!</h2>
        <Link
          className="border border-slate-900 px-8 py-2 mt-5 font-bold rounded-full text-black transition-all duration-75 hover:text-white hover:bg-black hover:border-none"
          href="/api/auth/signin"
        >
          Login
        </Link>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  let tweets = await getTweets(prisma, 4)
  tweets = JSON.parse(JSON.stringify(tweets))

  return {
    props: {
      tweets,
    },
  }
}
