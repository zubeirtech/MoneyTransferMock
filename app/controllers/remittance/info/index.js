import Controller from '@ember/controller';

export default Controller.extend({


    actions: {
        openModal() {
            let modal = document.getElementById("myModal");
            modal.style.display = "block";
        },

        closeModal() {
            let modal = document.getElementById("myModal");
            modal.style.display = "none";
        }
    }
});