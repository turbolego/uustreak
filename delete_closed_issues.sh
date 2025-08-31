#!/bin/bash

REPO="turbolego/uustreak" # Replace with your repository
CLOSED_ISSUES=$(gh issue list --repo "$REPO" --state closed --json number --jq '.[].number')

for ISSUE_NUMBER in $CLOSED_ISSUES
do
  echo "Deleting issue #$ISSUE_NUMBER..."
  gh issue delete "$ISSUE_NUMBER" --repo "$REPO" --yes
done
