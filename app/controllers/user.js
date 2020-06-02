import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({

    generateRandomNumber() {
        return Math.floor(100000000 + Math.random() * 900000000);
    },


    actions: {
        search(val) {
            if(val) {
                set(this, "model", this.model.filter(rem => rem.firstName.toLowerCase().includes(val.toLowerCase()) || rem.mobile.toString().includes(val.toLowerCase())))
            } else {
                set(this, "model", [
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
                ] )

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
        
                    this.model.pushObject(sender);
                    this.model.pushObject(receiver);
                }
            }
        }
    }
});
