import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    toastr: service('toast'),

    actions: {
        save() {
            const user = {
                id: 7,
                firstName: this.firstName,
                lastName: this.lastName,
                mobile: this.mobile,
                email: this.email
            }

            const newUser = JSON.stringify(user);
            localStorage.setItem("newUser", newUser);
            this.toastr.success("Successfully created user", "Great!")
            this.transitionToRoute("user");
        }
    }

});
