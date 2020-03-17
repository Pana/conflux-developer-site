#!/usr/bin/env bash

set -e
set -u

git submodule update --init

# exit code 0 -> found changed markdown files
changed=$(git submodule foreach git diff --no-color \
              origin/master \
            | grep -E '^(---|\+\+\+)\ (a|b).*\.md[x]?$'\
            || git diff --no-color HEAD~ | grep -E '.*' || true)

# git config --global user.email $GH_EMAIL
# git config --global user.name $GH_NAME
# git submodule foreach git reset --hard origin/master
# git add --update
# git commit -m "Automated update submodules ${CIRCLE_SHA1} [ci skip]" --allow-empty 1> /dev/null
# git push origin master

if [ ${#changed} -ge 1 ]; then
  # found changed fiile don't skip ci
  echo false > .skip-ci
else
  # skip ci
  echo true > .skip-ci
fi

exit 0