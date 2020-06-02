import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
                id: 1,
                sender: "John",
                receiver: "Jill",
                amount: "5 USD",
                date: new Date().toDateString(),
                status: "Approve"
            },
            {
                id: 2,
                sender: "Phil",
                receiver: "Pam",
                amount: "7 USD",
                date: new Date().toDateString(),
                status: "Approve"

            },
            {
                id: 3,
                sender: "Alex",
                receiver: "Anna",
                amount: "8 USD",
                date: new Date().toDateString(),
                status: "Done"
            },
            {
                id: 4,
                sender: "Jemal",
                receiver: "Zubeir",
                amount: "9 USD",
                date: new Date().toDateString(),
                status: "Done"
            }
        ]
    },

    afterModel(model) {
        if (localStorage.getItem("sender")) {
            const newRem = {
                id: 5,
                sender: localStorage.getItem("sender"),
                receiver: localStorage.getItem("receiver"),
                amount: "10 USD",
                date: new Date().toDateString(),
                status: "Done"
            }
            model.pushObject(newRem);
        }
    }
});