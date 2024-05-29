import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { MdOutlineAddReaction } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="pt-16">
      <section className="bg-[#D7D0FF] py-26 md:py-36 ">
        <div className="flex justify-center">
          <div className="max-w-2xl text-center">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold mb-4">
              The Neuroscience of Collaboration
            </h2>
            <p className="opacity-60 font-medium">
              The science of synchrony is clear. Our brains and bodies possess
              an incredible ability to attune to each other – cognitively,
              emotionally, and physically. Research shows that when teams,
              couples, or even gamers in remote locations successfully sync up,
              their performance, cooperation, and emotional bonds strengthen and
              soar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7FD] py-20 md:py-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 sm:p-10">
            <div className="sm:pt-10">
              <h1 className="text-2xl font-bold mb-6">What is Synchrony?</h1>
              <p className="font-medium opacity-70">
                {" "}
                An essential element in high performing and durable teams,
                synchrony refers to the harmonization of neurological,
                emotional, and physiological patterns among individuals. This
                intentional alignment leads to enhanced feelings of connection,
                empathy, support, improved cooperation, and most markedly –
                engagement, openness and ability to learn, cognitive processing
                speed, and team performance.{" "}
              </p>
            </div>
            <div>
              <img
                className="object-cover rounded-md"
                src="https://www.syneurgy.com/wp-content/uploads/2024/01/Haka-New-Zealand-Women-Rugby.jpeg"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 sm:p-10">
            <div>
              <img
                className="object-cover rounded-md"
                src="https://www.syneurgy.com/wp-content/uploads/2023/12/science2.png"
              />
            </div>
            <div className="sm:pt-10">
              <h1 className="text-2xl font-bold mb-6">
                Understanding Synchrony
              </h1>
              <p className="font-medium opacity-70">
                High-performing teams have chemistry – the unique dynamic
                between its members that support and enhance connetion,
                engagement, and performance. This chemistry is often hailed as
                the secret sauce of team success. Advances in neuroscience make
                it possible to identify, understand, and align the synchronized
                biological – neurobiological, physiological, and behavioral –
                elements in and among team members.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B212F] py-20 md:py-28">
        <div className="container mx-auto space-y-6 text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl mb-20 text-white">
            Types of Interpersonal Synchrony
          </h2>
          <div className="grid grid-cols-3 gap-x-6 text-white">
            <div className="bg-[#323C51] p-5 rounded-lg text-left">
              <div className="size-10 rounded-md p-2 bg-slate-800 mb-4 text-[#76FD3F]">
                <LuBrain className="w-full h-full " />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Cognitive</h2>
              <p className="text-lg font-light">Synchrony</p>
              <div className="border-t-2 border-borders mt-4 pt-4">
                <h3 className="text-xl font-semibold mb-4 text-[#76FD3F]">
                  Synchrony of mental connection
                </h3>
                <p className="opacity-75 font-medium">
                  This involves the syncing up of bodily functions like heart
                  rate, breathing, or brain waves. Studies have shown that when
                  people are in close proximity or engaged in meaningful
                  interactions, their brains start to synchronize each
                  other&apos;s rhythms without conscious effort. This involves
                  the syncing up of brainwaves, mental states, and cognition.
                </p>
              </div>
            </div>
            <div className="bg-[#323C51] p-5 rounded-lg text-left">
              <div className="size-10 rounded-md p-2 bg-slate-800 mb-4 text-[#76FD3F]">
                <FaHeartbeat className="w-full h-full " />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Physiological</h2>
              <p className="text-lg font-light">Synchrony</p>
              <div className="border-t-2 border-borders mt-4 pt-4">
                <h3 className="text-xl font-semibold mb-4 text-[#76FD3F]">
                  Synchrony of physiological biomarkers
                </h3>
                <p className="opacity-75 font-medium">
                  Have you ever experienced or noticed how a team plays as if
                  coreographed, or dancers move in perfect harmony? That&apos;s
                  behavioral synchrony! When individuals coordinate their
                  actions towards a common goal, they enhance performance and a
                  reinforce a sense of unity and purpose.
                </p>
              </div>
            </div>
            <div className="bg-[#323C51] p-5 rounded-lg text-left">
              <div className="size-10 rounded-md p-2 bg-slate-800 mb-4 text-[#76FD3F]">
                <MdOutlineAddReaction className="w-full h-full " />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Behavioral</h2>
              <p className="text-lg font-light">Synchrony</p>
              <div className="border-t-2 border-borders mt-4 pt-4">
                <h3 className="text-xl font-semibold mb-4 text-[#76FD3F]">
                  Synchrony of actions, execution, and emotions
                </h3>
                <p className="opacity-75 font-medium">
                  It&apos;s the unspoken connection between people in their
                  gestures, speech patterns, or emotional responses. Think about
                  how close couples synchronize their heartbeats or how people
                  naturally fall into rhythm during conversations. That&apos;s
                  interpersonal synchrony fostering empathy and rapport.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7FD] py-20 md:py-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 sm:p-10">
            <div className="sm:pt-10">
              <h1 className="text-2xl font-bold mb-6">Why Synchrony Matters</h1>
              <p className="font-medium opacity-70">
                {" "}
                Synchrony is crucial for team performance, enhancing
                cooperation, empathy, and engagement. It facilitates a deeper
                understanding of each other&apos;s actions and intentions,
                leading to improved communication and collaboration. This
                alignment drives a more cohesive team dynamic, fostering an
                environment where individuals work together more effectively
                towards common goals. Synchrony serves as a foundational element
                for building high-performing, harmonious, and durable teams.{" "}
              </p>
            </div>
            <div>
              <img
                className="object-cover rounded-md"
                src="https://www.syneurgy.com/wp-content/uploads/2023/12/science3.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B212F] py-20 md:py-28">
        <div className="container mx-auto space-y-6 text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl mb-20 text-white">
            Just 3 steps to unfoldyour team&apos;s patterns
          </h2>
          <div className="grid grid-cols-3 gap-x-6 text-white">
            <div className="bg-[#323C51] p-5 rounded-lg text-left">
              <div className="size-10 rounded-md p-2 bg-slate-800 mb-4 text-[#76FD3F]">
                <LuBrain className="w-full h-full " />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Cognitive</h2>
              <div className="border-t-2 border-borders mt-4 pt-4">
                <ul className="flex flex-col space-y-4">
                  <li>Upload your team meeting recording.</li>
                  <li>
                    Invite-only access ensures only authorized and permissioned
                    team members can see the analysis.
                  </li>
                  <li>
                    Privacy defaults and data anonymiztion keep your information
                    secure.
                  </li>
                  <li>
                    Users maintain full control of who sees what information on
                    the platform.
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-[#323C51] p-5 rounded-lg text-left">
              <div className="size-10 rounded-md p-2 bg-slate-800 mb-4 text-[#76FD3F]">
                <FaHeartbeat className="w-full h-full " />
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                Syneurgy AI Analysis
              </h2>
              <div className="border-t-2 border-borders mt-4 pt-4">
                <ul className="flex flex-col space-y-4">
                  <li>
                    Our platform analyzes elements of neurobiological,
                    physiological, and behavioral synchrony.
                  </li>
                  <li>
                    Brains + Bodies + Behaviors - are the foundational
                    components of connection, communication, and teamwork.
                  </li>
                  <li>
                    Understand these elements at the foundational level of our
                    biology.
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-[#323C51] p-5 rounded-lg text-left">
              <div className="size-10 rounded-md p-2 bg-slate-800 mb-4 text-[#76FD3F]">
                <MdOutlineAddReaction className="w-full h-full " />
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                The Right Next Step
              </h2>
              <div className="border-t-2 border-borders mt-4 pt-4">
                <ul className="flex flex-col space-y-4">
                  <li>
                    Receive personalized, individual and team behaviors to
                    incorporate into your daily practice that help to grow
                    ability in an incremental and natural way.
                  </li>
                  <li>
                    Receive meaningful data on how team behaviors improve
                    performance.
                  </li>
                  <li>
                    Build habits that support the key drivers of your specific
                    team&apos;s performance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7FD]">
        <div className=" container mx-auto py-24 text-center">
          <h2 className="text-4xl md:text-4xl font-semibold mb-4">
            Frequently asked questions
          </h2>
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

      <section className="bg-[#1B212F] py-24">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-6xl font-semibold">Glossary</h1>
          <div className="flex flex-col space-y-6 text-black text-left">
            {glossary?.map((glossary, index) => (
              <div key={index} className="w-full">
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  {glossary.alphabet}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {glossary.accordions?.map((accords, index) => (
                    <AccordionItem
                      key={index}
                      value={`${index}`}
                      className="text-left bg-white rounded-md border-none px-5"
                    >
                      <AccordionTrigger className="text-lg">
                        {accords.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-md opacity-80 font-medium ">
                        {accords.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto text-center ">
          <div className="">
            <div className="max-w-xl mx-auto flex justify-center mb-4">
              <img
                className="object-cover"
                src="https://www.syneurgy.com/wp-content/uploads/2023/12/users.png"
                alt="sync-img"
              />
            </div>
            <Button
              className="bg-primary text-foreground hover:bg-primary hover:text-primary-foreground rounded-xl mb-6"
              size={"lg"}
            >
              Get In Sync
            </Button>
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Ask anything about your meetings
              </h2>
              <p className="font-medium opacity-70">
                Join us on a journey to explore the captivating world of
                synchrony—its wonders, its impact, and its role in shaping our
                daily interactions. Discover how synchrony influences
                relationships, teamwork, emotional experiences, and more.
                Let&apos;s delve into the fascinating realm of synchronization
                that enriches our connections and experiences. performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

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

const glossary = [
  {
    alphabet: "A",
    accordions: [
      {
        title: "Alignment",
        content:
          "The state of being in agreement or coherence with others, often in terms of goals, values, or actions. For example, team members who are aligned share a common vision and work towards the same objectives.",
      },
    ],
  },
  {
    alphabet: "B",
    accordions: [
      {
        title: "Behavioral Metrics",
        content:
          "Measures of observable behaviors, actions, or movements that can provide insights into interpersonal dynamics or team processes. For example, the coordination of body language or gestures among team members may indicate behavioral synchrony.",
      },
      {
        title: "Behavioral Synchrony",
        content:
          "The temporal coordination of movements and actions between individuals. For example, when teammates synchronize their steps while walking together or coordinate their hand gestures during a presentation.",
      },
      {
        title: "Behavior Design (Field of Study by BJ Fogg)",
        content:
          "A field that explores how to design products, services, or environments to influence human behavior in a desired direction. For example, a team may apply behavior design principles to create interventions that promote interpersonal synchrony or collaborative behaviors.",
      },
      {
        title: "Behaviors",
        content:
          "Observable actions, reactions, or conduct exhibited by individuals or groups in response to internal or external stimuli. For example, team behaviors may include active listening, idea sharing, conflict resolution, or task coordination.",
      },
    ],
  },
  {
    alphabet: "C",
    accordions: [
      {
        title: "Cognitive Synchrony",
        content:
          "The alignment of thought processes, attention, and mental representations between individuals. For example, when team members share a common understanding of a problem or task and can anticipate each other’s needs and actions.",
      },
      {
        title: "Collective Performance",
        content:
          "The combined output or achievement of a group or team working together on a shared task or goal. For example, a team’s collective performance on a project can be enhanced by high levels of interpersonal synchrony and coordination among its members.",
      },
      {
        title: "Convergent Thinking",
        content:
          "The process of identifying a single, well-established solution to a problem by combining information from various sources. For example, a team engaged in convergent thinking may synthesize different ideas to arrive at a consensus solution.",
      },
    ],
  },
  {
    alphabet: "D",
    accordions: [
      {
        title: "Divergent Thinking",
        content:
          "The process of generating multiple, diverse ideas or solutions by exploring different possibilities and perspectives. For example, a team engaged in divergent thinking may brainstorm a wide range of creative ideas before converging on a solution.",
      },
    ],
  },
  {
    alphabet: "E",
    accordions: [
      {
        title: "Engagement",
        content:
          "The degree of involvement, attention, and emotional connection individuals have with each other or a shared task. For example, highly engaged team members are fully present, focused, and invested in the collaborative process.",
      },
    ],
  },
  {
    alphabet: "G",
    accordions: [
      {
        title: "Global Team Synchrony",
        content:
          "The overall alignment and coordination of behaviors, emotions, cognitive processes, and physiological states among all members of a team or group. For example, a globally synchronized team exhibits tight coupling of verbal and nonverbal cues, shared understanding, and cohesive collective action.",
      },
    ],
  },
  {
    alphabet: "H",
    accordions: [
      {
        title: "Habits",
        content:
          "Recurring patterns of behavior or tendencies that are acquired through repetition and become automatic or unconscious responses in certain situations. For example, a team may develop habits around communication styles, decision-making processes, or collaborative routines.",
      },
    ],
  },
  {
    alphabet: "I",
    accordions: [
      {
        title: "Influence",
        content:
          "Influence is having a vision or desired outcome, and then motivating or inspiring people to work together towards that vision, without using force or coercion. It is a personal and unofficial power derived from others’ deference to one’s character, ability or position. Influence grows out of well-nurtured relationships built on trust, credibility and adding value over time. For example, a leader who has established trust and credibility with their team can use their influence to inspire and motivate the team to work towards a shared vision or goal, without having to force or coerce them.",
      },
      {
        title: "Interactional Synchrony",
        content:
          "The mutual coordination and responsiveness between individuals during social interaction, involving the synchronization of behaviors, emotions, and physiological processes. For example, when a team leader and members engage in a synchronized back-and-forth exchange, with their verbal and nonverbal cues aligning and responding to each other.",
      },
      {
        title: "Interpersonal Entrainment",
        content:
          "The process by which individuals unconsciously synchronize their behaviors, emotions, or physiological processes with those of others. For example, when team members naturally align their posture, facial expressions, or breathing patterns with their teammates during a meeting.",
      },
      {
        title: "Interpersonal Synchrony",
        content:
          "The coordination or matching of behaviors, emotions, or physiological processes between individuals during social interaction. For example, when team members unconsciously mirror each other’s body language or speech patterns.",
      },
    ],
  },
  {
    alphabet: "M",
    accordions: [
      {
        title: "Mimicry",
        content:
          "The unconscious imitation or mirroring of another person’s behaviors, expressions, or mannerisms. For example, when a team member subtly mimics the hand gestures or facial expressions of another member during a discussion.",
      },
    ],
  },
  {
    alphabet: "N",
    accordions: [
      {
        title: "Neurobiological Metrics",
        content:
          "Measures of brain activity or neural processes that can reveal insights into cognitive processes, social interactions, or interpersonal dynamics. For example, inter-brain synchrony among team members may indicate shared attention or understanding.",
      },
    ],
  },
  {
    alphabet: "O",
    accordions: [
      {
        title: "Optimal Synchrony",
        content:
          "The ideal level of interpersonal synchrony that facilitates effective collaboration, coordination, and collective performance within a team or group. For example, a team may strive to achieve optimal synchrony by fostering synchronization during execution phases and desynchronization during ideation phases.",
      },
    ],
  },
  {
    alphabet: "P",
    accordions: [
      {
        title: "Persuasion",
        content:
          "Persuasion is the act of presenting a case or argument in such a way as to sway opinions, make people believe certain information, or motivate a decision or action. It is more of an “in the moment” skill using techniques like framing, fairness, timing etc. to get things done without necessarily having established trust beforehand. For example, using persuasive language, logic or emotional appeals to convince someone to buy a product or agree with a particular viewpoint, even if they don’t fully trust the persuader.",
      },
      {
        title: "Physiological Synchrony",
        content:
          "The coupling or alignment of autonomic physiological processes, such as heart rate, respiration, or brain activity, between individuals. For example, when teammates experience similar increases in heart rate during a stressful situation or their brain activity patterns become synchronized during a collaborative task.",
      },
      {
        title: "Psycho-physiological Metrics",
        content:
          "Measures of physiological processes, such as heart rate, respiration, or brain activity, that can provide insights into psychological states or interpersonal dynamics. For example, synchronization of heart rates among team members may indicate high engagement or emotional alignment.",
      },
      {
        title: "Psychological Safety",
        content:
          "A shared belief that the team environment is safe for interpersonal risk-taking, expressing oneself without fear of negative consequences. For example, teams with high psychological safety encourage members to voice concerns, admit mistakes, and offer innovative ideas.",
      },
    ],
  },
  {
    alphabet: "R",
    accordions: [
      {
        title: "Rapport",
        content:
          "A close and harmonious relationship characterized by mutual understanding, trust, and synchrony between individuals. For example, when team members have developed a strong rapport, they can anticipate each other’s needs and work together seamlessly.",
      },
    ],
  },
  {
    alphabet: "S",
    accordions: [
      {
        title: "Sentiment",
        content:
          "The overall emotional tone or attitude expressed by individuals or a group. For example, a positive team sentiment can foster enthusiasm, optimism, and a supportive atmosphere.",
      },
      {
        title: "Social Cohesion",
        content:
          "The degree of unity, closeness, and solidarity within a group or team, often facilitated by interpersonal synchrony. For example, teams with high social cohesion exhibit greater coordination, cooperation, and collective performance.",
      },
    ],
  },
  {
    alphabet: "T",
    accordions: [
      {
        title: "Trust",
        content:
          "The firm belief in the reliability, integrity, and ability of others. For example, trust among team members fosters open communication, vulnerability, and a willingness to depend on one another.",
      },
      {
        title: "Types of Communication",
        content:
          "Emotional: Communication centered on expressing or evoking emotions, feelings, or personal experiences. For example, sharing stories, offering empathy, or building emotional connections.\nPractical: Communication focused on exchanging factual information, instructions, or task-related details. For example, providing directions, sharing data, or coordinating logistics.\nSocial: Communication aimed at fostering interpersonal relationships, rapport, and social bonds within a group. For example, casual conversations, jokes, or discussions about personal interests.",
      },
      {
        title: "Types of Meetings",
        content:
          "Brainstorming: Meetings specifically designed to encourage free-flowing generation of ideas without criticism or judgment. For example, sessions to ideate new product concepts or solutions.\nCreative: Meetings focused on generating new ideas, exploring possibilities, and fostering innovation. For example, brainstorming sessions or ideation workshops.\nDecision Making: Meetings aimed at analyzing information, evaluating options, and making choices or reaching conclusions. For example, strategy meetings or project review sessions.",
      },
    ],
  },
];
