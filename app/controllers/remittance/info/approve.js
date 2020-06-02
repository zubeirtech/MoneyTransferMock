import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Controller.extend({
    toastr: service('toast'),

    actions: {

        edit() {
            set(this, "editView", false);
            this.toastr.success("Remittance edited", "Great!");
        },

        approve() {
            localStorage.setItem("approved", "true");
            localStorage.setItem("approvedIndex", this.model.id.toString());
            this.transitionToRoute('remittance');
            this.toastr.success("Remittance was approved", "Great!");
        },

        delete() {
            localStorage.setItem("deleted", "true");
            localStorage.setItem("deletedIndex", this.model.id.toString());
            this.transitionToRoute('remittance');
            this.toastr.success("Remittance was deleted", "Great!");
        }
    }
});
