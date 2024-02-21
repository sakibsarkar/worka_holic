/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

const AllGigs = () => {
  const [gigs, setGigs] = useState([]);
  const [fullDescription, setFullDescription] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/db.json");
      const data = await res.json();
      setGigs(data);
    };
    fetchData();
  }, []);

  const handleDescription = (id) => {
    if (fullDescription.includes(id)) {
      setFullDescription(fullDescription.filter((descId) => descId !== id));
    } else {
      setFullDescription([...fullDescription, id]);
    }
  };

  return (
    <div>
      <h1 className="mt-12 text-center text-4xl font-bold">
        Popular <span className="text-green-700">Gigs</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {gigs.map((gig) => (
          <div key={gig.id}>
            <div className="py-10 mb-16">
              <div
                className={`rounded-sm w-full overflow-hidden border ${
                  fullDescription.includes(gig.id) ? "h-auto" : "h-[420px]"
                }`}
              >
                <img className="w-full h-[200px]" src={gig.image} alt="gig" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{gig.title}</div>
                  <p>
                    {fullDescription.includes(gig.id)
                      ? gig.description
                      : gig.description.slice(0, 110)}
                  </p>
                  {gig.description.length > 100 && (
                    <button
                      className="btn btn-primary mt-2"
                      onClick={() => handleDescription(gig.id)}
                    >
                      {fullDescription.includes(gig.id)
                        ? "Show Less"
                        : "Show More"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGigs;
