describe('Article Metrics on dev.to', () => {
    it('captures comments and reactions for multiple articles', () => {
      // Visit the user's main page
      cy.visit('https://dev.to/realvorl');
  
      // Define an array to hold our article metrics
      let articleMetrics = [];
  
      // Wait for the articles to load
      cy.get('.crayons-story__body').each(($body, index, $bodies) => {
        // Get the title
        const title = $body[0].getElementsByTagName('h2')[0].textContent.trim();
        // Get the last two links which correspond to comments and reactions
        const links = $body[0].getElementsByTagName('a');
        const reactionsCount = links[links.length - 2].innerText.trim();
        const commentsCount = links[links.length - 1].innerText.trim();
  
        // Push the metrics for this article into our array
        articleMetrics.push({
          title,
          'commentNo': parseInt(commentsCount, 10) || 0, // Fallback to 0 if parsing fails
          'reactionNo': parseInt(reactionsCount, 10) || 0 // Fallback to 0 if parsing fails
        });
  
        // If this is the last article, write the metrics to a file
        if (index === $bodies.length - 1) {
          cy.writeFile('./cypress/e2e/0-mine/data.json', {
            'run-date': new Date().toISOString(),
            'articles': articleMetrics
          }, { flag: 'w+' }); // Overwrite if file exists
        }
      });
    });
  });
  