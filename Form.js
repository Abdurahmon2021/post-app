export default class Form {
    /**
     * 
     * @param {String} formQS 
     */

    constructor(formQS) {
        /**
         * @type {HTMLFormElement} 
         * @public
         */
        this.el = document.querySelector(formQS)
        this.modal = new bootstrap.Modal(this.el)

        /**
        * @type {HTMLDivElement} 
        * @public
        */

        this.overlayEl = document.querySelector(`${formQS} .overlay`)

    }

    /**
     * 
     * @param {Post} post 
     */

    getFormValues(post) {
        for (const key in post) {
            if (this.el.elements[key]) {
                post[key] = this.el.elements[key].value
            }
        }
        return post;
    }
    /**
     * 
     * @param {Post} post 
     */
    initFormValues(post) {
        for (const key in post) {
            if (this.el.elements[key]) {
                this.el.elements[key].value = post[key];
            }
        }
    }

    get overlay() {
        return !this.overlayEl.classList.contains("d-none")
    }
    set overlay(val) {
        if (val) {
            this.overlayEl.classList.remove("d-none")
        }
        else {
            this.overlayEl.classList.add("d-none")
        }
    }
}