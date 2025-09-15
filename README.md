AI-Assisted Web App Builder: A Prototype

This project is a prototype of a platform that enables non-technical users to create and deploy full-stack web applications using intuitive drag-and-drop tools. The platform integrates with AI-assisted code generation to simplify the development process. As a Minimum Viable Product (MVP), this project focuses on demonstrating the core functionality and technical feasibility within a tight deadline.

<br>

* Key Technologies 💻

Next.js 14: A production-ready React framework for building full-stack applications.

Supabase: An open-source Firebase alternative providing a robust database and user authentication.

Tailwind CSS: A utility-first CSS framework for efficient and rapid styling.

OpenRouter API: An API for AI models that powers the AI-assisted code generation.

Node.js: The JavaScript runtime environment used for the backend logic.

<br>

* Getting Started 🚀

Follow these steps to get a copy of the project running on your local machine for evaluation.

Prerequisites

Node.js (LTS version recommended) and npm installed.

A Supabase project and an OpenRouter account with API credentials.

Step-by-Step Instructions

Clone the repository:

Bash
git clone https://github.com/dervish2004/AI_Builder.git
Navigate into the project directory:

Bash
cd AI_Builder
Install dependencies:

Bash
npm install
This command will download all the necessary packages and create the node_modules folder.

Set up Environment Variables:
Create a new file in the project's root directory named .env.local and add the following keys. These are intentionally kept out of the repository for security.

NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
OPENROUTER_API_KEY=YOUR_OPENROUTER_API_KEY
Run the development server:

Bash
npm run dev
Your application will be accessible at http://localhost:3000.

Note for Examiners: To run the project in production mode, use the following commands:

Bash
npm run build
npm start
<br>

* How to Use the Application 🌐

Once the application is running, you can begin creating a web page using the drag-and-drop interface.

1. Drag-and-Drop Elements

On the left-hand side of the screen, you will find a panel with various UI components (e.g., buttons, text boxes, images).

Click and drag any of these components and drop them onto the main canvas area to add them to your web page.

2. Configure with AI Assistant

Select a component on the canvas by clicking on it.

A properties panel will appear, allowing you to customize its appearance and behavior.

Use the integrated AI assistant to generate code snippets or content. For example, you can tell the AI, "Create a button that says 'Learn More' and links to the About page," and it will generate the necessary code.

3. See Live Previews

The application provides a real-time preview of your web page as you build it. You can see how your design looks instantly without needing to refresh the page.

  \\  ***  Please check the AI-Builder (demo video) for a quick walkthrough.  ***  //

<br>

* Project Status

This prototype is a working MVP that successfully demonstrates the core functionality of the platform. All major features, including the drag-and-drop interface, AI-assisted code generation, and database integration, have been implemented and tested.

<br>

* Contact

Name: Dervish Talari
GitHub: dervish2004
