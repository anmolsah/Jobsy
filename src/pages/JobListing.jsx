import { getJobs } from "@/api/apijobs";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loaction, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");
  const { isLoaded } = useUser();

  const {
    fn: fnJobs,
    data: dataJobs,
    loading: loadingJobs,
  } = useFetch(getJobs, {
    location,
    company_id,
    searchQuery,
  });

  useEffect(() => {
    if (isLoaded) fnJobs();
  }, [isLoaded, location, company_id, searchQuery]);

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return <div>
    <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-87">
      Latest Jobs
    </h1>
  </div>;
};

export default JobListing;
