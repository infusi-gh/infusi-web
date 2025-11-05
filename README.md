# Infusi website

This repository contains the source code and assets for Infusi’s public company website.
---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd infusi-wen
```

### 2. Install Dependencies

This project uses **pnpm** instead of npm or yarn.

If you don’t have pnpm installed:

```bash
npm install -g pnpm
```

Then install project dependencies:

```bash
pnpm install
```

---

## 🧩 Husky Setup

Husky is used to enforce linting, formatting, type checks, and commit message conventions.

After installing dependencies, Husky automatically sets up hooks through the `prepare` script in `package.json`.

If needed, you can manually initialize it:

```bash
pnpm husky install
```

### Hooks Included

* **pre-commit**

  * Auto-fixes linting and formatting issues on staged files.
  * Runs TypeScript type checking (`pnpm run type-check`).
  * Runs a production build (`pnpm run build`).

* **commit-msg**

  * Validates commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

    ```
    <type>(optional-scope): <description>
    ```

    Example:

    ```
    feat(ui): add new button component
    ```

---

## 🧑‍💻 Development

Run the project locally:

```bash
pnpm dev
```

The development server runs on [http://localhost:3000](http://localhost:3000).

---

## 🧪 Quality Checks

Manually run linting and formatting:

```bash
pnpm lint        # Check for lint issues
pnpm lint:fix    # Auto-fix lint issues
pnpm format      # Format all files with Prettier
pnpm type-check  # Run TypeScript validation
```

---

## 🏗️ Build

Create an optimized production build:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

---

## 🧼 Commit Standards

Commit messages must follow Conventional Commit types:

* `feat`: New feature
* `fix`: Bug fix
* `docs`: Documentation only changes
* `style`: Code style or formatting
* `refactor`: Code restructuring
* `test`: Adding or modifying tests
* `chore`: Maintenance tasks
* `perf`: Performance improvements
* `ci`, `build`, `revert`: CI/CD or build-related changes

## ✉️ Contact

For inquiries or support, contact: [younoussaabdourhaman@gmail.com](mailto:younoussaabdourhaman@gmail.com)