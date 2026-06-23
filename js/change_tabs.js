// Tabs: Producto / Imágenes — funciona en todas las páginas de producto
(function () {
  var productTab = document.getElementById('product-tab');
  var imagesTab = document.getElementById('images-tab');
  var infoSection = document.getElementById('information-section');
  var imagesSection = document.getElementById('images-section');

  if (!productTab || !imagesTab) return;

  function activateTab(activeBtn, inactiveBtn, showEl, hideEl) {
    showEl.classList.remove('hidden');
    hideEl.classList.add('hidden');
    activeBtn.classList.remove('bg-gray-100', 'text-gray-700');
    activeBtn.classList.add('bg-blue-600', 'text-white');
    inactiveBtn.classList.remove('bg-blue-600', 'text-white');
    inactiveBtn.classList.add('bg-gray-100', 'text-gray-700');
  }

  productTab.addEventListener('click', function () {
    activateTab(productTab, imagesTab, infoSection, imagesSection);
  });

  imagesTab.addEventListener('click', function () {
    activateTab(imagesTab, productTab, imagesSection, infoSection);
  });
})();

// Modal de imagen a pantalla completa
function viewImage(src) {
  var modal = document.getElementById('image-modal');
  var img = document.getElementById('modal-image');
  if (!modal || !img) return;
  img.src = src;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function toExchangeImage(el) {
  var main = document.getElementById('img_main');
  if (main) main.src = el.src;
}

function closeModal() {
  var modal = document.getElementById('image-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Cerrar modal al hacer clic en el fondo o presionar Escape
document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('image-modal');
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
});
