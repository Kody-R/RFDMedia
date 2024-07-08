// Example articles for testing
const articleFiles = [
    {
        title: "Bulldogs Win Big!",
        author: "John Doe",
        date: "2024-07-01",
        content: "In an impressive outing, the Louisiana Tech Bulldogs secured a major victory against their rivals...",
        image: "pictures/RFD_Media.png"
    },
    {
        title: "Season Preview: What to Expect",
        author: "Jane Smith",
        date: "2024-06-30",
        content: "As the new season approaches, here’s what fans can look forward to from the Bulldogs...",
        image: "pictures/RFD_Media2.png"
    },
    {
        title: "A Look at New Recruits",
        author: "Alice Johnson",
        date: "2024-06-29",
        content: "Louisiana Tech is welcoming a talented batch of new players this season. Here's a deep dive into the recruits...",
        image: "pictures/RFD_Media3.png"
    },
    {
        title: "Bulldogs Win Big!",
        author: "John Doe",
        date: "2024-07-01",
        content: "In an impressive outing, the Louisiana Tech Bulldogs secured a major victory against their rivals...",
        image: "pictures/RFD_Media4.png"
    },
    {
        title: "Season Preview: What to Expect",
        author: "Jane Smith",
        date: "2024-06-30",
        content: "As the new season approaches, here’s what fans can look forward to from the Bulldogs...",
        image: "pictures/RFD_Media5.png"
    },
    {
        title: "A Look at New Recruits",
        author: "Alice Johnson",
        date: "2024-06-29",
        content: "Louisiana Tech is welcoming a talented batch of new players this season. Here's a deep dive into the recruits...",
        image: "pictures/RFD_Media6.png"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    loadArticles();
});

function createArticleElement(article) {
    const section = document.getElementById('articles');
    const articleDiv = document.createElement('article');

    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = article.image;
    figure.appendChild(img);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'article-preview';

    const header = document.createElement('h2');
    header.textContent = article.title;

    const paragraph = document.createElement('p');
    paragraph.textContent = article.content;

    const readMoreLink = document.createElement('a');
    readMoreLink.href = "#";
    readMoreLink.className = "read-more";
    readMoreLink.textContent = "Read more";

    contentDiv.appendChild(header);
    contentDiv.appendChild(paragraph);
    contentDiv.appendChild(readMoreLink);

    articleDiv.appendChild(figure);
    articleDiv.appendChild(contentDiv);
    section.appendChild(articleDiv);
}

function loadArticles() {
    const section = document.getElementById('articles');
    section.innerHTML = ''; // Clear the section before adding new articles

    articleFiles.forEach(article => {
        createArticleElement(article);
    });
}
