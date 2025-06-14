# 🛡️ am-i-covered

A simple application to help you determine your coverage status for various items.

## 🌟 Overview

`am-i-covered` is a user-friendly tool designed to provide clarity on whether you are covered for specific situations or items. Whether it's for your home, car, pet, or apartment, this app aims to give you quick answers.

## ✨ Features

- **Intuitive Interface**: Easily navigate and find the information you need.
- **Multiple Coverage Categories**: Check coverage for:
  - 🏠 Home
  - 🚗 Car
  - 🐾 Pet
  - 🏢 Apartment
- **Quick Status Checks**: Get immediate feedback on your coverage status.

## 🚀 Getting Started (Local Development)

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites for Local Development

- Node.js and npm installed on your system.

### Installation (Local)

1. **Clone the repository:**

    ```bash
    git clone https://github.com/kweinmeister/am-i-covered.git
    cd am-i-covered
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Application (Local)

To start the development server:

```bash
npm run dev
```

This will typically open the application in your default web browser at `http://localhost:5173` (or another port if specified in your Vite configuration).

## ☁️ Deploying to Google Cloud Run

Deploying this application to Google Cloud Run is straightforward using the direct-from-source method with Google Cloud Buildpacks.

**Prerequisites for Cloud Run Deployment:**

- Google Cloud SDK (gcloud CLI) installed and configured.
- A Google Cloud Project with billing enabled.
- Enable the Cloud Run API and Cloud Build API in your Google Cloud Project.
- Ensure your `package.json` has:
  - A `build` script (e.g., `vite build`) that outputs static files to a `dist` directory.
  - A `start` script to serve these files. Example using `serve`: `"start": "serve -s dist -l tcp://0.0.0.0:$PORT"`.
    - If using `serve`, install it: `npm install serve`

**Deployment Command:**

Navigate to your project's root directory and run:

```bash
gcloud run deploy [SERVICE_NAME] \
  --source . \
  --platform managed \
  --region [REGION] \
  --allow-unauthenticated
```

- Replace `[SERVICE_NAME]` with your desired service name (e.g., `am-i-covered-service`).
- Replace `[REGION]` with your preferred Google Cloud region (e.g., `us-central1`).
- `--source .` tells Cloud Run to build from the current directory.
- `--allow-unauthenticated` makes your service publicly accessible. Omit this or configure IAM for restricted access.

Google Cloud Build will automatically detect it's a Node.js application, run `npm install` (installing `dependencies` from `package.json`), then `npm run build`, and finally use the `npm start` script to run your application. **You do not need to create a `Dockerfile` or `nginx.conf` for this method.**

For more advanced control over the build process or runtime environment, you can optionally use a `Dockerfile`. Refer to the official Google Cloud Run documentation for Docker-based deployments if needed.

## 🛠️ Technologies Used

This project is built with:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript.
- [Vite](https://vitejs.dev/) - A fast build tool and development server.
- Likely other libraries as defined in `package.json`.

## ⚠️ Disclaimer

**This application is for informational purposes only.** The information provided by `am-i-covered` is not a substitute for professional advice. Always consult your official policy documents and/or a qualified insurance professional to confirm your coverage details.

## 📄 License

This project is licensed under the terms of the [LICENSE](./LICENSE) file.
