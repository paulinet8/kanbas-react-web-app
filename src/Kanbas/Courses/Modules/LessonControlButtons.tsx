import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

{/* a component that serves as the module lesson status
    using the green checkmark component */}

export default function LessonControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
