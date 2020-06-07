import Route from '@ember/routing/route';
import {set} from '@ember/object';

export default Route.extend({
    model() {
        return [{
                id: 1,
                senderFirstName: "John",
                receiverFullName: "Jill",
                amount: "5 USD",
                date: new Date().toDateString(),
                status: "Approve"
            },
            {
                id: 2,
                senderFirstName: "Phil",
                receiverFullName: "Pam",
                amount: "7 USD",
                date: new Date().toDateString(),
                status: "Approve"

            },
            {
                id: 3,
                senderFirstName: "Alex",
                receiverFullName: "Anna",
                amount: "8 USD",
                date: new Date().toDateString(),
                status: "Done"
            },
            {
                id: 4,
                senderFirstName: "Jemal",
                receiverFullName: "Zubeir",
                amount: "9 USD",
                date: new Date().toDateString(),
                status: "Done"
            }
        ]
    },

    afterModel(model) {
        if (localStorage.getItem("newRem")) {
            const user = JSON.parse(localStorage.getItem("newRem"));
            model.push(user);
        }

        if (localStorage.getItem("approved")) {
            const index = parseInt(localStorage.getItem("approvedIndex"));
            const rem = model[index - 1];
            set(rem, "status", "Done");
        }

        if(localStorage.getItem("deleted")) {
            const index = parseInt(localStorage.getItem("deletedIndex"));
            const rem = model[index - 1];
            model.removeObject(rem);
        }
    }
});