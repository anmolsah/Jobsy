import React from 'react'

const PostJobs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-5xl font-bold text-blue-500">Post a Job</h2>
      <form className="flex flex-col gap-4 mt-8">
        <label className="flex flex-col">
          Job Title
          <input type="text" className="border-2 border-gray-300 p-2 rounded-md" />
        </label>
        <label className="flex flex-col">
          Company Name
          <input type="text" className="border-2 border-gray-300 p-2 rounded-md" />
        </label>
        <label className="flex flex-col">
          Location
          <input type="text" className="border-2 border-gray-300 p-2 rounded-md" />
        </label>
        <label className="flex flex-col">
          Job Description
          <textarea className="border-2 border-gray-300 p-2 rounded-md" />
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Post Job</button>
      </form>
    </div>
  )
}

export default PostJobs