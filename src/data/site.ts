import dashboardImg from "../assets/img/dashboard.png";
import prayerTimesImg from "../assets/img/prayer-times.png";
import miniWidgetImg from "../assets/img/mini-widget.png";
import settingsImg from "../assets/img/settings.png";
import notificationsImg from "../assets/img/notifications.png";

export const APP_NAME = "Salati Tunisia";
export const APP_NAME_ARABIC = "صلاتي تونس";

export const REPO_URL = "https://github.com/mohamedamine-code/prayer_TN";
export const RELEASES_URL = `${REPO_URL}/releases`;
export const ISSUES_URL = `${REPO_URL}/issues`;

export const RELEASE_VERSION = "1.0.2";
export const DOWNLOAD_URL =
  "https://github.com/mohamedamine-code/prayer_TN/releases/download/untagged-d2b725ae9e4728e5afb1/Salati-Tunisia-Setup-1.0.2.exe";
export const INSTALLER_FILE = "Salati-Tunisia-Setup-1.0.2.exe";

export const HERO_EYEBROW = "Made for Tunisia 🇹🇳";

export type Screenshot = {
  id: string;
  src: string;
  alt: string;
  windowTitle: string;
  title: string;
  description: string;
  span: string;
  aspect: string;
  width: number;
  height: number;
};

export const SCREENSHOTS: Screenshot[] = [
  {
    id: "dashboard",
    src: dashboardImg,
    alt: "Salati Tunisia main dashboard showing the next prayer countdown for Fajr and the full daily schedule",
    windowTitle: "Salati Tunisia — Dashboard",
    title: "Main Dashboard",
    description:
      "Your daily prayer schedule, next prayer countdown and essential information in one place.",
    span: "lg:col-span-7",
    aspect: "aspect-[16/9]",
    width: 1920,
    height: 1080,
  },
  {
    id: "prayer-times",
    src: prayerTimesImg,
    alt: "All five daily prayers with their Iqama times, shown in the light theme",
    windowTitle: "Salati Tunisia — Prayer Times",
    title: "Prayer Times",
    description: "View all five daily prayers and their corresponding Iqama times.",
    span: "lg:col-span-5",
    aspect: "aspect-[16/9]",
    width: 1920,
    height: 1080,
  },
  {
    id: "mini-widget",
    src: miniWidgetImg,
    alt: "Compact floating desktop widget with a live countdown and the weekly prayer time strip",
    windowTitle: "Salati Tunisia — Mini Widget",
    title: "Mini Widget",
    description: "Keep prayer times visible with a compact floating desktop widget.",
    span: "lg:col-span-5",
    aspect: "aspect-[13/9]",
    width: 388,
    height: 270,
  },
  {
    id: "settings",
    src: settingsImg,
    alt: "Settings screen with Tunisian city selection and per-prayer Iqama adjustment controls",
    windowTitle: "Salati Tunisia — Settings · City & Iqama",
    title: "Settings",
    description:
      "Customize your city, language, notifications and application preferences.",
    span: "lg:col-span-7",
    aspect: "aspect-[16/9]",
    width: 1920,
    height: 1080,
  },
  {
    id: "notifications",
    src: notificationsImg,
    alt: "Notification settings per prayer with automatic update toggles and the about panel",
    windowTitle: "Salati Tunisia — Settings · Notifications",
    title: "Notifications & Updates",
    description:
      "Choose Adhan and Iqama alerts for each prayer, and let the app update itself quietly.",
    span: "lg:col-span-12",
    aspect: "aspect-[16/9]",
    width: 1920,
    height: 1080,
  },
];

export type Prayer = {
  name: string;
  arabic: string;
  hour: number;
  minute: number;
};

export const SAMPLE_PRAYERS: Prayer[] = [
  { name: "Fajr", arabic: "الفجر", hour: 5, minute: 12 },
  { name: "Dhuhr", arabic: "الظهر", hour: 12, minute: 31 },
  { name: "Asr", arabic: "العصر", hour: 15, minute: 36 },
  { name: "Maghrib", arabic: "المغرب", hour: 17, minute: 53 },
  { name: "Isha", arabic: "العشاء", hour: 19, minute: 9 },
];
