import React from "react";

export default function page() {
  return (
    <div className="pt-16">
      <section className="bg-[#F7F7FD] flex justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="text-left mb-10">
            <h2 className="max-w-3xl text-6xl font-semibold mb-4">Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team?.map((team) => (
              <div
                key={team.id}
                className="bg-white rounded-lg p-6 space-y-4 shadow-lg"
              >
                <div>
                  <img
                    className="object-cover rounded-md"
                    src={`${team.profile}`}
                  />
                </div>
                <div>
                  <h2 className="text-sky-600 font-semibold text-2xl">
                    {team.name}
                  </h2>
                  <p className="font-medium opacity-60">{team.position}</p>
                </div>
                <ul className="text-left space-y-2 list-disc pl-4">
                  {team.education?.map((education, index) => (
                    <li key={index} className="font-medium opacity-60">
                      {education}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const team = [
  {
    id: 1,
    profile:
      "https://www.syneurgy.com/wp-content/uploads/2024/01/michael-mannino-3.png",
    name: "Michael Mannino",
    position: "Co – CEO",
    education: [
      "Phd computational neuroscience",
      "12+ years applying neuroscience to peak performance",
      "6 years working in AI and Data Science",
      "Adjunct Professor of AI Ethics",
    ],
  },
  {
    id: 2,
    profile:
      "https://www.syneurgy.com/wp-content/uploads/2024/01/erwin-valencia.png",
    name: "Erwin Valencia",
    position: "Co – CEO",
    education: [
      "12+ yrs performance consultant for teams",
      "Expert in Behavior Design",
      "Columbia redesign team tasked w practical applied neuroscience",
    ],
  },
  {
    id: 3,
    profile:
      "https://www.syneurgy.com/wp-content/uploads/2024/01/shijia-gen.png",
    name: "Shijia Geng",
    position: "CTO",
    education: [
      "Masters in Engineering.",
      "Neuroscientist",
      "Deep work in artificial intelligence and machine learning, signal processing, platform design.",
    ],
  },
  {
    id: 4,
    profile:
      "https://www.syneurgy.com/wp-content/uploads/2024/01/david-ngo.png",
    name: "David Ngo",
    position: "CBO",
    education: [
      "Created Stanford’s first Behavior Design major.",
      "12+ years implementing Behavior Design solutions with teams and products of all sizes and industries.",
    ],
  },
];
