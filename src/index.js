import Modal from "./Modal.vue";

const install = Vue => {
    Vue.component("modal", Modal);
};

export default {
    install
};

export {Modal};