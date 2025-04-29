# Auto-commit script for PowerShell
# This script automatically commits and pushes changes to GitHub

# Change to the repository directory
# cd "C:\Users\karra\OneDrive\Desktop\uspro"

# Add all changes to staging
git add .

# Check if there are changes to commit
$changes = git status --porcelain
if ($changes) {
    # Get current timestamp for commit message
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    
    # Commit changes with timestamp
    git commit -m "Auto-commit: Website updates at $timestamp"
    
    # Push changes to GitHub
    git push
    
    Write-Host "Changes committed and pushed successfully at $timestamp" -ForegroundColor Green
} else {
    Write-Host "No changes to commit" -ForegroundColor Yellow
}
