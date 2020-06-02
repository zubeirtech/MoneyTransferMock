import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({

    actions: {
        search(val) {
            if(val) {
                set(this, "model", this.model.filter(rem => rem.sender.toLowerCase().includes(val.toLowerCase())))
            } else {
                set(this, "model", [
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
                ] )
                
                if(localStorage.getItem("sender")) {
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
        }
    }
});
