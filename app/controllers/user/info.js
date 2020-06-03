import Controller from '@ember/controller';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    toastr: service('toast'),

    generateRandomNumber() {
        return Math.floor(100000000 + Math.random() * 900000000);
    },

    actions: {
        edit() {
            set(this, "editView", false);
            this.toastr.success("User edited", "Great!");
        },

        refresh() {
            const users =  [
                {
                    id: 1,
                    firstName: "John",
                    lastName: "Doe",
                    mobile: this.generateRandomNumber(),
                    email: "John.Doe@mail.com"
                },
                {
                    id: 2,
                    firstName: "Alex",
                    lastName: "Xela",
                    mobile: this.generateRandomNumber(),
                    email: "Alex.Xela@mail.com"
                },
                {
                    id: 3,
                    firstName: "Phil",
                    lastName: "Lihp",
                    mobile: this.generateRandomNumber(),
                    email: "Phil.Lihp@mail.com"
                },
                 {
                    id: 4,
                    firstName: "Jemal",
                    lastName: "Lamej",
                    mobile: this.generateRandomNumber(),
                    email: "Jemal.Lamej@mail.com"
                },
            ]

            if(localStorage.getItem("sender")) {
                const sender = {
                    id: 5,
                    firstName: localStorage.getItem("sender"),
                    lastName: "smith",
                    mobile: this.generateRandomNumber(),
                    email: `${localStorage.getItem("sender")}@mail.com`
                }
    
                const receiver = {
                    id: 6,
                    firstName: localStorage.getItem("receiver"),
                    lastName: "johnson",
                    mobile: this.generateRandomNumber(),
                    email: `${localStorage.getItem("receiver")}@mail.com`
                }
    
                users.push(sender);
                users.push(receiver);
            }

            if(localStorage.getItem("newUser")) {
                const newUser = JSON.parse(localStorage.getItem("newUser"));
                users.push(newUser);
            }

            if(localStorage.getItem("sender")) {
                set(this, "model", users[this.model.id - 1])
            } else {
                set(this, "model", users[users.length - 1])
            }

        }
    }
});
