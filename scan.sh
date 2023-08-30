#!/bin/bash

sonar-scanner \
  -Dsonar.projectKey=dev-link-discover \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.token=sqp_b9dc78cfb0f2ea99c39df4ed8f77ddafff28ad69
