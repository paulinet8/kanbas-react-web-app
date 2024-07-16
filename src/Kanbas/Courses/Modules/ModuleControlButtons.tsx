import { BsPlus } from "react-icons/bs";

{/* a component that serves as the different
    status buttons for the Module including
    Bootstrap plus icon */}

{/* export default function ModuleControlButtons() {
    return ()
} */}

export default function BsGripVertical() {
    return (
        <span className="me-1 position-relative">
            <BsPlus style={{ top: "2px" }}
                className="text-success me-1 position-absolute fs-5" />
        </span>
    );
}
   