# HEALTH GUARD - AI Powered MAPPING SYSTEM

## Team Name
InnovateAI
from 2nd year b-tech of NRIIT

## Hackathon
JNTUGV Hackathon 2025
GenAI -versity dec 2025 hackathon

## 1.PROJECT TITLTE:
HEALTH GUARD-AI MAPPING SYSTEM
## “From Surveys to Solutions: Smarter Village Healthcare.”-----


## PPT PRESENTATION VIDEO OF OUR HEALTH GUARD-AI POWERED MAPPING SYSTEM 
https://youtu.be/azHeoQalU8M?si=orLlKKLmXWCVe5ew


## 2.Problem Statement
Rural healthcare monitoring is largely manual and reactive. ASHA workers collect
health survey data in villages, but the lack of real-time analysis makes it
difficult for authorities to identify disease clusters early and respond
effectively.
## Proposed Solution
PSCMR is an AI-powered village health mapping platform that enables ASHA workers
to submit health survey data digitally. The system uses AI to analyze the data,
identify health risks, classify severity levels, and visualize affected areas
on a village map for proactive government intervention.


## 3.VISUAL DEMO
## i.ASHA WORKERS PORTAL
<img width="1877" height="854" alt="image" src="https://github.com/user-attachments/assets/d67ace53-a6ff-42ec-b5a2-89c786858acd" />

## ii.GOVT DASHBOARD
<img width="1919" height="847" alt="image" src="https://github.com/user-attachments/assets/4b11033e-aa55-4220-833e-f88f48918865" />


## ARCHITECTURE
1. ASHA WORKER SURVEY COLLECTION
START
  ↓
ASHA Worker opens HealthGuard AI Portal
  ↓
Enter Worker Name
  ↓
Enter Allotted Village
  ↓
Fetch Location (GPS / Find Coords)
  ↓
Select Sanitation Status
   → Good
   → Ok
   → Worst

🩺 2. HEALTH DATA INPUT
Enter Number of Affected People
  ↓
Is Disease Known?
   ├── YES → Enter Disease Name
   └── NO  → Leave Blank
  ↓
Enter Key Symptoms (Mandatory)
  ↓
Enter Additional Notes (Optional)
  ↓
Submit Survey

🤖 3. AI PROCESSING & DISEASE PREDICTION
Survey Submitted
  ↓
Data sent to AI Engine
  ↓
AI analyzes:
   • Symptoms
   • Sanitation condition
   • Affected count
   • Location history

Is Disease Provided?
   ├── YES → Validate disease severity
   └── NO  → AI predicts disease from symptoms

AI Outputs:
   • Predicted Disease
   • Outbreak Probability (%)
   • Risk Score

🧠 4. RISK ANALYSIS & ZONE CLASSIFICATION
AI Risk Engine evaluates:
   • No. of cases
   • Population
   • Sanitation
   • Disease type
   • Past outbreak data

Zone Decision:
   ├── High Risk → 🔴 RED ZONE
   ├── Medium Risk → 🟡 YELLOW ZONE
   └── Low Risk → 🟢 GREEN ZONE

🗺️ 5. REAL-TIME MAP UPDATE
Location plotted on Google Map
  ↓
Color-coded marker applied
  ↓
Cluster detection enabled
  ↓
Map updates in real time

Markers show:
   • Village Name
   • Active Cases
   • Zone Color

🏛️ 6. GOVERNMENT DASHBOARD VIEW
Government Officer opens Dashboard
  ↓
Views Live Health Map
  ↓
Search any Village / Area
  ↓
Clicks on Marker

Dashboard Displays:
   • Zone Status
   • Active Cases
   • Population
   • Reporter Details
   • Symptoms
   • AI Prediction

🚨 7. AUTOMATIC ALERT SYSTEM
Is Zone RED?
   ├── YES → Trigger Govt Alert
   │          ↓
   │     Display Warning Banner
   │          ↓
   │     Notify Authorities
   └── NO → Monitor Continuously

📋 8. AI-GENERATED ACTION PLAN
For RED / YELLOW Zones:
  ↓
AI generates Recommended Actions:
   • Dispatch medical team
   • Water quality testing
   • Sanitation cleanup
   • Awareness programs

Actions shown on Govt Dashboard

🔄 9. CONTINUOUS MONITORING LOOP
More ASHA Surveys Submitted
  ↓
AI Recalculates Risk
  ↓
Zone Updated (Red → Yellow → Green)
  ↓
Map Refreshes Automatically

🟢 END GOAL ACHIEVED
Early Disease Detection
  ↓
Faster Government Response
  ↓
Reduced Spread
  ↓
Lives Saved

########differences between existing and our project 
EXISTING SYSTEM
Symptoms → Hospital → Confirmation → Manual Report → Late Action
                   ❌ Reactive

                HEALTHGUARD AI
Symptoms → ASHA Survey → AI Prediction → Live Map → Govt Alert
                   ✅ Proactive
## 4.Key Features
- Digital ASHA worker survey input
- AI-based health risk analysis
- Severity classification (Low / Medium / High)
- Village-level health visualization
- Scalable web-based architecture

## 5.demo link
JNTUGV genaiversity hackathon 2025 dec
https://youtu.be/gZZ_Ru8J4KM?si=bhNwtgAlUUKJfyNf

## 6.TECHNICAL STACK
- Frontend: React + TypeScript + Vite
- Backend: Node.js + Express
- AI: Google Gemini API
- Tools: GitHub, VS Code
- 
- ## GITHUB LINK:
https://github.com/kagitha-santhipriya/health


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

## 7.INSTALLATION AND SETUP

 Installation and Setup

 Prerequisites
- Node.js (v18 or above)
- npm
- Git

 Steps to Run the Project

1. Clone the repository:
```bash
git clone https://github.com/your-username/healthguard.git
cd healthguard
2. Install dependencies:

bash
Copy code
npm install
3.Create a .env file in the root directory and add Firebase configuration:

env
4.Copy code
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
Start the application:

bash
Copy code
npm start
5.Open in browser:

arduino
Copy code -http://localhost:3000

## INITIAL PROMPT
Project Name: AI-Enabled Village Health Mapping System
Description:
A real-time web application where ASHA workers log in to report disease cases in their allotted villages. Each village appears on a Google India map with color-coded zones: red for high cases, yellow for moderate, and green when the issue is resolved. The government dashboard monitors these zones, enabling faster action. AI rules predict potential outbreaks and alert authorities for timely intervention.
Area of Interest:
Public health monitoring
Rural healthcare management
Real-time AI-driven decision support

## updated prompt
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

8.REAL WORLD IMPACT AND FUTURE SCOPE :
  ## Impact:
- Faster detection of outbreaks
- Reduces manual errors
- Real-time insights
- Saves lives through early intervention

  ## Future Scope:
- Predictive outbreak modelling
- Govt API integration
- SMS alerts
- Offline ASHA mobile app

## 9.TEAM AND ACKNOWLEDGEMENTS:
## Team NAME: InnovateAI
- Member 1 –K.SANTHI PRIYA   
- Member 2 –V.LIKHITHA  
- Member 3 – Y.PUJA SRI 

## Acknowledgements
- Faculty mentor for project guidance  
- Google AI Studio for AI assistance  
- Open-source libraries and documentation

## 10.LICENSE:

We used the MIT License, which allows others to use and modify the project while giving credit to the original authors.

