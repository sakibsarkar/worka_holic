"use client";
import GigCard from "@/Components/GigPage/GigCard";
import Header from "@/Components/GigPage/Header";
import NoDataFound from "@/Components/Message/NoDataFound";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const AllGigs = () => {

  // gig data
  const [data, setData] = useState([])

  // loading state
  const [isLoading, setIsLoading] = useState(true)

  // query filters
  const searchParams = useSearchParams()
  const searchValue = searchParams.get("search") || ""
  const [category, setCategory] = useState("")
  const [rating, setRating] = useState("")
  const [priceRange, setPriceRange] = useState("")

  useEffect(() => {
    const handleData = async () => {
      setIsLoading(true)
      const res = await fetch(`/api/query/gigs?search=${searchValue}&&category=${category}&&rating=${rating}&&priceRange=${priceRange}`)
      const gigData = await res.json()
      setData(gigData)
      setIsLoading(false)

    }
    handleData()
  }, [searchValue, category, rating, priceRange])

  return (
    <div className="bg-gray-200 pb-20">
      <Header
        setCategory={setCategory}
        setRating={setRating}
        setPriceRange={setPriceRange}
        searchValue={searchValue}
      />

      {
        !isLoading && data?.length > 0 ?

          <div className="my-10 min-h-[80vh] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {data?.map((gig) => (
              <GigCard key={gig?._id} gig={gig} />
            ))}
          </div>
          :<NoDataFound />
      }


    </div>
  );
};

export default AllGigs;
