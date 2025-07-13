### 5. Constraints and Assumptions

This section outlines the fixed limitations and foundational assumptions that govern the Ava Prime platform’s Phase I development. Recognizing these boundaries ensures clear expectations and aids in risk management.

---

#### 5.1 Constraints

Constraints are non-negotiable limits within which the system must operate.

- **5.1.1 Technology Stack:**  
  All Phase I development shall be implemented exclusively using **Node.js** with **TypeScript**. The core AI orchestration framework shall be **Google Genkit**.

- **5.1.2 Infrastructure Provider:**  
  Backend services including persistent memory (Firestore) and AI model hosting (Vertex AI) will be hosted solely on **Google Cloud Platform (GCP)**.

- **5.1.3 Interaction Modality:**  
  All interactions with Ava Prime in Phase I shall occur exclusively via a **command-line interface (CLI)**. No graphical user interface (GUI) will be developed during this phase.

- **5.1.4 Development Methodology:**  
  All changes, features, and code commits must strictly adhere to the **Directive Protocol**, requiring an approved directive logged and ratified prior to implementation.

- **5.1.5 Core Agent Structure:**  
  The system is constrained to a **two-agent simulation** model (Ava/Phoenix) during Phase I. Multi-agent architectures are reserved for future phases.

---

#### 5.2 Assumptions

Assumptions represent conditions believed true for planning but subject to external factors.

- **5.2.1 Cloud Service Reliability:**  
  Google Cloud services (Firestore, Firebase Auth) will maintain high availability and performance per their SLAs.

- **5.2.2 Genkit Framework Stability:**  
  Genkit is assumed stable and well-supported with no imminent breaking API changes.

- **5.2.3 LLM Competency:**  
  The underlying Large Language Model (Gemini) possesses sufficient reasoning and code-generation abilities to execute directives effectively.

- **5.2.4 Feedback Loop Integrity:**  
  The human supervisor (Commander) will provide clear, timely feedback during directive reviews to sustain effective two-agent collaboration.

- **5.2.5 Text-Based Memory Viability:**  
  Phase I’s text-based cognitive artifacts (`scroll-log.md`, directives) will not create performance bottlenecks, justifying deferral of semantic vector databases.

---

---

---
