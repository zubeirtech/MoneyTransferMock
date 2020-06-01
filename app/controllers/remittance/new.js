import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
    
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
        }
    }
});
