(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        document.body.classList.toggle("modal-open"); // дод клас 'modal-open' на body щоб сторінка не прокручувувалася коли відкрита модалка
        refs.modal.classList.toggle("is-hidden");
    }
})();
