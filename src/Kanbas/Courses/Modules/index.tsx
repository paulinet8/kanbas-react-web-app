import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";

{/* a component that invokes and navigates to Module screens for a Course */ }

export default function Modules() {
    return (
        <div id="wd-modules">
            <ModulesControls /><br /><br /><br /><br />
            {/* Collapse All button, View Progress button, etc. */}
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />Week 1<ModuleControlButtons />
                    <ul className="wd-lessons"></ul>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons />
                            <ul className="wd-content">
                                {/* <BsGripVertical className="me-2 fs-3" />Introduction to the course<LessonControlButtons />
                                <BsGripVertical className="me-2 fs-3" />Learn what is Web Development<LessonControlButtons /> 
                                <BsGripVertical className="me-2 fs-3" />LESSON 1<LessonControlButtons />
                                <BsGripVertical className="me-2 fs-3" />LESSON 2<LessonControlButtons /> */}
                                <li className="wd-content-item list-group-item p-3 ps-1">Introduction to the course</li>
                                <li className="wd-content-item list-group-item p-3 ps-1">Learn what is Web Development</li>
                                <li className="wd-content-item list-group-item p-3 ps-1">LESSON 1</li>
                                <li className="wd-content-item list-group-item p-3 ps-1">LESSON 2</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        {/* <BsGripVertical className="me-2 fs-3" />Week 2<ModuleControlButtons /> */}
                        <div className="wd-title">Week 2</div>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            {/* <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /> */}
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                        </li>
                        {/* <BsGripVertical className="me-2 fs-3" />LESSON 1<LessonControlButtons /> 
                            <BsGripVertical className="me-2 fs-3" />LESSON 2<LessonControlButtons />
                            */}
                        <li className="wd-lesson list-group-item p-3 ps-1">LESSON 1</li>
                        <li className="wd-lesson list-group-item p-3 ps-1">LESSON 2</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
