class Toast {
    constructor({ type, duration, message }) {
        this.type = type || 'success';
        this.duration = duration || 2000;
        this.message = message || '';
        this.toastEl = null;
        this.renderToast();
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

        toast.appendChild(toastMessage);
        toastContainer.appendChild(toast);

        return toastContainer;

        // return `
        // <div class="toast-container">
        //     <div class="toast toast--success">
        //         <div class="toast__message">
        //             Item added to cart successfully
        //         </div>
        //     </div>
        // </div>
        // `
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