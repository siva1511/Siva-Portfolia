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
        name: "GrainPalette - Rice Grain Classification System",
        description:
          "A deep learning-based classification system for rice grain types (Arborio, Basmati, Ipsala, Jasmine, Karacadag). Built with TensorFlow CNNs and a Streamlit UI for real-time predictions.",
        stats: { accuracy: "94%", models: 5, dataset: "1K+ samples", predictions: "real-time" },
        features: [
          "Multi-class rice grain classification",
          "Deep learning CNN architecture",
          "Interactive Streamlit web interface",
          "Comprehensive dataset management",
          "Real-time prediction capabilities",
        ],
        tech: ["Python", "TensorFlow", "Streamlit", "CNN", "Deep Learning"],
        github: "https://github.com/siva1511/GrainPalette",
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
