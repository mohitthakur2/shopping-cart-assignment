class Toast {
    constructor({ type, duration, message }) {
        this.type = type || 'success';
        this.duration = duration || 2000;
        this.message = message || '';
        this.toastEl = null;
        this.renderToast();
        this.toastId = `toast-${Date.now()}`
    }

    getToastHtml() {

        let toastContainer = document.createElement('div');
        toastContainer.classList.add('toast-container');

        let toast = document.createElement('toast');
        toast.classList.add('toast');
        toast.classList.add(`toast--${this.type}`)

        let toastMessage = document.createElement('div');
        toastMessage.classList.add('toast__mesage');
        toastMessage.textContent = this.message;
        toastMessage.setAttribute('id', this.toastId)
        toastMessage.setAttribute('role', 'alert')
        toastMessage.setAttribute('aria-live', 'polite')

        toast.appendChild(toastMessage);
        toastContainer.appendChild(toast);

        return toastContainer;
    }

    addToastToDOM() {
        this.toastEl = this.getToastHtml();
        document.body.appendChild(this.toastEl)
    }

    removeToastFromDom() {
        if (this.toastEl) {
            if (this.toastEl.remove === 'function') {
                this.toastEl.remove()
            } else {
                document.body.removeChild(this.toastEl);
            }
        }
    }

    renderToast() {
        this.addToastToDOM()
        setTimeout(() => {
            this.toastEl.classList.add('leave')
            this.toastEl.addEventListener('animationend', () => {
                this.removeToastFromDom();
            })
        }, this.duration)
    }
}

export default Toast;