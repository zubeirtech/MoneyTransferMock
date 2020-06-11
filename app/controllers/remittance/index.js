import Controller from "@ember/controller";
import { set } from "@ember/object";

export default Controller.extend({
  actions: {
    search(val) {
      if (val) {
        set(
          this,
          "model",
          this.model.filter((rem) =>
            rem.senderFirstName.toLowerCase().includes(val.toLowerCase())
          )
        );
      } else {
        const names = [
          "Floppy_Disk_Puppy",
          "Ice_cream_Plants",
          "Cat_Robot",
          "Fusion_Puppy",
          "Hnads_Clock",
          "Video_games_Boat",
          "Ice_cream_cone_Prints",
          "Shower_Laptop",
          "Crab_Floppy_Disk",
          "Sink_Soda",
        ];

        set(this, "model", [
          {
            id: 1,
            senderFirstName: "John",
            receiverFullName: "Jill",
            amount: "5 USD",
            date: new Date().toDateString(),
            status: "Approve",
            senderMiddleName: "",
            senderLastName: names[0],
            customerType: "Individual",
            senderMobileNumber: "12345678",
            senderTel: "",
            senderMother: names[1],
            relationship: "not related",
            purpose: "Invoice",
            comment: "No comment",
            remittanceType: "Cash Collection",
            mmtType: "Mpesa Transfer",
            receiverMobile: "12345476675",
            servicePercentage: "4",
            serviceCharges: "6",
            totalAmount: "7 USD",
            currencyRate: "0.91",
            currToCurr: "0.99",
            receivingAmount: "6.20 USD",
            currency: "USD",
            paymentType: "Email Transfer",
            paymentAmount: "4",
          },
          {
            id: 2,
            senderFirstName: "Phil",
            receiverFullName: "Pam",
            amount: "7 USD",
            date: new Date().toDateString(),
            status: "Approve",
            senderMiddleName: "",
            senderLastName: names[2],
            customerType: "Individual",
            senderMobileNumber: "12345678",
            senderTel: "",
            senderMother: names[3],
            relationship: "not related",
            purpose: "Invoice",
            comment: "No comment",
            remittanceType: "Cash Collection",
            mmtType: "Mpesa Transfer",
            receiverMobile: "12345476675",
            servicePercentage: "4",
            serviceCharges: "6",
            totalAmount: "7 USD",
            currencyRate: "0.91",
            currToCurr: "0.99",
            receivingAmount: "6.20 USD",
            currency: "USD",
            paymentType: "Email Transfer",
            paymentAmount: "4",
          },
          {
            id: 3,
            senderFirstName: "Alex",
            receiverFullName: "Anna",
            amount: "8 USD",
            date: new Date().toDateString(),
            status: "Done",
            senderMiddleName: "",
            senderLastName: names[5],
            customerType: "Individual",
            senderMobileNumber: "12345678",
            senderTel: "",
            senderMother: names[6],
            relationship: "not related",
            purpose: "Invoice",
            comment: "No comment",
            remittanceType: "Cash Collection",
            mmtType: "Mpesa Transfer",
            receiverMobile: "12345476675",
            servicePercentage: "4",
            serviceCharges: "6",
            totalAmount: "7 USD",
            currencyRate: "0.91",
            currToCurr: "0.99",
            receivingAmount: "6.20 USD",
            currency: "USD",
            paymentType: "Email Transfer",
            paymentAmount: "4",
          },
          {
            id: 4,
            senderFirstName: "Jemal",
            receiverFullName: "Zubeir",
            amount: "9 USD",
            date: new Date().toDateString(),
            status: "Done",
            senderMiddleName: "",
            senderLastName: names[7],
            customerType: "Individual",
            senderMobileNumber: "12345678",
            senderTel: "",
            senderMother: names[8],
            relationship: "not related",
            purpose: "Invoice",
            comment: "No comment",
            remittanceType: "Cash Collection",
            mmtType: "Mpesa Transfer",
            receiverMobile: "12345476675",
            servicePercentage: "4",
            serviceCharges: "6",
            totalAmount: "7 USD",
            currencyRate: "0.91",
            currToCurr: "0.99",
            receivingAmount: "6.20 USD",
            currency: "USD",
            paymentType: "Email Transfer",
            paymentAmount: "4",
          },
        ]);

        if (localStorage.getItem("newRem")) {
            const user = JSON.parse(localStorage.getItem("newRem"));
            this.model.push(user);
        }

        if (localStorage.getItem("approved")) {
            const index = parseInt(localStorage.getItem("approvedIndex"));
            const rem = this.model[index - 1];
            set(rem, "status", "Done");
        }

        if (localStorage.getItem("deleted")) {
            const index = parseInt(localStorage.getItem("deletedIndex"));
            const rem = this.model[index - 1];
            this.model.removeObject(rem);
        }
      }
    },
  },
});
