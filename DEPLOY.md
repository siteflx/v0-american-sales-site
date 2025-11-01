# Deploy to Google Cloud Run

## Prerequisites

1. Install Google Cloud SDK: https://cloud.google.com/sdk/docs/install
2. Create a Google Cloud Project
3. Enable Cloud Run API and Container Registry API

## Setup

1. Login to Google Cloud:
\`\`\`bash
gcloud auth login
\`\`\`

2. Set your project ID:
\`\`\`bash
gcloud config set project YOUR_PROJECT_ID
\`\`\`

3. Enable required APIs:
\`\`\`bash
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
gcloud services enable cloudbuild.googleapis.com
\`\`\`

## Deploy Options

### Option 1: Manual Deploy with Docker

1. Build the Docker image:
\`\`\`bash
docker build -t gcr.io/YOUR_PROJECT_ID/noir-apparel .
\`\`\`

2. Push to Container Registry:
\`\`\`bash
docker push gcr.io/YOUR_PROJECT_ID/noir-apparel
\`\`\`

3. Deploy to Cloud Run:
\`\`\`bash
gcloud run deploy sitamericano \
  --image gcr.io/YOUR_PROJECT_ID/noir-apparel \
  --platform managed \
  --region europe-west1 \
  --allow-unauthenticated \
  --port 8080
\`\`\`

### Option 2: Automated Deploy with Cloud Build

1. Submit build to Cloud Build:
\`\`\`bash
gcloud builds submit --config cloudbuild.yaml
\`\`\`

This will automatically build, push, and deploy your application.

### Option 3: Deploy from Source (Easiest)

\`\`\`bash
gcloud run deploy sitamericano \
  --source . \
  --platform managed \
  --region europe-west1 \
  --allow-unauthenticated \
  --port 8080
\`\`\`

## Environment Variables

To add environment variables:

\`\`\`bash
gcloud run deploy sitamericano \
  --set-env-vars "KEY1=value1,KEY2=value2" \
  --region europe-west1
\`\`\`

## Custom Domain

To map a custom domain:

\`\`\`bash
gcloud run domain-mappings create \
  --service sitamericano \
  --domain your-domain.com \
  --region europe-west1
\`\`\`

## Monitoring

View logs:
\`\`\`bash
gcloud run services logs read sitamericano --region europe-west1
\`\`\`

View service details:
\`\`\`bash
gcloud run services describe sitamericano --region europe-west1
\`\`\`

## Troubleshooting

### If the site shows "placeholder" page:
1. Check build logs: `gcloud builds list --limit=5`
2. View specific build: `gcloud builds log BUILD_ID`
3. Ensure the build completed successfully
4. Verify the service is running: `gcloud run services list --region europe-west1`

### If build fails:
1. Check that all dependencies are in package.json
2. Verify Dockerfile syntax
3. Test build locally: `docker build -t test .`

## Costs

Cloud Run charges based on:
- CPU and memory usage during request handling
- Number of requests
- Free tier: 2 million requests/month

Estimated cost for low traffic: $0-5/month
