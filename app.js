const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

function openLightbox(index) {
    lightbox.style.display = 'flex';
    lightboxImg.src = galleryItems[index].src;
    lightboxImg.style.transform = 'scale(1.2)';
    currentIndex = index;
}

function closeLightbox() {
    lightbox.style.display = 'none';
    lightboxImg.style.transform = 'scale(1)';
}

function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
    lightboxImg.style.transform = 'scale(1.2)';
}

function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
    lightboxImg.style.transform = 'scale(1.2)';
}

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowRight') {
            showNext();
        } else if (e.key === 'ArrowLeft') {
            showPrev();
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    }
});
