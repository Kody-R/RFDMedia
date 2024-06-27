// Static list of article file paths
const articleFiles = [
    'Articles/article1.txt',
    'Articles/article2.txt',
    'Articles/article3.txt'
];

document.addEventListener('DOMContentLoaded', function() {
    loadArticles();
    addEventListenerToArticles();
});

function parseArticle(text) {
    const lines = text.split('\n');
    const title = lines[0].replace('Title: ', '');
    const author = lines[1].replace('Author: ', '');
    const date = lines[2].replace('Date: ', '');
    const content = lines.slice(4).join('\n');
    return { title, author, date, content };
}

function loadArticles() {
    const section = document.getElementById('articles');
    section.innerHTML = '<p>Loading articles...</p>'; // Provide feedback while loading

    if (articleFiles.length === 0) {
        section.innerHTML = '<p>No articles available.</p>';
        return;
    }

    section.innerHTML = ''; // Clear the section after checking for articles

    articleFiles.forEach(txtFile => {
        fetch(txtFile)
            .then(response => response.text())
            .then(text => {
                const articleData = parseArticle(text);
                createArticleElement(articleData);
            })
            .catch(error => {
                section.innerHTML += `<p>Error loading article from ${txtFile}: ${error.message}</p>`;
            });
    });
}

function addEventListenerToArticles() {
    const articlesSection = document.getElementById('articles');
    articlesSection.addEventListener('click', function(event) {
        if (event.target && event.target.matches('.read-button')) {
            const title = event.target.getAttribute('data-title');
            displayArticle(title);
        }
    });
}

function createArticleElement(article) {
    const section = document.getElementById('articles');
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article';
    const header = document.createElement('h2');
    header.textContent = article.title;
    const button = document.createElement('button');
    button.textContent = 'Read';
    button.classList.add('read-button');  // Ensure this class is added
    button.setAttribute('data-title', article.title);

    articleDiv.appendChild(header);
    articleDiv.appendChild(button);
    section.appendChild(articleDiv);
}

function displayArticle(title) {
    const article = articleFiles.find(article => article.title === title);
    const section = document.getElementById('articles');
    section.innerHTML = `
        <h2>${article.title} </h2>
        <p><strong>Author:</strong> ${article.author}</p>
        <p><strong>Date:</strong> ${article.date}</p>
        <div class="article-content">${article.content}</div>
        <button class='back-button'>Back to Articles</button>
    `;
}
