// Dictionary to store articles
let articlesDictionary = {};

window.onload = function() {
    window.articlesDictionary = {};
    loadArticles();
};

function loadArticles() {
    const articles = ['article1.txt', 'article2.txt']; // Update with actual file names
    const section = document.getElementById('articles');
    section.innerHTML = ''; // Clear the section first

    articles.forEach(article => {
        fetch(`Articles/${article}`)
            .then(response => response.text())
            .then(text => {
                const articleData = parseArticle(text);
                articlesDictionary[articleData.title] = articleData;
                createArticleLink(articleData);
            });
    });
}

document.getElementById('articles').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        if (event.target.classList.contains('read-button')) {
            displayArticle(event.target.getAttribute('data-title'));
        } else if (event.target.classList.contains('back-button')) {
            loadArticles();
        }
    }
});

function createArticleLink(article) {
    const section = document.getElementById('articles');
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article';
    const button = document.createElement('button');
    button.textContent = 'Read';
    button.setAttribute('data-title', article.title);
    button.classList.add('read-button'); // Add specific class for read buttons
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
    backButton.classList.add('back-button'); // Add specific class for back button

    section.appendChild(articleDiv);
    section.appendChild(backButton); // Append the back button after the article
}



