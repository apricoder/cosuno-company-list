# Cosuno Companies List

This is a simple app listing mocked construction companies.
It consists of 2 parts:
- React UI
- NestJS API

# Features
- basic search by company name
- filtering by specialty
- keeping search params in url thus keeping state after refresh and ability to share search

# Demo Screen

![demo.jpg](https://drive.google.com/uc?id=1wHmj5tgQ7bITHAxSR_Qgc3HQA9MX62yk)

# Setup

### Linux / Mac
Open terminal in a _project root folder_ and run:

### `bin/setup.sh`

<br>
Tested on Ubuntu 18.04

# Run
After you've successfully set up a project 
open a terminal in a _project root folder_ and run:

### `bin/run-api.sh`

to run api on `localhost:3000`, then after api starts:

### `bin/run-ui.sh`
to run ui on `localhost:4200`, it should open your default browser on that address.

# Dev Notes

### Technologies
API:
- NestJS
- TypeScript
- Lodash

UI:
- React
- Redux
- Redux Observable
- TypeSafe Actions
- TypeScript
- Styled components
- AntD
- FontAwesome icons
- Lodash

### Improvements To Do

UX:
- Better responsiveness / mobile support
- Move search bar to the header
- Add filter by city
- Click on specialty in a company card adds it to search params
- Click on city in a company card adds it to search params

Code:
- Add tests
- Load specialties from the API
- Split larger components like `company.page.ts`
- Separate styled components out of the components files ideally without polluting global import namespace 
