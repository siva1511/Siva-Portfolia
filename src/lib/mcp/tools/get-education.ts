import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_education",
  title: "Get education",
  description: "Return Boya Siva Sai Kumar's education history from SSC through his current B.Tech degree.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const education = [
      {
        degree: "B.Tech in CSE-AI",
        institution: "G. Pullaiah College of Engineering and Technology, Kurnool",
        years: "2023-2026",
      },
      {
        degree: "Diploma in Mechanical Engineering",
        institution: "ESC Govt Polytechnic College Nandyal",
        years: "2020-2023",
      },
      {
        degree: "SSC",
        institution: "Sri Chaithyna EM High School",
        years: "2020",
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(education, null, 2) }],
      structuredContent: { education },
    };
  },
});
