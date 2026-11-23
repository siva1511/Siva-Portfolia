import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description: "Return the portfolio projects Boya Siva Sai Kumar has built, with descriptions, tech stack, and GitHub links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const projects = [
      {
        name: "Smart Diet AI – Personalized Diet Plan Generator",
        description:
          "Developed an AI/ML-based application that analyzes medical reports and health parameters to generate personalized diet recommendations. The application uses OCR, Machine Learning and NLP to extract health information, detect potential health conditions, and generate personalized diet plans.",
        features: [
          "Medical report upload (PDF and images)",
          "OCR-based health parameter extraction",
          "Health condition detection using ML models",
          "Personalized diet plan generation",
          "AI-powered health explanations",
          "Downloadable PDF diet reports",
        ],
        tech: ["Python", "Streamlit", "Machine Learning", "Scikit-learn", "LightGBM", "EasyOCR", "Pytesseract", "NLP", "SQLite"],
        github: "https://github.com/siva1511/Smart-Diet-AI",
      },
      {
        name: "Weather App",
        description:
          "A simple weather application built with HTML, CSS, and JavaScript. Fetches real-time weather data and displays temperature, humidity, and conditions for any city.",
        features: [
          "Search weather by city name",
          "Displays temperature, humidity, and conditions",
          "Responsive design",
          "Real-time data via OpenWeatherMap API",
        ],
        tech: ["HTML", "CSS", "JavaScript", "Weather API"],
        github: "https://github.com/siva1511/Weather-app",
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
      structuredContent: { projects },
    };
  },
});
