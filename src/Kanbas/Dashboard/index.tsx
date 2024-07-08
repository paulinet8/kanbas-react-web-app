{/* a dashboard component that invokes and navigates to various courses */}

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />  {/* Dashboard Title */}
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">  {/* Published Courses */}
                <div className="wd-dashboard-course">  {/* Course 1 */}
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS1000 CS Foundations 101
                        </a>
                        <p className="wd-dashboard-course-title">
                            Computer Science Foundations 101
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">  {/* Course 2 */}
                    <img src="/images/2000.jpg" width={200} />  {/* Image is generated using Google Gemini */}
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS2000 OOD
                        </a>
                        <p className="wd-dashboard-course-title">
                            Object Oriented Design
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">  {/* Course 3 */}
                    <img src="/images/3000.jpg" width={200} />  {/* Image is generated using Google Gemini */}
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS3000 Discrete Math
                        </a>
                        <p className="wd-dashboard-course-title">
                            Discrete Mathematics
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">  {/* Course 4 */}
                    <img src="/images/4000.jpg" width={200} />  {/* Image is generated using Google Gemini */}
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS4000 React and Node JS
                        </a>
                        <p className="wd-dashboard-course-title">
                            Full Stack Development
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">  {/* Course 5 */}
                    <img src="/images/5000.jpg" width={200} />  {/* Image is generated using Google Gemini */}
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS5000 HCI
                        </a>
                        <p className="wd-dashboard-course-title">
                            Human Computer Interface Development
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">  {/* Course 6 */}
                    <img src="/images/6000.jpg" width={200} />  {/* Image is generated using Google Gemini */}
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS6000 Algorithms
                        </a>
                        <p className="wd-dashboard-course-title">
                            Algorithms
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">  {/* Course 7 */}
                    <img src="/images/7000.jpg" width={200} />  {/* Image is generated using Google Gemini */}
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS7000 Advanced SW Dev
                        </a>
                        <p className="wd-dashboard-course-title">
                            Advanced Software Development
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
