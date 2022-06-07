import { signOut } from "next-auth/react"

function SignOut({ Icon, title }) {
  const handleClickSignOut = () => {
    signOut()
  }

  return (
    <div className="group flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200 ">
      <Icon className="h6 w-6" />
      <button
        className="hidden md:flex group-hover:text-twitter text-base font-light lg:text-xl"
        onClick={handleClickSignOut}
      >
        {title}
      </button>
    </div>
  )
}

export default SignOut
