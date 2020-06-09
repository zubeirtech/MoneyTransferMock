import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import {set } from "@ember/object";

export default Controller.extend({
    toastr: service("toast"),

    senderView: true,

    currencies: [{
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
            if (item !== active) set(this, `${item}View`, false);
        });
    },

    addToLoalStorage(notification) {
        if (localStorage.getItem("notifications")) {
            const nots = JSON.parse(localStorage.getItem("notifications"));
            nots.push(notification);
            localStorage.setItem("notifications", JSON.stringify(nots));
        } else {
            localStorage.setItem("notifications", JSON.stringify([notification]))
        }
    },

    actions: {
        setActive(item) {
            this.setToInActiveBesides(item);
        },

        selectSender(rem) {
            set(this, "senderFirstName", rem.sender);
        },

        selectReceiver(rem) {
            set(this, "receiverFullName", rem.receiver);
        },

        setCurrency(c) {
            set(this, "currency", c);
        },

        finalCreate(user) {
            if (user === "user") {
                this.toastr.success("User has been successfully created", "Great!");
            }
            this.final();
        },

        edit() {
            set(this, "editView", false);
            this.toastr.success("Remittance edited", "Great!");
            const notification = {
                topic: "Remittance",
                message: 'Remittance was edited'
            }

            this.addToLoalStorage(notification);

        },

        approve() {
            localStorage.setItem("approved", "true");
            localStorage.setItem("approvedIndex", this.model.id.toString());
            window.location.href = "/remittance"
            this.toastr.success("Remittance was approved", "Great!");
            const notification = {
                topic: "Remittance",
                message: 'Remittance was approved'
            }
            this.addToLoalStorage(notification);
        },

        delete() {
            localStorage.setItem("deleted", "true");
            localStorage.setItem("deletedIndex", this.model.id.toString());
            window.location.href = "/remittance"
            this.toastr.success("Remittance was deleted", "Great!");
            const notification = {
                topic: "Remittance",
                message: 'Remittance was deleted'
            }
            this.addToLoalStorage(notification);
        },

        refresh() {
            set(this, "editView", false);
            const rems = [{
                    id: 1,
                    sender: "John",
                    receiver: "Jill",
                    amount: "5 USD",
                    date: new Date().toDateString(),
                    status: "Approve",
                },
                {
                    id: 2,
                    sender: "Phil",
                    receiver: "Pam",
                    amount: "7 USD",
                    date: new Date().toDateString(),
                    status: "Approve",
                },
                {
                    id: 3,
                    sender: "Alex",
                    receiver: "Anna",
                    amount: "8 USD",
                    date: new Date().toDateString(),
                    status: "Done",
                },
                {
                    id: 4,
                    sender: "Jemal",
                    receiver: "Zubeir",
                    amount: "9 USD",
                    date: new Date().toDateString(),
                    status: "Done",
                },
            ];
            set(this, "model", rems[this.model.id - 1]);
        },
    },
});