{/* a dashboard component that invokes and navigates to various courses */ }

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />  {/* Dashboard Title */}
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">  {/* Published Courses */}
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>  {/* Course 1 */}
                        <div className="card" >
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.jpg" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1000 CS Foundations 101
                                    </h5>
                                    <p className="card-text">
                                        Computer Science Foundations 101
                                    </p>
                                    <p className="card-text">
                                        Summer 2 2024 Semester
                                        Section 11111
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>  {/* Course 2 */}
                        <div className="card" >
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/1234/Home">
                                <img src="/images/2000.jpg" width="100%" />  {/* Image is generated using Google Gemini */}
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS2000 OOD
                                    </h5>
                                    <p className="card-text">
                                        Object Oriented Design
                                    </p>
                                    <p className="card-text">
                                        Summer 2 2024 Semester
                                        Section 11112
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>  {/* Course 3 */}
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/1234/Home">
                                <img src="/images/3000.jpg" width="100%" />  {/* Image is generated using Google Gemini */}
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS3000 Discrete Math
                                    </h5>
                                    <p className="card-text">
                                        Discrete Mathematics
                                    </p>
                                    <p className="card-text">
                                        Summer 2 2024 Semester
                                        Section 11113
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>  {/* Course 4 */}
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/1234/Home">
                                <img src="/images/4000.jpg" width="100%" />  {/* Image is generated using Google Gemini */}
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS4000 React and Node JS
                                    </h5>
                                    <p className="card-text">
                                        Full Stack Development
                                    </p>
                                    <p className="card-text">
                                        Summer 2 2024 Semester
                                        Section 11114
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>  {/* Course 5 */}
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/1234/Home">
                                <img src="/images/5000.jpg" width="100%" />  {/* Image is generated using Google Gemini */}
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5000 HCI
                                    </h5>
                                    <p className="card-text">
                                        Human Computer Interface Development
                                    </p>
                                    <p className="card-text">
                                        Summer 2 2024 Semester
                                        Section 11115
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>  {/* Course 6 */}
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/1234/Home">
                                <img src="/images/6000.jpg" width="100%" />  {/* Image is generated using Google Gemini */}
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS6000 Algorithms
                                    </h5>
                                    <p className="card-text">
                                        Algorithms
                                    </p>
                                    <p className="card-text">
                                        Summer 2 2024 Semester
                                        Section 11116
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>  {/* Course 7 */}
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/1234/Home">
                                <img src="/images/7000.jpg" width="100%" />  {/* Image is generated using Google Gemini */}
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS7000 Advanced SW Dev
                                    </h5>
                                    <p className="card-text">
                                        Advanced Software Development
                                    </p>
                                    <p className="card-text">
                                        Summer 2 2024 Semester
                                        Section 11117
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
