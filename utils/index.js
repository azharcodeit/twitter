import { GoHome, GoSearch, GoBookmark, GoPerson } from "react-icons/go";
import { RiTwitterXFill } from "react-icons/ri";
import { PiBell } from "react-icons/pi";

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const getPostedTime = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const day = date.getDate();
  const month = monthNames[date?.getMonth()];
  const formattedDate = `${day} ${month?.slice(0, 3)} `;
  const timeDifference = now - date;
  const secondsPassed = Math.floor(timeDifference / 1000);
  const minutesPassed = Math.floor(timeDifference / (1000 * 60));
  const hoursPassed = Math.floor(timeDifference / (1000 * 60 * 60));

  let postedTime = "";

  if (secondsPassed < 60) {
    postedTime = secondsPassed + "s";
  } else if (minutesPassed < 60) {
    postedTime = minutesPassed + "m";
  } else if (hoursPassed < 24) {
    postedTime = hoursPassed + "h";
  } else {
    postedTime = formattedDate;
  }
  return postedTime;
};

export const getFormattedDate = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const day = date.getDate();
  const month = monthNames[date?.getMonth()];
  const year = date?.getFullYear();
  const formattedDate = `${day} ${month?.slice(0, 3)} ${year}`;

  return formattedDate;
};

export const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: RiTwitterXFill,
  },
  {
    title: "Home",
    icon: GoHome,
  },
  {
    title: "Explore",
    icon: GoSearch,
  },
  {
    title: "Notifications",
    icon: PiBell,
  },
  // {
  //   title: "Messages",
  //   icon: PiEnvelopeSimple,
  // },
  {
    title: "Bookmarks",
    icon: GoBookmark,
  },
  // {
  //   title: "Communities",
  //   icon: GoPeople,
  // },
  // {
  //   title: "Premium",
  //   icon: RiTwitterXFill,
  // },
  {
    title: "Profile",
    icon: GoPerson,
  },
  // {
  //   title: "More",
  //   icon: RiMoreLine,
  // },
];
