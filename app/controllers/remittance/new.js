import Controller from '@ember/controller';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    toastr: service('toast'),
    
    senderView: true,

    currencies: [
        {
            id: 1,
            value: "USD"
        },
        {
            id: 2,
            value: "EUR"
        },
        {
            id: 3,
            value: "GBP"
        }
    ],

    items: ["sender", "receiver", "amount", "payment", "review"],
    
    final(user) {
        this.toastr.success("Remittance has been successfully created", "Great!");
        localStorage.setItem("sender", this.senderFirstName);
        localStorage.setItem("receiver", this.receiverFullName);
        this.transitionToRoute("remittance");
    },

    setToInActiveBesides(active) {
        set(this, `${active}View`, true);
        this.items.forEach(item => {
            if(item !== active) set(this, `${item}View`, false);
        });
    },

    actions: {
        setActive(item) {
            this.setToInActiveBesides(item);
        },

        selectSender(rem) {
            set(this, "senderFirstName", rem.sender);
        },

        selectReceiver(rem) {
            set(this, 'receiverFullName', rem.receiver);
        },

        setCurrency(c) {
            set(this, "currency", c);
        },

        finalCreate(user) {
            if(user === "user") {
                this.toastr.success("User has been successfully created", "Great!")
            }
            this.final();
        },

        create() {
            if(this.senderFirstName && this.receiverFullName) {
                if(!this.model.sender.includes(this.senderFirstName) || !this.model.sender.includes(this.receiverFullName )) {
                    set(this, "createUserView", true);
                } else {
                    this.final();
                }
            } else {
                this.toastr.warning('Please fill out sender and receiver');
            }
            
        }
    }
});
