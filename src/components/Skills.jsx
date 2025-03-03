import SectionHeading from "./SectionHeading";
import FormField from "./FormField";
import { MdAddBox } from "react-icons/md";
import { IoMdRemoveCircle } from "react-icons/io";

const Skills = ({
    skills,
    onChange,
    addSkill,
    deleteSkill,
  }) => {
  return (
    <>
    <SectionHeading heading={"SKILLS"} />
    {skills.map((skill, index) => (
      <div
        key={index}
        className="relative grid grid-cols-1 gap-6  p-6 border my-5 border-gray-300"
      >
        {index !== 0 && (
          <button
            className="absolute top-2 right-2  text-red-600 text-3xl"
            onClick={() => deleteSkill(index)}
          >
            <IoMdRemoveCircle />
          </button>
        )}
        <FormField
          name="name"
          label="Skill"
          placeholder=""
          type="text"
          value={skill.name}
          onChange={(e) => onChange(e, index)}
        />
        
      </div>
    ))}
    <button onClick={addSkill}>
      <MdAddBox className="text-blue-500 text-3xl" />
    </button>
  </>
  )
}

export default Skills