import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Return Boya Siva Sai Kumar's headline profile: full name, tagline, short bio, and social links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Boya Siva Sai Kumar",
      tagline: "Computer Science & AI Engineer",
      bio: "Final-year B.Tech student specializing in Computer Science and Engineering with AI at G. Pullaiah College of Engineering and Technology, Kurnool. Passionate about AI, full-stack development, painting, music, and writing.",
      links: {
        linkedin: "https://www.linkedin.com/in/siva-sai-251b04280",
        github: "https://github.com/siva1511",
        portfolio: "https://siva-02.lovable.app",
        email: "sivasai78342@gmail.com",
      },
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
