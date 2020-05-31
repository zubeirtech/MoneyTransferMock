import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return [{
                id: 1,
                sender: "John",
                receiver: "Jill",
                amount: "5 USD",
                date: new Date().toISOString(),
                status: "Approve"
            },
            {
                id: 2,
                sender: "Phil",
                receiver: "Pam",
                amount: "7 USD",
                date: new Date().toISOString(),
                status: "Approve"

            },
            {
                id: 3,
                sender: "Alex",
                receiver: "Anna",
                amount: "8 USD",
                date: new Date().toISOString(),
                status: "Done"
            },
            {
                id: 4,
                sender: "Jemal",
                receiver: "Zubeir",
                amount: "9 USD",
                date: new Date().toISOString(),
                status: "Done"
            }
        ]
    }
});