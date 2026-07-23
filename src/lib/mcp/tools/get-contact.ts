import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact",
  title: "Get contact info",
  description: "Return Boya Siva Sai Kumar's public contact details (email, phone, location, social links).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const contact = {
      email: "sivasai78342@gmail.com",
      phone: "+91 6300389607",
      location: "Kurnool, Andhra Pradesh, India",
      linkedin: "https://www.linkedin.com/in/siva-sai-251b04280",
      github: "https://github.com/siva1511",
      portfolio: "https://siva-02.lovable.app",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
      structuredContent: contact,
    };
  },
});
