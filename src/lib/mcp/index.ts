import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import getEducation from "./tools/get-education";
import listProjects from "./tools/list-projects";
import getSkills from "./tools/get-skills";
import listCertifications from "./tools/list-certifications";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "siva-portfolio-mcp",
  title: "Boya Siva Sai Kumar Portfolio",
  version: "0.1.0",
  instructions:
    "Public read-only tools that expose Boya Siva Sai Kumar's portfolio: profile, education, projects, skills, certifications, and contact info. Use these to answer questions about his background, work, or how to reach him.",
  tools: [getProfile, getEducation, listProjects, getSkills, listCertifications, getContact],
});
