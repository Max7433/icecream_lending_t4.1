(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-three]"),
    closeModalBtn: document.querySelector("[data-modal-close-one-three]"),
    modal: document.querySelector("[data-modal-one-three]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();