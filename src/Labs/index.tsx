import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";

{/* Pauline Truong
    This index.tsx is a component that invokes and navigates to various Lab functions */}

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>

      <br/>
      {/*Add link to GitHub repo after publishing A1 */}
      Deliverable: The following is a 
      <a id="wd-github" href="https://github.com/paulinet8/kanbas-react-web-app.gits">link</a>
       to the public GitHub repo for A1.

    </div>
  );
}
