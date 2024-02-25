/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import GigCard from "../GigPage/GigCard";

const AllGigs = () => {
  const [gigs, setGigs] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleData = async () => {
      setIsLoading(true)
      const res = await fetch(`/api/query/gigs`)
      const gigData = await res.json()
      setGigs(gigData);
      setIsLoading(false)
    }
    handleData()
  }, [])




  return (
    <div>
      <h1 className="mt-12 text-center text-4xl font-bold">
        Popular <span className="text-green-700">Gigs</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {gigs?.slice(0,4).map((gig) => <GigCard key={gig?._id} gig={gig} /> )}
      </div>
    </div>
  );
};

export default AllGigs;
