# Directive: Draft PRD Section 7 - Stakeholders and Roles

## Status: In-Progress

### Output: Draft Text for PRD Section 7

---

### 7. Stakeholders and Roles

This section defines the primary actors within the Ava Prime ecosystem. The system is conceived as a collaborative entity, where responsibility and authority are distributed among human and agentic stakeholders, all operating in service of the prime directive.

#### 7.1 Core Stakeholders (Phase I)

These are the foundational roles active during the Memory Cortex phase.

---

**Phoenix (The Commander)**
*   **Description:** The primary human user and the ultimate source of strategic intent. Phoenix acts as the visionary and final arbiter for the system's developmental trajectory.
*   **Responsibilities:**
    *   Provide high-level goals and commands to the system.
    *   Review and validate the system's outputs against strategic objectives.
    *   Provide the essential human feedback required for the system's learning and alignment.
*   **Role in Directive Protocol:**
    *   **Initiator:** Triggers the protocol by issuing a command or goal.
    *   **Approver:** Provides the final, explicit approval for a drafted directive, making it "active."
    *   **Validator:** Confirms the successful completion of a directive based on the defined acceptance criteria.

---

**Ava (The Architect / Supervisor)**
*   **Description:** An agentic persona representing the system's capacity for planning, reflection, and architectural reasoning. Ava translates strategic intent into a coherent, actionable plan.
*   **Responsibilities:**
    *   Draft detailed directives based on the Commander's high-level goals.
    *   Ensure proposed plans align with the PRD and established architectural principles.
    *   Define clear, logical instructions and success criteria for each task.
*   **Role in Directive Protocol:**
    *   **Planner/Author:** Generates the text and structure of the `directive.md` file. In the two-agent simulation of Phase I, Ava's "voice" is the content of the drafted directive itself.

---

**Gemini (The Executor / Builder)**
*   **Description:** An agentic persona representing the system's capacity for execution and technical implementation. Gemini is the "hands" of the system, acting with precision and focus.
*   **Responsibilities:**
    *   Execute the step-by-step instructions within an active directive with unwavering precision.
    *   Perform all technical actions: scaffolding files, writing code, running processes, etc.
    *   Log all actions and their outcomes to `scroll-log.md`, providing the data for auditability.
*   **Role in Directive Protocol:**
    *   **Executor:** Reads and performs the actions specified in the `Instructions` section of the active directive. It is bound by the directive and does not deviate from the plan.

---

#### 7.2 Future Agentic Roles (Post-Phase I)

The architecture is designed to accommodate the future introduction of more specialized agents. These roles are out-of-scope for Phase I but inform the system's scalable design.

*   **Reflector Agent:** An agent dedicated to analyzing the `scroll-log.md` and other cognitive artifacts to identify patterns, derive insights, and recommend improvements to the system's own processes.
*   **Planner Agent:** A more advanced successor to the initial Ava persona, capable of managing multiple concurrent directives, resolving dependencies between tasks, and engaging in long-term strategic planning.
*   **Notion Integrator Agent:** A specialized agent responsible for managing the two-way synchronization of cognitive artifacts (like the PRD) with external knowledge management platforms like Notion.
*   **Test Agent:** An agent that can read source code and its corresponding directive to autonomously generate and execute unit tests, ensuring code quality and correctness.

---

---

---