import React from "react";

const tableData = [
  {
    feature: "Offline Tutorials",
    designGoal:
      "Structured, interactive lessons available offline to support users directly in the field.",
    userBenefit: "Reduces anxiety and boosts confidence during actual fishing trips.",
  },
  {
    feature: "Dynamic Checklists",
    designGoal:
      "Customizable preparation checklists tailored to location, weather, and species targeted.",
    userBenefit: "Ensures users feel fully prepared, eliminating guesswork.",
  },
  {
    feature: "Location-Based Spot Finder",
    designGoal:
      "Interactive maps using GPS, reviews, and filtering options for ideal fishing locations.",
    userBenefit: "Saves users time and encourages exploration of new fishing spots.",
  },
  {
    feature: "Personal Catch Log",
    designGoal:
      "Visual diary allowing photo uploads, tagging catches, tracking progress, and community sharing.",
    userBenefit:
      "Fosters engagement, community-building, and personalized progression tracking.",
  },
];

const FlyDexTable = () => {
  return (
    <>
      {/* Mobile view: Render as cards */}
      <div className="block md:hidden space-y-6">
        {tableData.map((row, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <p className="mb-2">
              <strong>Feature:</strong> {row.feature}
            </p>
            <p className="mb-2">
              <strong>Design Goal:</strong> {row.designGoal}
            </p>
            <p>
              <strong>User Benefit:</strong> {row.userBenefit}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop view: Render as table */}
      <div className="hidden md:block overflow-x-auto rounded-lg border-2 border-ink">
        <table className="w-full border-collapse mb-0">
          <thead>
            <tr className="bg-neutral">
              <th className="text-left p-4 text-h5 font-ppSupply font-bold text-ink border-b-2 border-ink">
                Feature
              </th>
              <th className="text-left p-4 text-h5 font-ppSupply font-bold text-ink border-b-2 border-ink">
                Design Goal
              </th>
              <th className="text-left p-4 text-h5 font-ppSupply font-bold text-ink border-b-2 border-ink">
                User Benefit
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-neutral transition-colors"
              >
                <td className="p-4 font-bold text-ink">{row.feature}</td>
                <td className="p-4 text-ink">{row.designGoal}</td>
                <td className="p-4 text-ink">{row.userBenefit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FlyDexTable; 