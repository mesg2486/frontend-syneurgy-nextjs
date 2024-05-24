import { IconType } from "react-icons";
import { BiHome } from "react-icons/bi";
import { FaUserGroup } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { MdAnalytics, MdOutlineLibraryBooks } from "react-icons/md";
import { TbPhotoVideo } from "react-icons/tb";
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
  drawer: boolean;
}

export const sidebarItems: ISidebarItem[] = [
  {
    label: "Home",
    link: "/dashboard",
    type: "common",
    icon: BiHome,
    group: "/dashboard",
    exact: true,
    drawer: true,
  },
  {
    label: "Recent Meetings",
    link: "/meetings",
    type: "user",
    icon: TbPhotoVideo,
    group: "/meetings",
    exact: true,
    drawer: true,
  },
  {
    label: "Behaviour Engine",
    link: "/behavior",
    type: "user",
    icon: MdAnalytics,
    group: "behavior",
    exact: false,
    drawer: true,
    subNav: [
      // {
      //   label: "Syllabus Management",
      //   link: "/instructor/syllabus-management/",
      // },
    ],
  },
  {
    label: "Challenges",
    link: "/challenges",
    type: "user",
    icon: MdOutlineLibraryBooks,
    group: "challenges",
    exact: false,
    drawer: false,
    subNav: [
      // {
      //   label: "Syllabus Management",
      //   link: "/instructor/syllabus-management/",
      // },
    ],
  },
  {
    label: "Teams",
    link: "/teams",
    type: "user",
    icon: FaUserGroup,
    group: "teams",
    exact: false,
    drawer: true,
    subNav: [
      // {
      //   label: "Syllabus Management",
      //   link: "/instructor/syllabus-management/",
      // },
    ],
  },
];
