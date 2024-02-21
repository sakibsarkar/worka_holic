import ChoosePlansCard from "./ChoosePlansCard";

const ChoosePlans = () => {
  const details = [
    {
      name: "TRIAL",
      price: "Free",
      recommendation: "false",
      price_time: "month",
      features: [
        "5 job posting",
        "1 featured job",
        "Applicant tracking",
        "Job management",
        "Email support",
      ],
    },
    {
      name: "BASIC",
      price: "$10",
      recommendation: "true",
      price_time: "year",
      features: [
        "10 job posting",
        "2 featured job",
        "Applicant tracking",
        "Job management",
        "Email support",
      ],
    },
    {
      name: "PREMIUM",
      price: "$20",
      recommendation: "false",
      price_time: "year",
      features: [
        "20 job posting",
        "5 featured job",
        "Applicant tracking",
        "Job management",
        "Email support",
      ],
    },
  ];
  return (
    <div className="bg-gray-100 py-10">
      <h3 className="text-center text-3xl font-bold">
        Choose <span className="text-primary-color"> Your Plan</span>
      </h3>
      <p className="text-center">Select a package from above and submit job</p>
      <div className="flex gap-20 justify-center mt-10">
        {details?.map((detail, index) => (
          <ChoosePlansCard key={index} details={detail} />
        ))}
      </div>
    </div>
  );
};

export default ChoosePlans;
