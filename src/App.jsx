import { useState } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Achievements from "./components/Achievements";

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

  return (
    <>
      <NavBar />
      <div className="m-12">
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
          deleteAchievement={(index)=> setAchievements((achievements) => achievements.filter((_, i) => i !== index))}
        />
        {console.log(aboutData)}
        {console.log(achievements)}
      </div>
    </>
  );
}

export default App;
