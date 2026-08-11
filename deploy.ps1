param(
    [string]$ProjectId = 'project-a4bfbd58-5d80-4ff2-970',
    [string]$Repository = 'portfolio-website',
    [string]$ImageName = 'portfolio-mahesh-sathe',
    [string]$ServiceName = 'portfolio-mahesh-sathe',
    [string]$Region = 'us-central1'
)

$tag = "us-central1-docker.pkg.dev/$ProjectId/$Repository/$ImageName"

Write-Host "Using GCP project: $ProjectId"
Write-Host "Artifact Registry repo: $Repository"
Write-Host "Image tag: $tag"
Write-Host "Cloud Run service: $ServiceName"
Write-Host "Region: $Region"

# Set the active GCP project
gcloud config set project $ProjectId

# Ensure required APIs are enabled
gcloud services enable artifactregistry.googleapis.com cloudbuild.googleapis.com run.googleapis.com | Out-Null

# Ensure Artifact Registry repository exists
$repoExists = $false
try {
    $repoCheck = gcloud artifacts repositories describe $Repository --location=$Region --format="value(name)" 2>$null
    if ($repoCheck) { $repoExists = $true }
} catch {
    $repoExists = $false
}

if (-not $repoExists) {
    Write-Host "Artifact Registry repo '$Repository' not found. Creating it in $Region..."
    gcloud artifacts repositories create $Repository --repository-format=docker --location=$Region --description="Docker repo for portfolio website"
}

# Build and push the container image
gcloud builds submit --tag $tag

# Deploy/refresh the Cloud Run service
gcloud run deploy $ServiceName --image $tag --platform managed --region $Region --allow-unauthenticated
