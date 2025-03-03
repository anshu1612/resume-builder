import { useState } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Education from "./components/Education";

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
        {console.log(aboutData)}
        {console.log(achievements)}
        {console.log(experiences)}
        {console.log(educations)}
      </div>
    </>
  );
}

export default App;
