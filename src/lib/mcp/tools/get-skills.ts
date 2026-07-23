import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_skills",
  title: "Get skills",
  description: "Return Boya Siva Sai Kumar's technical and soft skills.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const skills = {
      programmingLanguages: ["Java", "Python", "HTML", "CSS"],
      databases: ["MySQL", "MongoDB"],
      softSkills: ["Team Leadership", "Communication", "Problem Solving", "Creative Thinking"],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(skills, null, 2) }],
      structuredContent: skills,
    };
  },
});
