import React from "react"

function SideBarRow({ Icon, title }) {
  return (
    <div className="group flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200 ">
      <Icon className="h-6 w-6" />
      <p className="hidden md:inline-flex group-hover:text-twitter text-base font-light lg:text-xl ">
        {title}{" "}
      </p>
    </div>
  )
}

export default SideBarRow
