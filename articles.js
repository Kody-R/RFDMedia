document.getElementById('file-input').addEventListener('change', function(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const content = e.target.result;
            const article = parseArticle(content);
            displayArticle(article);
        };
        
        reader.readAsText(file);
    }
});

function parseArticle(text) {
    const lines = text.split('\n');
    const title = lines[0].replace('Title: ', '');
    const author = lines[1].replace('Author: ', '');
    const date = lines[2].replace('Date: ', '');
    const content = lines.slice(4).join('\n'); // Assuming the article starts at line 5

    return { title, author, date, content };
}

function displayArticle(article) {
    const section = document.getElementById('articles');
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


