import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            {
                sender: "John",
                receiver: "Jill",
                amount: "5 USD",
                date: new Date().toISOString()
            },
            {
                sender: "Phil",
                receiver: "Pam",
                amount: "7 USD",
                date: new Date().toISOString()
            },
            {
                sender: "Alex",
                receiver: "Anna",
                amount: "8 USD",
                date: new Date().toISOString()
            },
            {
                sender: "Jemal",
                receiver: "Zubeir",
                amount: "9 USD",
                date: new Date().toISOString()
            }
        ]        
    }
});
