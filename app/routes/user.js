import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    ajax: service(),

    generateRandomNumber() {
        return Math.floor(100000000 + Math.random() * 900000000);
    },
    
    model() {
        return [
            {
                firstName: "John",
                lastName: "Doe",
                mobile: this.generateRandomNumber(),
                email: "John.Doe@mail.com"
            },
            {
                firstName: "Alex",
                lastName: "Xela",
                mobile: this.generateRandomNumber(),
                email: "Alex.Xela@mail.com"
            },
            {
                firstName: "Phil",
                lastName: "Lihp",
                mobile: this.generateRandomNumber(),
                email: "Phil.Lihp@mail.com"
            },
             {
                firstName: "Jemal",
                lastName: "Lamej",
                mobile: this.generateRandomNumber(),
                email: "Jemal.Lamej@mail.com"
            },
        ]
    },

    async afterModel(model) {
        if(localStorage.getItem("sender")) {
            const sender = {
                firstName: localStorage.getItem("sender"),
                lastName: "smith",
                mobile: this.generateRandomNumber(),
                email: `${localStorage.getItem("sender")}@mail.com`
            }

            const receiver = {
                firstName: localStorage.getItem("receiver"),
                lastName: "johnson",
                mobile: this.generateRandomNumber(),
                email: `${localStorage.getItem("receiver")}@mail.com`
            }

            model.pushObject(sender);
            model.pushObject(receiver);
        }
    }
});
