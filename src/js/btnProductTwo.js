(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-twoP]"),
    closeModalBtn: document.querySelector("[data-modal-close-twoP]"),
    modal: document.querySelector("[data-modal-twoP]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();