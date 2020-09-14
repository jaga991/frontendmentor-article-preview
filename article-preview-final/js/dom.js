const shareIcon = document.getElementById("share-icon-container");
const linkContainer = document.getElementById("link-container");

shareIcon.addEventListener('click', () => {
    linkContainer.classList.toggle('hidden');
})

