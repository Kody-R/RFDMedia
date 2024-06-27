// Static list of article file paths
const articleFiles = [
    'Articles/article1.txt',
    'Articles/article2.txt',
    'Articles/article3.txt'
];

window.onload = function() {
    loadArticles();
};

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

document.getElementById('articles').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('read-button')) {
        displayArticle(event.target.getAttribute('data-title'));
    } else if (event.target.classList.contains('back-button')) {
        loadArticles();
    }
});

function createArticleElement(article) {
    const section = document.getElementById('articles');
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article';
    const header = document.createElement('h2');
    header.textContent = article.title;
    const button = document.createElement('button');
    button.textContent = 'Read';
    button.setAttribute('data-title', article.title);
    button.classList.add('read-button');

    articleDiv.appendChild(header);
    articleDiv.appendChild(button);
    section.appendChild(articleDiv);
}

function displayArticle(title) {
    const article = articlesDictionary[title];
    const section = document.getElementById('articles');
    section.innerHTML = `
        <h2>${article.title}</h2>
        <p><strong>Author:</strong> ${article.author}</p>
        <p><strong>Date:</strong> ${article.date}</p>
        <div class="article-content">${article.content}</div>
        <button class='back-button'>Back to Articles</button>
    `;
}
