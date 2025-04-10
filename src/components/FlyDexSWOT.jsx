import React from "react";
import fishbrain from "../assets/flydex/fishbrain.png";
import identafly from "../assets/flydex/identafly.png";

const SWOTChartWithImage = ({ title, data, image }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8">
      <div className="lg:w-2/3 p-4">
        <h2 className="text-2xl font-bold text-ink mb-4 text-center lg:text-left">
          {title}
        </h2>
        {/* Mobile View: Cards */}
        <div className="block md:hidden space-y-6">
          {data.map((row, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <p className="mb-2">
                <strong>{row.aspect}:</strong>
              </p>
              <ul className="list-disc pl-4">
                {row.details.map((detail, i) => (
                  <li key={i} className="text-body text-ink">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Desktop View: Table */}
        <div className="hidden md:block overflow-x-auto rounded-lg border-2 border-ink">
          <table className="w-full border-collapse mb-0">
            <thead>
              <tr className="bg-neutral">
                <th className="text-left p-4 text-h5 font-ppSupply font-bold text-ink border-b-2 border-ink">
                  Aspect
                </th>
                <th className="text-left p-4 text-h5 font-ppSupply font-bold text-ink border-b-2 border-ink">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-neutral transition-colors"
                >
                  <td className="p-4 font-bold text-ink">{row.aspect}</td>
                  <td className="p-4 text-ink">
                    <ul className="list-disc pl-4">
                      {row.details.map((detail, i) => (
                        <li key={i} className="text-body">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="lg:w-1/3 p-4 flex-shrink-0">
        <img
          src={image}
          alt={`${title} Screenshot`}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

const FlyDexSWOTCharts = () => {
  const fishBrainSWOT = [
    {
      aspect: "Strengths",
      details: [
        "Engaging community features",
        "Effective spot-finding tools",
      ],
    },
    {
      aspect: "Weaknesses",
      details: [
        "Limited educational content for beginners",
      ],
    },
    {
      aspect: "Opportunities",
      details: [
        "Expand tutorials and guided experiences",
      ],
    },
    {
      aspect: "Threats",
      details: [
        "Competitors may enhance their features",
      ],
    },
  ];

  const identaFlySWOT = [
    {
      aspect: "Strengths",
      details: [
        "Innovative AI for detailed fly recognition",
        "Provides insightful fish forage and location data",
      ],
    },
    {
      aspect: "Weaknesses",
      details: [
        "Lacks comprehensive instructional content",
      ],
    },
    {
      aspect: "Opportunities",
      details: [
        "Integrate more educational resources",
      ],
    },
    {
      aspect: "Threats",
      details: [
        "Competitors could quickly adopt similar technology",
      ],
    },
  ];

  return (
    <div className="space-y-12">
      {/* First Chart: Text on left, image on right */}
      <SWOTChartWithImage
        title="FishBrain SWOT"
        data={fishBrainSWOT}
        image={fishbrain}
      />
      {/* Second Chart: Text on left, image on right */}
      <SWOTChartWithImage
        title="IdentaFly SWOT"
        data={identaFlySWOT}
        image={identafly}
      />
    </div>
  );
};

export default FlyDexSWOTCharts;