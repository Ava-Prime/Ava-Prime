# Directive: Draft PRD Section 8 - Integration with Existing Projects and Knowledge

## Status: In-Progress

### Output: Draft Text for PRD Section 8

---

### 8. Integration with Existing Projects and Knowledge

This section defines the protocols by which Ava Prime ingests, analyzes, and integrates pre-existing, and potentially incomplete, projects. The goal is not merely to read files, but to perform a cognitive archeology: to resurrect intent, harvest valuable concepts, and translate unstructured history into a structured, actionable future within its own cognitive framework. This capability is foundational to Ava's role as an evolving co-architect.

#### 8.1 Phase 1: Knowledge Ingestion and Triage

The initial process of creating an inventory and assessing the raw materials of a legacy project.

-   **8.1.1 Directory Scanning and Indexing:** Upon being directed at a target project folder, Ava Prime shall perform a recursive scan of the entire directory tree. It will generate a metadata index (`project-manifest.json`) containing file paths, types, sizes, and last-modified dates.
-   **8.1.2 Content-Type Triage:** The system will classify each file into high-level categories (e.g., `SourceCode`, `Documentation`, `Configuration`, `MediaAsset`, `CognitiveArtifact`). This triage informs the priority and method of analysis in the next phase.

#### 8.2 Phase 2: Semantic Analysis and Intent Inference

The core cognitive process of understanding "what this project was meant to be."

-   **8.2.1 High-Value Target Analysis:** The system will prioritize the analysis of high-value targets identified during triage, such as `README.md`, `package.json`, `.docs/` directories, and source files with significant comment density.
-   **8.2.2 Inference of Project Genesis:** By analyzing project descriptions, dependencies, and high-level documentation, the system will generate a "Project Genesis Summary." This is a concise, natural-language document outlining the project's apparent purpose, primary technologies, and original goals.
-   **8.2.3 Identification of Latent Tasks:** The system shall scan for explicit and implicit tasks, such as comments containing `TODO`, `FIXME`, `HACK`, or feature descriptions in documentation that do not appear to have corresponding implementations in the source code.

#### 8.3 Phase 3: Knowledge Structuring and Integration

The process of converting inferred intent into the structured format of the Directive Protocol.

-   **8.3.1 Draft Directive Generation:** For clearly defined, un-implemented features or `TODO` items, the system shall generate new, draft `.md` files in the `/directives` folder. For example, a `//TODO: Implement user authentication` comment would result in a draft `directives/implement-user-authentication.md`.
-   **8.3.2 Semantic Linking:** Each generated directive or task will contain a reference back to its source artifact(s) within the legacy project, ensuring full traceability from new plan to old idea.

#### 8.4 Phase 4: Archiving and Deferred Cognition

The process of preserving valuable but not immediately actionable ideas.

-   **8.4.1 Creation of a "Cognitive Backlog":** Ideas, architectural notes, or aspirational goals that are too vague for an immediate directive will be captured and stored in a dedicated `cognitive-backlog.md` file.
-   **8.4.2 Preservation of Legacy Artifacts:** Each entry in the backlog will be preserved with its original context and a link to its source. This ensures that no potentially valuable thought is lost, allowing the system (or the Commander) to resurrect these ideas for future consideration when the time is right.

---

---

---