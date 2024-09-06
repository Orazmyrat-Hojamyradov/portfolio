import BackBtn from "@/components/BackBtn";
import Project from "@/components/Project";

export default function Projects() {
  return (
    <>
      <div className="header">
        <BackBtn />
        <h1>Projects</h1>
      </div>
      <div className="projects-box">
        <Project />
      </div>
    </>
  );
}
