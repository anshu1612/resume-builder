import SectionHeading from "./SectionHeading";
import FormField from "./FormField";
import { MdAddBox } from "react-icons/md";
import { IoMdRemoveCircle } from "react-icons/io";

const Experience = ({
  experiences,
  onChange,
  addExperience,
  deleteExperience,
}) => {
  return (
    <>
      <SectionHeading heading={"EXPERIENCE"} />
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="relative grid grid-cols-1 gap-6 md:grid-cols-3 p-6 border my-5 border-gray-300"
        >
          {index !== 0 && (
            <button
              className="absolute top-2 right-2  text-red-600 text-3xl"
              onClick={() => deleteExperience(index)}
            >
              <IoMdRemoveCircle />
            </button>
          )}
          <FormField
            name="title"
            label="Title"
            placeholder=""
            type="text"
            value={experience.title}
            onChange={(e) => onChange(e, index)}
          />
          <FormField
            name="company"
            label="Company/Organization"
            placeholder=""
            type="text"
            value={experience.company}
            onChange={(e) => onChange(e, index)}
          />
          <FormField
            name="location"
            label="Location"
            placeholder=""
            type="text"
            value={experience.location}
            onChange={(e) => onChange(e, index)}
          />
          <FormField
            name="startDate"
            label="Start Date"
            type="date"
            value={experience.startDate}
            onChange={(e) => onChange(e, index)}
          />
          <FormField
            name="endDate"
            label="End Date"
            type="date"
            value={experience.endDate}
            onChange={(e) => onChange(e, index)}
          />
          <FormField
            name="description"
            label="Description"
            placeholder=""
            type="text"
            value={experience.description}
            onChange={(e) => onChange(e, index)}
          />
        </div>
      ))}
      <button onClick={addExperience}>
        <MdAddBox className="text-blue-500 text-3xl" />
      </button>
    </>
  );
};

export default Experience;
