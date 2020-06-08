import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    toastr: service('toast'),

    addToLoalStorage(notification) {
        if(localStorage.getItem("notifications")) {
            const nots = JSON.parse(localStorage.getItem("notifications"));
            nots.push(notification);
            localStorage.setItem("notifications", JSON.stringify(nots));
        } else {
            localStorage.setItem("notifications", JSON.stringify([notification]))
        }
    },

    actions: {
        save() {
            const user = {
                id: 7,
                firstName: this.firstName,
                lastName: this.lastName,
                address: this.address,
                socialSecurityNumber: this.socialSecurityNumber,
                mobile: this.mobile,
                email: this.email
            }

            const newUser = JSON.stringify(user);
            localStorage.setItem("newUser", newUser);
            this.toastr.success("Successfully created user", "Great!")
            window.location.href = "/user"
            const notif = {
                topic: "User",
                message: "Created new user"
            }

            this.addToLoalStorage(notif);
        }
    }

});
