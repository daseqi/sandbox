#!/bin/sh

WORKSPACE_NAME="${1}"
WORKSPACES=$(terraform workspace list | sed 's/*//g')

if [[ $WORKSPACES == *"$WORKSPACE_NAME"* ]]; then
  echo "Workspace ${WORKSPACE_NAME} exists!"
else
    echo "${WORKSPACE_NAME} doesn't exist creating..."
    echo $(terraform workspace new $WORKSPACE_NAME)
    echo "created ${WORKSPACE_NAME}"
fi