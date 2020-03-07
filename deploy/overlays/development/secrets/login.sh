# !/usr/bin/env bash

export VAULT_ADDR=http://localhost:8200
export VAULT_SKIP_VERIFY=true
SA_SECRET=$(kubectl get secret |grep di-entry-token|awk '{print $1}')
SA_TOKEN=$(kubectl get secret $SA_SECRET -o jsonpath="{.data.token}" | base64 --decode; echo)
VAULT_LOGIN_TOKEN=$(vault write auth/kubernetes/login role=di-entry-rw-role jwt=$SA_TOKEN|grep -E "^token\s+.+$"|awk '{print $2}')
export VAULT_TOKEN=$(vault login -token-only token=$VAULT_LOGIN_TOKEN)
