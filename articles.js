// Dictionary to store articles
let articlesDictionary = {};

window.onload = function() {
    const articles = ['article1.txt', 'article2.txt']; // Add more files as needed
    window.articlesDictionary = {}; // Define an empty dictionary to store articles

    articles.forEach(article => {
        fetch(`Articles/${article}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(text => {
                const articleData = parseArticle(text);
                articlesDictionary[articleData.title] = articleData; // Store article data in the dictionary
                createArticleLink(articleData);
            })
            .catch(error => console.error('Error fetching the article:', error));
    });
};

function parseArticle(text) {
    const lines = text.split('\n');
    const title = lines[0].replace('Title: ', '');
    const author = lines[1].replace('Author: ', '');
    const date = lines[2].replace('Date: ', '');
    const content = lines.slice(4).join('\n');
    return { title, author, date, content };
}

 // Set up event delegation here
 document.getElementById('articles').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        displayArticle(event.target.getAttribute('data-title'));
    }
});

function createArticleLink(article) {
    const section = document.getElementById('articles');
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article';
    const button = document.createElement('button');
    button.textContent = 'Read';
    button.setAttribute('data-title', article.title); // Use custom data attribute to store title
    const header = document.createElement('h2');
    header.textContent = article.title;

    articleDiv.appendChild(header);
    articleDiv.appendChild(button);
    section.appendChild(articleDiv);
}
function displayArticle(title) {
    const article = articlesDictionary[title];
    const section = document.getElementById('articles');
    section.innerHTML = ''; // Clear previous articles
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article';
    articleDiv.innerHTML = `
        <h2>${article.title}</h2>
        <p><strong>Author:</strong> ${article.author}</p>
        <p><strong>Date:</strong> ${article.date}</p>
        <div class="article-content">${article.content}</div>
    `;
     const backButton = document.createElement('button');
    backButton.textContent = 'Back to Articles';
    backButton.setAttribute('data-title', ''); // Empty data-title for back functionality

    section.appendChild(articleDiv);
    section.appendChild(backButton); // Append the back button after the article
}
}


