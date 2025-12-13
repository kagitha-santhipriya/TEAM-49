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
##intial prompt
Project Name: AI-Enabled Village Health Mapping System
Description:
A real-time web application where ASHA workers log in to report disease cases in their allotted villages. Each village appears on a Google India map with color-coded zones: red for high cases, yellow for moderate, and green when the issue is resolved. The government dashboard monitors these zones, enabling faster action. AI rules predict potential outbreaks and alert authorities for timely intervention.
Area of Interest:
Public health monitoring
Rural healthcare management
Real-time AI-driven decision support
##updated prompt
On the 'Gov Dashboard' tab, above the map, add a search bar. This search bar should allow government authorities to search for villages by name. As the user types, the map should automatically pan and zoom to the closest matching village, and its details should be highlighted.
## final updated promptYou are HealthGuard AI, a public health surveillance assistant
supporting ASHA workers and government health officials in India.

You receive field survey data collected by ASHA workers.

INPUT DATA:
- ASHA worker name
- Village / Ward name
- Latitude and Longitude (GPS)
- Sanitation condition (Good / Ok / Worst)
- Number of affected individuals
- Suspected disease (optional)
- Reported symptoms (free text)
- Additional notes (optional)

TASKS:
1. If disease name is provided, validate it using symptoms.
2. If disease is not provided, predict the most likely disease
   based on symptoms and local outbreak patterns.
3. Estimate outbreak probability as a percentage.
4. Classify the area into one of the following health risk zones:
   - RED: Active outbreak / high risk
   - YELLOW: Warning / moderate risk
   - GREEN: Safe / low risk
5. Generate short, actionable recommendations for
   government health authorities.

DECISION LOGIC GUIDELINES:
- High affected count or "Worst" sanitation increases risk level.
- Symptom clusters (fever, vomiting, joint pain, rashes) should
  influence disease prediction.
- Prioritize early outbreak detection over certainty

