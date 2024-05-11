import { IconType } from "react-icons";
import { BiHome } from "react-icons/bi";
import { GrGroup } from "react-icons/gr";
import { MdOutlineLibraryBooks } from "react-icons/md";
// import { PiVideoConferenceLight } from "react-icons/pi";

interface ISidebarSubItem {
  label: string;
  link: string;
  group: string;
  exact: boolean;
}

interface ISidebarItem {
  label: string;
  link: string;
  type: "user" | "admin" | "common";
  icon: IconType;
  group: string; // route group
  subNav?: ISidebarSubItem[];
  badge?: string;
  exact: boolean;
}

export const sidebarItems: ISidebarItem[] = [
  {
    label: "Home",
    link: "/dashboard",
    type: "common",
    icon: BiHome,
    group: "/dashboard",
    exact: true,
  },
  {
    label: "Recent Meetings",
    link: "/dashboard/meetings",
    type: "user",
    icon: GrGroup,
    group: "/dashboard/meetings",
    exact: true,
  },
  {
    label: "Behaviour Engine",
    link: "/dashboard/behaviour",
    type: "user",
    icon: MdOutlineLibraryBooks,
    group: "dashboard/behaviour",
    exact: false,
    subNav: [
      // {
      //   label: "Syllabus Management",
      //   link: "/instructor/syllabus-management/",
      // },
    ],
  },
  {
    label: "Recent Challenges",
    link: "/dashboard/challenges",
    type: "user",
    icon: MdOutlineLibraryBooks,
    group: "dashboard/challenges",
    exact: false,
    subNav: [
      // {
      //   label: "Syllabus Management",
      //   link: "/instructor/syllabus-management/",
      // },
    ],
  },
  {
    label: "Team Management",
    link: "/dashboard/challenges",
    type: "user",
    icon: MdOutlineLibraryBooks,
    group: "dashboard/challenges",
    exact: false,
    subNav: [
      // {
      //   label: "Syllabus Management",
      //   link: "/instructor/syllabus-management/",
      // },
    ],
  },
];
