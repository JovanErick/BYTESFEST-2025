const galleryContainer = document.getElementById("image-gallery");

// Daftar nama author
const authors = ["Jovan", "Erick", "Kayla", "Adi", "Budi"];


// Tentukan jumlah gambar
const totalImages = 31;

for (let i = 2; i <= totalImages; i++) {
  const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
  let randomLikes = Math.floor(Math.random() * 100) + 1;

  const galleryCard = document.createElement("div");
  galleryCard.className = "gallery-card";

  galleryCard.innerHTML = `
    <img src="/Image/Gallery/${i}.webp" alt="Judul Karya ${i}" />
    <div class="gallery-info">
      <p class="author">Author: ${randomAuthor}</p>
      <button class="like-button" data-liked="false">
        <i class="far fa-heart"></i>
        <span class="like-count">${randomLikes}</span> Likes
      </button>
    </div>
  `;

  galleryContainer.appendChild(galleryCard);
}

document.querySelectorAll('.like-button').forEach(button => {
  button.addEventListener('click', () => {
    const icon = button.querySelector('i');
    const count = button.querySelector('.like-count');
    let liked = button.getAttribute('data-liked') === 'true';
    let currentLikes = parseInt(count.textContent);

    if (!liked) {
      icon.classList.remove('far'); // outline
      icon.classList.add('fas');    // solid
      currentLikes++;
      button.setAttribute('data-liked', 'true');
    } else {
      icon.classList.remove('fas');
      icon.classList.add('far');
      currentLikes--;
      button.setAttribute('data-liked', 'false');
    }

    count.textContent = currentLikes;
  });
});