# InteractoGraph

InteractoGraph is an automated solution for visualizing engagement metrics on Dev.to articles (but not limited to that platform). 
Utilizing GitHub Actions, Cypress for data collection, and Google Charts for visualization, this project provides an overview of comments and reactions to your published content.

## Features

- Automated scraping of engagement data from Dev.to (extendable to any other)
- Data visualization using Google Charts
- Continuous deployment to GitHub Pages
- Easy setup and customization

## Quick Start

1. Clone this repository.
2. Customize the user in `./cypress/e2e/0-mine/all_in_one.cy.js`.
3. Push the changes to trigger the GitHub Actions workflow.
4. Access your dashboard at `https://<YOUR-GITHUB-USERNAME>.github.io/InteractoGraph/`.

For detailed instructions, refer to the [article on Dev.to](https://dev.to/realvorl/a-zero-cost-monitoring-solution-12na).

## Details

The [`.github/workflows/do-ci.yml`](.github/workflows/do-ci.yml) file contains the CI/CD pipeline that orchestrates the entire process.
Modify the [`updateHtml.js`](./cypress/e2e/0-mine/updateHtml.js) script to change how the JSON data integrates into the HTML template if needed.

## Acknowledgments

- Dev.to community
- GitHub for hosting and Actions
- Cypress.io for testing and automation
- Google Charts for visualization

## Support

If you encounter any issues or have questions, please file an [issue](https://github.com/realvorl/InteractoGraph/issues/new) on the GitHub repository or join the [discussion](https://github.com/realvorl/InteractoGraph/discussions/new/choose).
