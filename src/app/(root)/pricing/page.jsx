import ChoosePlansCard from "@/Components/ChoosePlans/ChoosePlansCard";
import { FaCheck } from "react-icons/fa6";

const PricingSection = () => {
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

    const premiumStyle = {
        height: "450px",
        border: "2px solid yellow"
    }

    return (
        <div className="bg-gray-100 py-10 min-h-[100vh]">
            <h3 className="text-center text-3xl font-bold">
                Choose <span className="text-primary-color"> Your Plan</span>
            </h3>
            <p className="text-center">Select a package from above and submit job</p>
            <div className="flex gap-10 justify-center mt-10 flex-wrap">
                {details?.map((detail, index) => (
                    <div key={index} className="bg-white border-2 w-[300px] h-[336px] rounded-md p-5 hover:border-yellow-200 hover:border-2 flex flex-col justify-between"
                        style={detail.recommendation == "true" ? premiumStyle : {}}
                    >
                        <div className="flex justify-between">
                            <h4 className="text-primary-color font-semibold">{detail?.name}</h4>
                            {detail?.recommendation === "true" && (
                                <small className="text-black bg-yellow-200 rounded p-1 font-bold">
                                    Recommended
                                </small>
                            )}
                        </div>
                        <h2 className="text-4xl font-semibold">
                            {detail?.price} <sub className="text-xl">/{detail?.price_time}</sub>
                        </h2>
                        <div className="my-4 font-semibold">
                            <hr />
                        </div>
                        <ul className="text-sm flex flex-col gap-2 ">
                            {detail?.features?.map((feature, index) => (
                                <li className="flex items-center gap-2 " key={index}>
                                    <FaCheck className="text-primary-color" /> <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-primary bg-white text-black border-2 hover:bg-primary-color hover:text-white hover:border-primary-color w-full mt-4" style={detail?.recommendation === "true" ? { background: "#007456", color: 'white' } : {}}>
                            Get started
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingSection;