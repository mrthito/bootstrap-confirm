

class BsConfirm {
    constructor(options) {
        this.templateList = {
            template5: `
                <div class="modal fade bsConfirm-modal" tabindex="-1" role="dialog" aria-labelledby="bsConfirmModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="bsConfirmModalLabel">Confirm</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body"></div>
                            <div class="modal-footer">
                                <button class="btn btn-light btn-cancel" data-bs-dismiss="modal">Cancel</button>
                                <button class="btn btn-primary btn-confirm">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>`,
        };

        this.defaults = {
            selector: "",
            template: "",
            title: "Are you Sure?",
            message: "",
            confirmBtn: "Confirm",
            cancelBtn: "Cancel",
            onCancel: function () { },
            onConfirm: function () { },
        };

        this.settings = { ...this.defaults, ...options };

        if (this.settings.selector) {
            this.elements = document.querySelectorAll(this.settings.selector);
            this.elements.forEach((element) => {
                element.addEventListener("click", (event) => {
                    event.preventDefault();
                    this.settings.onConfirm = () => {
                        if (element.tagName === "A") {
                            window.location.href = element.getAttribute("href");
                        } else if (element.type === "submit") {
                            element.closest("form").submit();
                        }
                    };
                    this.showConfirm();
                });
            });
        } else {
            this.showConfirm();
        }
    }

    showConfirm() {
        const template = document.createElement("div");
        template.innerHTML =
            this.settings.template || this.templateList.template5;
        const modal = template.firstElementChild;

        modal.querySelector(".modal-title").textContent = this.settings.title;
        modal.querySelector(".modal-body").innerHTML = this.settings.message;
        modal.querySelector(".btn-cancel").textContent =
            this.settings.cancelBtn;
        modal.querySelector(".btn-confirm").textContent =
            this.settings.confirmBtn;

        document.body.appendChild(modal);

        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();

        modal.querySelector(".btn-cancel").addEventListener("click", () => {
            this.settings.onCancel();
        });

        modal.querySelector(".btn-confirm").addEventListener("click", () => {
            this.settings.onConfirm();
            bootstrapModal.hide();
        });

        modal.addEventListener("hidden.bs.modal", () => {
            modal.remove();
        });
    }
}
