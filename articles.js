// Dictionary to store articles
let articlesDictionary = {};

window.onload = function() {
    const articles = ['article1.txt', 'article2.txt', 'article3.txt']; // Add more files as needed

    articles.forEach(article => {
        fetch(`./path/to/articles/${article}`)
            .then(response => response.text())
            .then(text => {
                const articleData = parseArticle(text);
                // Store the article in the dictionary
                articlesDictionary[articleData.title] = articleData;
                createArticleLink(articleData);
            });
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

function createArticleLink(article) {
    const section = document.getElementById('articles');
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article';
    articleDiv.innerHTML = `<h2>${article.title}</h2><button onclick="displayArticle('${article.title.replace(/'/g, "\\'")}')">Read</button>`;
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
    section.appendChild(articleDiv);
}
