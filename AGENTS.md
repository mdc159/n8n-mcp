# Repository Guidelines

## Project Structure & Module Organization
The MCP integration is centered in `src/`: orchestration in `src/mcp`, engine helpers in `src/services`, and shared contracts in `src/types`. Built artifacts and the CLI wrapper land in `dist/`. Tests are grouped under `tests/` (unit, integration, e2e), while deployment aids and references live in `deploy/`, `docs/`, and `scripts/`. Template catalogs and sample data reside in `templates/` and `data/`.

## Build, Test, and Development Commands
- `npm run build` – transpile TypeScript with `tsconfig.build.json` into `dist/`.
- `npm run dev` – rebuilds sources, refreshes templates, and validates packaging.
- `npm run start:http` / `npm run start:n8n` – boot the MCP server in HTTP or n8n modes.
- `npm run test` – execute Vitest; `npm run test:integration` and `npm run test:e2e` scope coverage.
- `npm run lint` (alias `npm run typecheck`) – verify types without emitting artifacts.
- `npm run test:coverage` – generate coverage reports in `coverage/`.

## Coding Style & Naming Conventions
Code is TypeScript-first with ES modules. Follow the prevalent two-space indentation, single quotes, and trailing commas for multi-line literals. Prefer named exports, keep HTTP entry points under `src/http-server*`, and collocate helper utilities inside `src/utils`. Use `PascalCase` for classes, `camelCase` for functions and variables, and `SCREAMING_SNAKE_CASE` for shared constants. Rebuild before committing so `dist/` mirrors `src/`.

## Testing Guidelines
Vitest drives all automated testing. Place new suites beside peers using the `*.test.ts` suffix (for example, `tests/unit/session-restoration.test.ts`). Integration and end-to-end suites depend on the sample SQLite stores in `data/` and may invoke `docker/` assets; use `npm run test:integration`, `npm run test:mcp-endpoint`, or `npm run test:e2e` when validating those flows. Track coverage with `npm run test:coverage` and call out notable gaps in the PR.

## Commit & Pull Request Guidelines
History favors Conventional Commit prefixes (`fix:`, `feat:`, `chore:`) with optional release tags and issue links (`(#123)`). Keep subjects under 72 characters and describe breaking changes in the body. Pull requests should deliver a short summary, curl traces or screenshots for interface updates, reproduction steps, and links to issues or deployments. Run `npm run dev` plus targeted `npm run test:*` commands before requesting review.

## Environment & Configuration Tips
Copy secrets from `.env.example` when bootstrapping. Template catalogs rely on the bundled SQLite databases under `data/`; refresh them with `npm run rebuild` or `npm run fetch:templates`. For search features, run `npm run prebuild:fts5` before rebuilding so native FTS5 bindings are available.
