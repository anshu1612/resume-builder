import { useState } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Preview from "./components/Preview";

function App() {
  const [aboutData, setAboutData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    resumeFile: null,
    designation: "",
    address: "",
    email: "",
    phoneNo: "",
    summary: "",
  });

  const [achievements, setAchievements] = useState([
    { title: "", description: "" },
  ]);
  const [experiences, setExperiences] = useState([
    {
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);
  const [educations, setEducations] = useState([
    {
      school: "",
      degree: "",
      city: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);
  const [projects, setProjects] = useState([
    { projectName: "", link: "", description: "" },
  ]);
  const [skills, setSkills] = useState([{ name: "" }]);

  return (
    <>
      <NavBar />
      <div className="m-6 md:m-12 ">
        <About
          aboutData={aboutData}
          aboutChange={(e) =>
            setAboutData({ ...aboutData, [e.target.name]: e.target.value })
          }
          aboutFileChange={(e) =>
            setAboutData({ ...aboutData, resumeFile: e.target.files[0] })
          }
        />
        <Achievements
          achievements={achievements}
          onChange={(e, index) => {
            setAchievements((prev) =>
              prev.map((achievement, i) =>
                i === index
                  ? { ...achievement, [e.target.name]: e.target.value }
                  : achievement
              )
            );
          }}
          addAchievement={() =>
            setAchievements((prev) => [...prev, { title: "", description: "" }])
          }
          deleteAchievement={(index) =>
            setAchievements((achievements) =>
              achievements.filter((_, i) => i !== index)
            )
          }
        />
        <Experience
          experiences={experiences}
          onChange={(e, index) => {
            setExperiences((experiences) =>
              experiences.map((experience, i) =>
                i === index
                  ? { ...experience, [e.target.name]: e.target.value }
                  : experience
              )
            );
          }}
          addExperience={() =>
            setExperiences((experiences) => [
              ...experiences,
              {
                title: "",
                company: "",
                location: "",
                startDate: "",
                endDate: "",
                description: "",
              },
            ])
          }
          deleteExperience={(index) =>
            setExperiences((experiences) =>
              experiences.filter((_, i) => i !== index)
            )
          }
        />
        <Education
          educations={educations}
          onChange={(e, index) => {
            setEducations((educations) =>
              educations.map((education, i) =>
                i === index
                  ? { ...education, [e.target.name]: e.target.value }
                  : education
              )
            );
          }}
          addEducation={() =>
            setEducations((educations) => [
              ...educations,
              {
                school: "",
                degree: "",
                city: "",
                startDate: "",
                endDate: "",
                description: "",
              },
            ])
          }
          deleteEducation={(index) =>
            setEducations((educations) =>
              educations.filter((_, i) => i !== index)
            )
          }
        />
        <Project
          projects={projects}
          onChange={(e, index) => {
            setProjects((projects) =>
              projects.map((project, i) =>
                i === index
                  ? { ...project, [e.target.name]: e.target.value }
                  : project
              )
            );
          }}
          addProject={() =>
            setProjects((projects) => [
              ...projects,
              {
                projectName: "",
                link: "",
                description: "",
              },
            ])
          }
          deleteProject={(index) =>
            setProjects((projects) => projects.filter((_, i) => i !== index))
          }
        />
        <Skills
          skills={skills}
          onChange={(e, index) => {
            setSkills((skills) =>
              skills.map((skill, i) =>
                i === index
                  ? { ...skill, [e.target.name]: e.target.value }
                  : skill
              )
            );
          }}
          addSkill={() =>
            setSkills((skills) => [
              ...skills,
              {
                name: "",
              },
            ])
          }
          deleteSkill={(index) =>
            setSkills((skills) => skills.filter((_, i) => i !== index))
          }
        />
        <Preview aboutData={aboutData}/>

        {console.log(aboutData)}
        {console.log(achievements)}
        {console.log(experiences)}
        {console.log(educations)}
      </div>
    </>
  );
}

export default App;
