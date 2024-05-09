// Assume you have an array of articles with their titles and content
const articles = [
    { 
        title: "Article 1",
        content: "This is the content of Article 1."
    },
    { 
        title: "Article 2",
        content: "This is the content of Article 2."
    },
    // Add more articles here
];

// Function to populate article content based on the selected article
function populateArticleContent(articleIndex) {
    const articleContentSection = document.getElementById("article-content");
    const selectedArticle = articles[articleIndex];
    
    // Check if the selected article exists
    if (selectedArticle) {
        // Update the content of the section with the selected article's content
        articleContentSection.innerHTML = `
            <h2>${selectedArticle.title}</h2>
            <p>${selectedArticle.content}</p>
        `;
    } else {
        articleContentSection.innerHTML = "<p>Article not found.</p>";
    }
}

// Assuming you have article links on the articles.html page, 
// you can add event listeners to those links to load the article content dynamically.

// Example:
const articleLinks = document.querySelectorAll(".article-link");

articleLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        populateArticleContent(index);
    });
});
