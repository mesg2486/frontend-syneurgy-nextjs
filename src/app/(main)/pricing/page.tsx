import { Button } from "@/components/ui/button";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function page() {
  return (
    <div className="pt-16">
      <section className="bg-[#F7F7FD] flex justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="max-w-3xl mx-auto text-6xl font-semibold mb-4">
              Simple, month-to-month pricing with Annual and Enterprise options
            </h2>
            <p className="">
              From individuals to enterprises, our clients always leave with a
              smile.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing?.map((price) => (
              <div
                key={price.id}
                className="bg-white rounded-lg p-6 space-y-4 shadow-lg"
              >
                <h2 className="text-sky-600 font-semibold text-2xl">
                  {price.title}
                </h2>
                <p className="font-medium opacity-60">{price.description}</p>

                <h5 className="text-2xl font-semibold">{price.price}</h5>
                <Button className="bg-black text-white hover:bg-black hover:text-white hover:opacity-90">
                  Get Started
                </Button>
                <ul className="text-left space-y-2 list-disc pl-4">
                  {price.features?.map((features, index) => (
                    <li key={index} className="font-medium opacity-60">
                      {features}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-800 ">
        <div className="container mx-auto text-white py-16 grid grid-cols-2 gap-x-8 items-center">
          <div>
            <img
              className="object-cover rounded-md"
              src="https://www.syneurgy.com/wp-content/uploads/2024/02/MT-at-SerLand-.jpg"
            />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-5xl font-medium mb-4">
              &quot;Syneurgy helped my teams communicate and connect more
              effectively and that drove clear results and ROI.&quot;
            </h2>
            <div>
              <p className="font-medium">MT</p>
              <p className="opacity-80">
                Marketing & Operations Manager, SerLand
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F7FD]">
        <div className=" container mx-auto py-16 text-center">
          <h2 className="text-6xl font-semibold mb-4">
            Frequently asked questions
          </h2>
          <p className="opacity-80 text-lg">
            Answers to commonly asked questions
          </p>
          <div className="pt-12">
            <div className="p-5">
              <Accordion
                defaultValue="1"
                type="single"
                collapsible
                className="space-y-4"
              >
                {faqs?.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={`${faq.id}`}
                    className="text-left bg-white rounded-md border-none px-5"
                  >
                    <AccordionTrigger className="text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-md opacity-80 font-medium ">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const pricing = [
  {
    id: 1,
    title: "Free",
    description: "Comprehensive Data Analysis.",
    price: "$0/month",
    features: ["No minutes for uploads", "Access to team data"],
  },
  {
    id: 2,
    title: "Pro",
    description: "Comprehensive Data Analysis and Behavior Engine.",
    price: "$29/month",
    features: [
      "7-day free trial",
      "200 minutes for uploads and analysis",
      "Behavior Engine included",
      "Management for teams and organizations",
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    description:
      "Enterprise Solutions, Comprehensive Data Analysis and Behavior Engine.",
    price: "$59/month",
    features: [
      "7-day free trial",
      "400 minutes for uploads and analysis",
      "Behavior Engine included",
      "Management for teams and organizations",
    ],
  },
  {
    id: 4,
    title: "Enterprise Plus",
    description:
      "Enterprise Plus Solutions, Comprehensive Data Analysis and Behavior Engine.",
    price: "$99/month",
    features: [
      "7-day free trial",
      "700 minutes for uploads and analysis or more than 100 users",
      "Behavior Engine included",
      "Management for teams and organizations",
    ],
  },
];

const faqs = [
  {
    id: 1,
    question: "How does Syneurgy protect employee data and ensure privacy?",
    answer:
      "We work hard to ensure your data is protected and secured, and we are in the process of becoming SOC 2 compliant and GDPR compliant.",
  },
  {
    id: 2,
    question: "Is it possible to see individual team member data",
    answer:
      "Syneurgy is designed not to show individual employee data unless individual team members opt-in.  This is to ensure data privacy and protect employees. The platform only shows aggregated data based on teams of 5 or more members.",
  },
  {
    id: 3,
    question: "How can I reset my password?",
    answer: "Please go to the Login page and click on Forgot password?",
  },
  {
    id: 4,
    question: "Can I get a free trial?",
    answer:
      "We do offer limited free trials, choose a plan and get in synchrony with your team!",
  },
  {
    id: 5,
    question: "How long does the onboarding process take?",
    answer:
      "Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.",
  },
  {
    id: 6,
    question: "Do you offer discounts?",
    answer:
      "Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.",
  },
  {
    id: 7,
    question: "Do you provide technical support?",
    answer:
      "Yes, we offer technical support to Syneurgy’s users. You can reach at support@syneurgy.ai for questions and concerns.",
  },
  {
    id: 8,
    question:
      "How long does it take for the metrics to appear on my dashboard? Does Syneurgy provide historical data?",
    answer:
      "After onboarding, and uploading your first meeting to the platform, and all tokens are assigned, we start processing data and, after a few hours, you will receive an email notifying you of summary data, and that your Dashboard will start displaying metrics. Syneurgy displays historical data of the last 30 to 90 days.",
  },
  {
    id: 9,
    question: "Which languages does Syneurgy's AI understand?",
    answer:
      "For the moment, our Neural Networks are trained in English. However, we are in the process of adding several languages to our system.",
  },
  {
    id: 10,
    question: "How accurate are Syneurgy's metrics?",
    answer:
      "The accuracy of the generated data is around 95%. We use state of the art models and are able to reach a high percentage of accuracy. Learn more about the AI process on our website.",
  },
  {
    id: 11,
    question: "Is there a minimum and maximum number of team members?",
    answer:
      "The minimum is 2 people per team, and the maximum should not exceed 12 team members.  Research shows that teams should not have more than 7 members for optimal performance.",
  },
  {
    id: 12,
    question:
      "How often is the system updated? When is new data made available?",
    answer:
      "Our system is updated every 24h, showing the data generated from the latest upload. On your dashboard you will have access to all previously uploaded meeting, as well as the aggregated data of your team, or if you are an executive, your company’s data. ",
  },
];
