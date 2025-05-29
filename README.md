# {{ cookiecutter.project\_name }}

End-to-end (E2E) testing suite for `{{ cookiecutter.target_project }}`. This repository is generated using the [Invisible Tech E2E template](https://github.com/invisible-tech/cookiecutter-e2e) and is configured to support Playwright and Checkly for UI and monitoring tests.

---

## Purpose

This repository provides a standalone E2E testing framework to:

* Maintain tests independently from the application codebase.
* Run Playwright tests locally and in CI.
* Deploy monitoring checks using Checkly.
* Allow teams to standardize and scale E2E testing across multiple services.

---

## Initial Setup

1. **Install dependencies** using [Bun](https://bun.sh):

   ```bash
   bun install
   ```

   > If you see a Yarn-related error after the initial `bun install`, you can ignore it. Rerunning the command confirms successful installation.

2. **Copy and configure the environment file**:

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` and set the `CHECKLY_API_KEY` and `CHECKLY_ACCOUNT_ID`

---

## Running Tests

Run all available tests using:

```bash
bun run test
```

On a successful installation, the following example tests should pass:

* `__checks__/basic.spec.ts`
* `src/checks/basic-check.spec.ts`

You can also run:

```bash
bun run test:ui         # Launches Playwright's UI test runner
bun run test:headed     # Runs all tests in a visible browser window
bun run test:single     # Runs the default example test in __checks__
bun run test:report     # Opens the latest test report
```

> The included tests are placeholders to validate setup and should be replaced with real tests for the target application.

---

## Checkly Integration

Checkly is configured for monitoring and can be used locally or in GitHub Actions.

### Commands

```bash
bun run checkly             # Run all Checkly-defined tests
bun run checkly:list        # List all checks without running them
bun run checkly:deploy      # Deploy checks to Checkly
bun run checkly:login       # Log into Checkly CLI
bun run checkly:whoami      # View your current Checkly account
```

Checkly tests are defined in `src/checks/*.check.ts` and configured via `checkly.config.ts`.

---

## Project Structure

```
.
├── src/checks/              # Checkly browser/API tests
├── __checks__/              # Playwright test specs
├── .github/workflows/       # GitHub Actions
├── .env.example             # Sample environment config
├── checkly.config.ts        # Checkly settings
├── package.json             # Scripts and dependencies
└── README.md
```

---

## Notes

* Use `.env` to configure environment-specific settings (e.g. base URLs, credentials).
* Generated tests are examples meant to validate infrastructure; replace them with application-specific checks.
* This template avoids unnecessary dependencies and adheres to current Playwright and Checkly best practices.

