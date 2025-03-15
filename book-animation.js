function createBookAnimation(container, title, image) {
    const book = document.createElement('div');
    book.className = 'book';

    const titleText = document.createElement('p');
    titleText.className = 'text';
    titleText.textContent = title;
    book.appendChild(titleText);

    const inner = document.createElement('div');
    inner.className = 'inner';
    inner.style.backgroundImage = `url('${image}')`;
    
    const innerText = document.createElement('p');
    innerText.className = 'text';
    innerText.textContent = 'Ontdek meer';
    inner.appendChild(innerText);
    
    const cover = document.createElement('div');
    cover.className = 'cover';
    cover.style.backgroundImage = `url('${image}')`;
    
    const coverText = document.createElement('p');
    coverText.className = 'text';
    coverText.textContent = title;
    cover.appendChild(coverText);

    book.appendChild(inner);
    book.appendChild(cover);
    
    container.appendChild(book);
}

// Initialize the book animation
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('book-container');
    createBookAnimation(
        container,
        'Landschappen',
        'https://source.unsplash.com/random/800x600/?landscape,painting'
    );
});
