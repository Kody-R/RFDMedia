// Dictionary to store articles
let articlesDictionary = {};

window.onload = function() {
    window.articlesDictionary = {};
    loadArticles();
};

function parseArticle(text) {
    const lines = text.split('\n'); // Split the text into lines based on newline characters
    const title = lines[0].replace('Title: ', ''); // Extract the title, assuming it's on the first line
    const author = lines[1].replace('Author: ', ''); // Extract the author, assuming it's on the second line
    const date = lines[2].replace('Date: ', ''); // Extract the date, assuming it's on the third line
    const content = lines.slice(4).join('\n'); // Join the rest of the lines as article content, assuming content starts from the fifth line
    return { title, author, date, content }; // Return an object with the parsed data
}


function loadArticles() {
    const section = document.getElementById('articles');
    section.innerHTML = ''; // Clear the section first

    const articlePath = '/Articles/'; // Base path for articles

    fetch(articlePath) // Fetch the list of files in the folder
        .then(response => response.text())
        .then(text => {
            const fileNames = text.split('\n'); // Assuming each file name is on a new line
            const txtFiles = fileNames.filter(fileName => fileName.endsWith('.txt')); // Filter out .txt files

            txtFiles.forEach(txtFile => {
                fetch(articlePath + txtFile)
                    .then(response => response.text())
                    .then(text => {
                        const articleData = parseArticle(text);
                        articlesDictionary[articleData.title] = articleData;
                        createArticleLink(articleData);
                    });
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



