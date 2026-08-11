# Portfolio Website

Interactive portfolio built with React and Vite.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Validate production build:

```bash
npm run lint
npm run build
```

## Deploy to GCP (Cloud Run)

This repository includes:

1. [Dockerfile](Dockerfile)
2. [nginx.conf](nginx.conf)
3. [.dockerignore](.dockerignore)

These files build and serve the Vite app with SPA route fallback.

### One-time setup

1. Install and login to gcloud:

```bash
gcloud auth login
```

2. Set your project:

```bash
gcloud config set project YOUR_PROJECT_ID
```

3. Enable required APIs:

```bash
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com
```

### Deploy command

Run this from the project root:

```bash
gcloud run deploy portfolio-website \
	--source . \
	--region asia-south1 \
	--allow-unauthenticated
```

After deployment, Cloud Run will print a public URL for your live portfolio.

### Update deployment

After code changes, redeploy with the same command.

## Contact form (automatic email delivery)

The site includes a contact form that can POST submissions to a form endpoint and deliver them to your email. To enable automatic delivery using a third-party provider (e.g. Formspree):

1. Create a form endpoint at Formspree (https://formspree.io/) and copy the endpoint URL (looks like `https://formspree.io/f/XXXXX`).
2. Create a file named `.env` in the project root and add:

```bash
# .env (do not commit)
VITE_CONTACT_ENDPOINT=https://formspree.io/f/XXXXX
```

3. Restart the dev server (`npm run dev`) or rebuild the site so Vite picks up the env var.

If `VITE_CONTACT_ENDPOINT` is not set, the form will fall back to opening the visitor's email client (`mailto:`) so messages can still be sent manually.

Note: Keep your `.env` out of version control. Use `.env.example` as a template.
