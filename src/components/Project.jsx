import SectionHeading from "./SectionHeading";
import FormField from "./FormField";
import { MdAddBox } from "react-icons/md";
import { IoMdRemoveCircle } from "react-icons/io";

const Project= ({
  projects,
  onChange,
  addProject,
  deleteProject,
}) => {
  return (
    <>
      <SectionHeading heading={"PROJECTS"} />
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative grid grid-cols-1 gap-6 md:grid-cols-3 p-6 border my-5 border-gray-300"
        >
          {index !== 0 && (
            <button
              className="absolute top-2 right-2  text-red-600 text-3xl"
              onClick={() => deleteProject(index)}
            >
              <IoMdRemoveCircle />
            </button>
          )}
          <FormField
            name="projectName"
            label="Project Name"
            placeholder=""
            type="text"
            value={project.projectName}
            onChange={(e) => onChange(e, index)}
          />
          <FormField
            name="link"
            label="Link"
            placeholder=""
            type="text"
            value={project.link}
            onChange={(e) => onChange(e, index)}
          />
          <FormField
            name="description"
            label="Description"
            placeholder=""
            type="text"
            value={project.description}
            onChange={(e) => onChange(e, index)}
          />
          
        </div>
      ))}
      <button onClick={addProject}>
        <MdAddBox className="text-blue-500 text-3xl" />
      </button>
    </>
  );
};

export default Project;
