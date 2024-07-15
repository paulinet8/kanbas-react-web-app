import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

{/* a component that serves as the Kanbas navigation menu */ }

export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation" className="list-group rounded-0 
                position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
            style={{ width: 120 }}>
            <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/"
                className="list-group-item text-center bg-black border-0">
                <img src="/images/NEU.png" width="75px" /></a>
            <a id="wd-account-link" href="#/Kanbas/Account"
                className="list-group-item text-white bg-black text-center border-0">
                <FaRegCircleUser className="fs-1 text text-white" /><br />  {/* Icon is generated using React Icons */}
                Account</a>
            <a id="wd-dashboard-link" href="#/Kanbas/Dashboard" className="list-group-item text-center border-0
                bg-white text-danger">
                <AiOutlineDashboard className="fs-1 text-danger" /><br />  {/* Icon is generated using React Icons */}
                Dashboard</a>
            <a id="wd-course-link" href="#/Kanbas/Courses" className="list-group-item text-white
                bg-black text-center border-0">
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Courses</a>
            <a id="wd-calendar-link" href="#/Kanbas/Calendar" className="list-group-item text-center 
                text-white bg-black border-0">
                <IoCalendarOutline className="fs-1 text-danger" /><br />  {/* Icon is generated using React Icons */}
                Calendar</a>
            <a id="wd-inbox-link" href="#/Kanbas/Inbox" className="list-group-item text-center
                text-white bg-black border-0">
                <FaInbox className="fs-1 text-danger" /><br />  {/* Icon is generated using React Icons */}
                Inbox</a>
            <a id="wd-labs-link" href="#/Labs" className="list-group-item text-center
                text-white bg-black border-0">
                <IoSettingsOutline className="fs-1 text-danger" /><br />  {/* Icon is generated using React Icons */}
                Labs</a>
        </div>
    );
}
