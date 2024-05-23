window.onload = function() {
    const articles = ['article1.txt', 'article2.txt']; // Add more files as needed

    articles.forEach(article => {
        fetch(`Articles/${article}`)
            .then(response => response.text())
            .then(text => {
                const articleData = parseArticle(text);
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
    articleDiv.innerHTML = `<h2>${article.title}</h2><button onclick="displayArticle('${article.title}')">Read</button>`;
    section.appendChild(articleDiv);
}

function displayArticle(title) {
    // Add logic to display the article based on title
    // This might require keeping a dictionary of loaded articles if not reloading from the server
}


