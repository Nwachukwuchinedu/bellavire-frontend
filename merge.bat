@echo off
REM Switch to main branch
git checkout main

REM Pull latest changes from upstream (owner's repo)
git pull upstream main --allow-unrelated-histories

REM Merge dev into main
git merge dev

REM Stage all changes
git add .

REM Commit changes
git commit -m "Merged dev into main and synced with upstream"

REM Push to your own repo
git push origin main

echo Merge and push completed successfully!
pause
