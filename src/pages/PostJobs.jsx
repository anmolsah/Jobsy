import React from 'react'

const PostJobs = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const jobData = {
      title: event.target[0].value,
      companyName: event.target[1].value,
      // Add other form fields as needed
    };

    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Job posted successfully:', result);
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

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