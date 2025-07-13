# Challenge Log

This document outlines the current technical challenges and blockers preventing the project from moving forward. These issues will be revisited at a later stage.

## 1. Genkit Versioning and Breaking Changes
- **Challenge**: The latest versions of `@genkit-ai/*` packages appear to have significant breaking changes that are not yet reflected in the official documentation or publicly available examples.
- **Impact**: This prevents the use of the most recent Genkit features and causes build failures (e.g., `configureGenkit` is not exported).

## 2. Dependency Conflicts with Firebase
- **Challenge**: Downgrading Genkit to a known older version (`0.5.5`) to circumvent the breaking changes introduces a peer dependency conflict with `firebase-admin`. The older Genkit packages require `firebase-admin@^12.2.0`, while the project is on `^13.4.0`.
- **Impact**: This conflict prevents a clean installation of dependencies and forces the use of `--legacy-peer-deps`, which can lead to an unstable and potentially broken runtime environment.

## 3. Transitive Dependency Hell
- **Challenge**: The older Genkit versions have transitive dependencies (e.g., `@opentelemetry/api`, `@opentelemetry/sdk-trace-base`) that are incompatible with each other in the context of this project.
- **Impact**: This results in complex type errors during the TypeScript compilation, making the project un-buildable even when the primary dependency conflicts are bypassed.

## 4. Unstable Build Environment
- **Challenge**: The combination of the issues above means the project is currently not in a buildable state.
- **Impact**: No new code can be compiled or tested, which completely blocks all development progress.

## 5. Genkit Tooling and Scaffolding
- **Challenge**: The `genkit` CLI tool does not seem to have a straightforward, non-interactive way to initialize a new project (`genkit init` is not a recognized command or is interactive without a clear non-interactive flag).
- **Impact**: This makes it difficult to generate a known-good project structure and configuration to use as a baseline for troubleshooting.
