import { IconType } from "react-icons";
import { FaCog } from "react-icons/fa";
import { FaPeoplePulling } from "react-icons/fa6";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { LuBrain } from "react-icons/lu";
import {
  MdCalendarMonth,
  MdGridView,
  MdOutlineLibraryBooks,
} from "react-icons/md";
import { RiChatVoiceLine, RiRobot3Line } from "react-icons/ri";
import { SlGraph } from "react-icons/sl";
import { TbLibraryPlus } from "react-icons/tb";

interface ISidebarSubItem {
  label: string;
  link: string;
  group: string;
  exact: boolean;
}

interface ISidebarItem {
  label: string;
  link: string;
  type: "student" | "instructor" | "common";
  icon: IconType;
  group: string; // route group
  subNav?: ISidebarSubItem[];
  badge?: string;
  exact: boolean;
}

export const sidebarItems: ISidebarItem[] = [
  {
    label: "Dashboard",
    link: "/",
    type: "common",
    icon: MdGridView,
    group: "/",
    exact: true,
  },
  {
    label: "Courses",
    link: "/courses",
    type: "student",
    icon: MdOutlineLibraryBooks,
    group: "/instructor",
    exact: false,
    subNav: [
      {
        label: "Explore",
        link: "/courses",
        group: "/courses",
        exact: false,
      },
      {
        label: "My Courses",
        link: "/courses/enrolled",
        group: "/courses/enrolled",
        exact: false,
      },
      {
        label: "Performance",
        link: "/courses/performance",
        group: "/courses/performance",
        exact: false,
      },
    ],
  },
  {
    label: "Course Management",
    link: "/instructor/dashboard",
    type: "instructor",
    icon: MdOutlineLibraryBooks,
    group: "instructor",
    exact: false,
    subNav: [
      // {
      //   label: "Syllabus Management",
      //   link: "/instructor/syllabus-management/",
      // },
      {
        label: "Published Courses",
        link: "/instructor/courses",
        group: "/instructor/courses",
        exact: false,
      },
      {
        label: "Course Outline Designer",
        link: "/instructor/designer/create",
        group: "/instructor/designer",
        exact: false,
      },
      {
        label: "Syllabus Builder",
        link: "/instructor/builder",
        group: "/instructor/builder",
        exact: true,
      },
      {
        label: "Lesson Planner",
        link: "/instructor/builder/lesson",
        group: "/instructor/builder/lesson",
        exact: false,
      },
      {
        label: "Activity And Assesment",
        link: "/instructor/course/activity-and-assesment",
        group: "/instructor/course/activity-and-assesment",
        exact: false,
      },
      {
        label: "Linkway Coustomization",
        link: "/instructor/course/linkway-coustomization",
        group: "/instructor/course/linkway-coustomization",
        exact: false,
      },
      {
        label: "Revision Tracking",
        link: "/instructor/course/revision-tracking",
        group: "/instructor/course/revision-tracking",
        exact: false,
      },
    ],
  },
  {
    label: "Student Engagement",
    link: "/instructor/student-engagement",
    type: "instructor",
    icon: FaPeoplePulling,
    group: "#",
    exact: false,
  },
  {
    label: "Monitoring & Insights",
    link: "/instructor/monitoring-insights",
    type: "instructor",
    icon: SlGraph,
    group: "#",
    exact: false,
  },
  {
    label: "Feedback & Evaluation",
    link: "/instructor/feedback-evaluation",
    type: "instructor",
    icon: HiOutlinePencilAlt,
    group: "#",
    exact: false,
  },
  {
    label: "Resources Library",
    link: "/instructor/resources",
    type: "instructor",
    icon: TbLibraryPlus,
    group: "#",
    exact: false,
  },
  {
    label: "NPC & Automation",
    link: "/instructor/npc-automation",
    type: "instructor",
    icon: RiRobot3Line,
    group: "#",
    exact: false,
  },
  {
    label: "Communication Tools",
    link: "/instructor/communication-tools",
    type: "instructor",
    icon: RiChatVoiceLine,
    group: "#",
    exact: false,
  },
  {
    label: "AI Enhanced Learning",
    link: "/instructor/ai-enhanced-learning",
    type: "instructor",
    icon: LuBrain,
    group: "#",
    exact: false,
  },
  {
    label: "Calendar",
    link: "/calendar",
    type: "common",
    icon: MdCalendarMonth,
    group: "calendar",
    exact: false,
  },
  {
    label: "Settings",
    link: "/settings/account",
    type: "common",
    icon: FaCog,
    group: "settings",
    exact: false,
    subNav: [
      {
        label: "Account",
        link: "/settings/account",
        group: "/settings/account",
        exact: true,
      },
    ],
  },
];
