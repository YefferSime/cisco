// Tabs: Producto / Imágenes — funciona en todas las páginas de producto
(function () {
  var productTab = document.getElementById('product-tab');
  var imagesTab  = document.getElementById('images-tab');
  var infoSection    = document.getElementById('information-section');
  var imagesSection  = document.getElementById('images-section');

  if (!productTab || !imagesTab) return;

  function activateTab(activeBtn, inactiveBtn, showEl, hideEl) {
    showEl.classList.remove('hidden');
    hideEl.classList.add('hidden');
    activeBtn.classList.add('tab-active');
    activeBtn.classList.remove('tab-inactive');
    inactiveBtn.classList.add('tab-inactive');
    inactiveBtn.classList.remove('tab-active');
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
  var img   = document.getElementById('modal-image');
  if (!modal || !img) return;
  img.src = src;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function toExchangeImage(el) {
  var main = document.getElementById('img_main');
  if (main) {
    main.src = el.src;
    // resaltar la miniatura activa
    document.querySelectorAll('.thumb').forEach(function (t) {
      t.classList.remove('thumb-active');
    });
    el.closest('.thumb') && el.closest('.thumb').classList.add('thumb-active');
  }
}

function closeModal() {
  var modal = document.getElementById('image-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function () {
  // Cerrar modal al hacer clic en el fondo
  var modal = document.getElementById('image-modal');
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }
  // Cerrar con Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
});
