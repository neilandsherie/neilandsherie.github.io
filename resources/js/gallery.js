
// Gallery Photo Grid

const photoGrid = document.getElementById('photo-grid');

const photoUrls = [
    './resources/images/gallery/beach1.jpg',
    './resources/images/gallery/gallery (2).webp',
    './resources/images/gallery/gallery.jpeg',
    './resources/images/gallery/gallery.jpg',
    './resources/images/gallery/gallery (4).jpg',
    './resources/images/gallery/gallery (1).jpeg',
    './resources/images/gallery/picture.jpeg',
    './resources/images/gallery/gallery (1).jpg',
    './resources/images/gallery/gallery (3).jpg',
    './resources/images/gallery/IMG_5052.jpg',
    './resources/images/gallery/IMG_3201.jpg',
    './resources/images/gallery/IMG_4818.jpg'
    // Add more photo URLs as needed
];

// Function to create photo elements and append them to the grid
function displayPhotos() {
    photoUrls.forEach(url => {
        const photo = document.createElement('img');
        photo.src = url;
        photo.classList.add('photo');
        photoGrid.appendChild(photo);
    });
}

// Call the function to display photos when the page loads
displayPhotos();