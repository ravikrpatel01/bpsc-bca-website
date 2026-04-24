import { GrAnnounce } from "react-icons/gr";

const AnnouncementBar = () => {
  const announcements = [
    "Admission for BCA (Duration: 3 Years) Session 2026-29 is Going On!",
    "External Examination of BCA, Session 2025-28 (Semester 1) will start from 02-05-2026.",
    "Extended Scholarship form submission/apply last date: 15-05-2026.",
    "Download your Semester 1 Exam Admit Card: https://www.vbuuniv.in/login",
  ];

  return (
    <div className="bg-yellow-100 border-t border-b px-6 py-2 flex items-center gap-4">
      <span className="bg-red-600 blink flex items-center gap-2 text-white px-3 py-1 text-xs rounded font-medium">
        <GrAnnounce size={22} />
        ANNOUNCEMENTS
      </span>
      <marquee>{announcements.join("   🔴   ")}</marquee>
    </div>
  );
};

export default AnnouncementBar;
