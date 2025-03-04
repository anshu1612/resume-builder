import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Preview = ({
  aboutData,
  skills,
  achievements,
  educations,
  experiences,
  projects,
}) => {
  const previewRef = useRef(null);
  const handleDownloadPDF = () => {
    const input = previewRef.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <>
      <div ref={previewRef} className="grid grid-cols-3 shadow-lg mt-20">
        <div className="bg-teal-900 text-white p-7">
          <div className="mb-8 flex flex-col py-2 items-center">
           {aboutData.imageFile && <img
              className=" h-32 w-32 rounded-full object-cover"
              src={
                aboutData.imageFile
                  ? URL.createObjectURL(aboutData.imageFile)
                  : null
              }
            />}
            <h1 className="text-center mt-8 font-bold text-2xl">
              {aboutData.firstName +
                " " +
                aboutData.middleName +
                "  " +
                aboutData.lastName}
            </h1>
            <div className="mt-4 border border-t border-gray-300 w-12"></div>
            <h2 className="mt-2 font-semibold text-xl">
              {aboutData.designation}
            </h2>
          </div>
          <div className="py-2">
            <h2 className="font-bold text-lg">ABOUT</h2>
            <div className="my-2 border border-t border-teal-950/25 w-full"></div>
            <h3 className="text-sm my-1">{aboutData.phoneNo}</h3>
            <h3 className="text-sm my-1">{aboutData.email}</h3>
            <h3 className="text-sm my-1">{aboutData.address}</h3>
            <h3 className="text-sm my-1">{aboutData.summary}</h3>
          </div>
          <div className="py-2 my-10">
            <h2 className="font-bold text-lg">SKILLS</h2>
            <div className="my-2 border border-t border-teal-950/25 w-full"></div>
            {skills.map((skill, i) => (
              <h3 key={i} className="text-sm my-1">
                {skill.name}
              </h3>
            ))}
          </div>
        </div>
        <div className="col-span-2 p-7 pl-8 text-gray-900">
          <div className="py-2 mb-3">
            <h2 className="font-bold text-lg">ACHIEVEMENTS</h2>
            <div className="my-2 border border-t border-teal-950/25 w-full"></div>
            {achievements.map((achievement, i) => (
              <div key={i}>
                <h3 className="text-base  my-1 mt-4 font-semibold bg-gray-100">
                  {achievement.title}
                </h3>
                <h3 className="text-base my-2">{achievement.description}</h3>
              </div>
            ))}
          </div>
          <div className="py-2 mb-3">
            <h2 className="font-bold text-lg">EDUCATIONS</h2>
            <div className="my-2 border border-t border-teal-950/25 w-full"></div>
            {educations.map((education, i) => (
              <div key={i}>
                <h3 className="text-base  my-1 mt-4 font-semibold bg-gray-100">
                  {education.school}
                </h3>
                <div className="flex text-base my-2">
                  <h3 className="font-semibold mr-2">{education.degree}</h3>
                  <h3 className=" mr-2 italic">{education.city}</h3>
                  <h3 className="mr-2 bg-teal-900 text-white px-3 rounded-md">
                    {education.startDate}
                  </h3>
                  <h3 className="mr-2 bg-teal-900 text-white px-3 rounded-md">
                    {education.endDate}
                  </h3>
                </div>
                <h3 className="my-2">{education.description}</h3>
              </div>
            ))}
          </div>
          <div className="py-2 mb-3">
            <h2 className="font-bold text-lg">EXPERIENCE</h2>
            <div className="my-2 border border-t border-teal-950/25 w-full"></div>
            {experiences.map((experience, i) => (
              <div key={i}>
                <h3 className="text-base  my-1 mt-4 font-semibold bg-gray-100">
                  {experience.title}
                </h3>
                <div className="flex text-base my-2">
                  <h3 className="font-semibold mr-2">{experience.company}</h3>
                  <h3 className=" mr-2 italic">{experience.location}</h3>
                  <h3 className="mr-2 bg-teal-900 text-white px-3 rounded-md">
                    {experience.startDate}
                  </h3>
                  <h3 className="mr-2 bg-teal-900 text-white px-3 rounded-md">
                    {experience.endDate}
                  </h3>
                </div>
                <h3 className="my-2">{experience.description}</h3>
              </div>
            ))}
          </div>
          <div className="py-2 mb-3">
            <h2 className="font-bold text-lg">PROJECTS</h2>
            <div className="my-2 border border-t border-teal-950/25 w-full"></div>
            {projects.map((project, i) => (
              <div key={i}>
                <h3 className="text-base  my-1 mt-4 font-semibold bg-gray-100">
                  {project.projectName}
                </h3>
                <h3 className=" my-2 ">{project.link}</h3>
                <h3 className="my-2">{project.description}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={handleDownloadPDF}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Download
      </button>
    </>
  );
};

export default Preview;
