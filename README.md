# HEALTH GUARD -MAPPING SYSTEM

## Team Name
InnovateAI

## Hackathon
JNTUGV Hackathon 2025

## Problem Statement
Rural healthcare monitoring is largely manual and reactive. ASHA workers collect
health survey data in villages, but the lack of real-time analysis makes it
difficult for authorities to identify disease clusters early and respond
effectively.

## Proposed Solution
PSCMR is an AI-powered village health mapping platform that enables ASHA workers
to submit health survey data digitally. The system uses AI to analyze the data,
identify health risks, classify severity levels, and visualize affected areas
on a village map for proactive government intervention.

## Key Features
- Digital ASHA worker survey input
- AI-based health risk analysis
- Severity classification (Low / Medium / High)
- Village-level health visualization
- Scalable web-based architecture

## Tech Stack
- Frontend: React + TypeScript + Vite
- Backend: Node.js + Express
- AI: Google Gemini API
- Tools: GitHub, VS Code

## AI Prompt Design
The AI component uses a carefully engineered prompt to convert unstructured ASHA
survey data into structured health insights.

##file structure
healthguard-village-mapping/
│
├── components/
│   ├── AshaForm.tsx          # ASHA worker survey input form
│   └── VillageMap.tsx       # Village health visualization / map
│
├── services/
│   └── geminiService.ts     # AI prompt + Gemini API integration
│
├── server/
│   └── api.js               # Backend API for AI requests
│
├── App.tsx                  # Main React application
├── index.tsx                # React entry point
├── index.html               # HTML root file
│
├── package.json             # Project dependencies & scripts
├── package-lock.json        # Dependency lock file
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
│
├── README.md                # Problem statement + prompts + structure
│
└── .gitignore               # Ignore node_modules, env files
