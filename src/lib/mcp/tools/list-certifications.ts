import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_certifications",
  title: "List certifications",
  description: "Return Boya Siva Sai Kumar's certifications and short-term internships.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const certifications = [
      {
        issuer: "Andhra Pradesh State Council of Higher Education",
        title: "Certificate of Completion - Artificial Intelligence & Machine Learning",
        completed: "July 21, 2025",
        description:
          "Short-Term Internship of 2 months on AI & ML organized by SmartBridge Educational Services Pvt. Ltd. in collaboration with APSCHE through G Pullaiah College Of Engineering & Technology, JNTUA.",
        certificateId: "EXT-APSCHE_AIML-46288",
        duration: "2 months",
        hallTicket: "23AT5A3103",
        mode: "Virtual",
      },
      {
        issuer: "Make Skilled",
        title: "Full Stack Development Bootcamp",
        completed: "December 4-9, 2023",
        description:
          "Full Stack Development Bootcamp organized as part of Corporate Innovation 2023, in partnership with Microsoft Partner Network.",
        certificateId: "23AT5A3103",
        score: "90",
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(certifications, null, 2) }],
      structuredContent: { certifications },
    };
  },
});
