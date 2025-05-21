# GitHub Unleashed: Hands-on and Best Practices

This repository contains a sample application used for the Workshop "GitHub Unleashed: Hands-on and Best Practices".
It's purpose is to demonstrate the EBCONT GitHub experience.

## Contacts

- Andreas Titz (andreas.titz@ebcont.com)
- Georg Brandstätter (georg.brandstaetter@ebcont.com)

## Prerequisites

- GitHub account
- Maven installed on your machine

## Sample App description

A simple Spring Boot application displaying an index and a greetings page:
- Index page with a link to the greetings page
  - Has an error in the header that will be fixed during the workshop 
- Greetings page displays "hello world" message
  - Has an additional argument that will be used to add a feature during the workshop 
- Maven POM file has an outdated dependency of "spring-boot-starter-logging"
  - Used to demonstrate how Dependabot works  

## GitHub workflows are located under .github/workflows/
- ci.yml | build, test & publish  
- ci-integration-tests.yml
- commitlint.yml
- release-please.yml

## GitHub Tool configuration:
- .github/dependabot.yml
- commitlint.config.js
- .release-please-manifest.json
- release-please-config.json
- CODEOWNERS

## Getting started

- Fork the repository to your GitHub account
- Check out the project locally

- Run `mvn clean install` to build the project
- Run `mvn spring-boot:run` to start the app
- Navigate to localhost:8080 with a browser



