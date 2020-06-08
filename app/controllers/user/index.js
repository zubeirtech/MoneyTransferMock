import Controller from '@ember/controller';
import {set } from '@ember/object';

export default Controller.extend({

    generateRandomNumber() {
        return Math.floor(100000000 + Math.random() * 900000000);
    },


    actions: {
        search(val) {
            if (val) {
                set(this, "model", this.model.filter(rem => rem.firstName.toLowerCase().includes(val.toLowerCase()) || rem.mobile.toString().includes(val.toLowerCase())))
            } else {
                set(this, "model", [
                    {
                      id: 1,
                      firstName: "John",
                      lastName: "Doe",
                      address: "Rosestreet 12, 89320 WA, US",
                      socialSecurityNumber: this.generateRandomNumber(),
                      receivers: [
                        {
                          id: 3445,
                          firstName: "FOO",
                          lastName: "Lihp",
                          address: "injerastreet 124, 89320 WA, US",
                          socialSecurityNumber: this.generateRandomNumber(),
                          receiver: [],
                          applications: [],
                          mobile: this.generateRandomNumber(),
                          email: "Foo.Lihp@mail.com",
                        },
                        {
                          id: 3344,
                          firstName: "Baz",
                          lastName: "Lihp",
                          address: "injerastreet 123, 89320 WA, US",
                          socialSecurityNumber: this.generateRandomNumber(),
                          receiver: [],
                          applications: [],
                          mobile: this.generateRandomNumber(),
                          email: "Baz.Lihp@mail.com",
                        },
                      ],
                      applications: [
                        {
                          id: 134,
                          sender: "John",
                          receiver: "Jidll",
                          amount: "5 USD",
                          date: new Date().toISOString(),
                          status: "Done",
                        },
                        {
                          id: 223424,
                          sender: "John",
                          receiver: "Pamc",
                          amount: "7 USD",
                          date: new Date().toISOString(),
                          status: "Done",
                        },
                      ],
                      mobile: this.generateRandomNumber(),
                      email: "John.Doe@mail.com",
                    },
                    {
                      id: 2,
                      firstName: "Alex",
                      lastName: "Xela",
                      address: "Sesamestreet 12, 89320 WA, US",
                      socialSecurityNumber: this.generateRandomNumber(),
                      receivers: [
                          {
                              id: 343,
                              firstName: "FOaaO",
                              lastName: "Lihp",
                              address: "injerastreet 124, 89320 WA, US",
                              socialSecurityNumber: this.generateRandomNumber(),
                              receiver: [],
                              applications: [],
                              mobile: this.generateRandomNumber(),
                              email: "Foao.Lihp@mail.com",
                            },
                            {
                              id: 453,
                              firstName: "Bayyz",
                              lastName: "Lihp",
                              address: "injerastreet 123, 89320 WA, US",
                              socialSecurityNumber: this.generateRandomNumber(),
                              receiver: [],
                              applications: [],
                              mobile: this.generateRandomNumber(),
                              email: "Bayz.Lihp@mail.com",
                            },
                      ],
                      applications: [
                        {
                          id: 1234,
                          sender: "Alex",
                          receiver: "Jillx",
                          amount: "5 USD",
                          date: new Date().toISOString(),
                          status: "Done",
                        },
                        {
                          id: 2556,
                          sender: "Alex",
                          receiver: "azcdc",
                          amount: "7 USD",
                          date: new Date().toISOString(),
                          status: "Done",
                        },
                      ],
                      mobile: this.generateRandomNumber(),
                      email: "Alex.Xela@mail.com",
                    },
                    {
                      id: 3,
                      firstName: "Phil",
                      lastName: "Lihp",
                      address: "injerastreet 12, 89320 WA, US",
                      socialSecurityNumber: this.generateRandomNumber(),
                      receivers: [
                          {
                              id: 3564,
                              firstName: "FOy",
                              lastName: "Lihp",
                              address: "injerastreet 124, 89320 WA, US",
                              socialSecurityNumber: this.generateRandomNumber(),
                              receiver: [],
                              applications: [],
                              mobile: this.generateRandomNumber(),
                              email: "Foy.Lihp@mail.com",
                            },
                            {
                              id: 3356,
                              firstName: "Balz",
                              lastName: "Lihp",
                              address: "injerastreet 123, 89320 WA, US",
                              socialSecurityNumber: this.generateRandomNumber(),
                              receiver: [],
                              applications: [],
                              mobile: this.generateRandomNumber(),
                              email: "Balz.Lihp@mail.com",
                            },
                      ],
                      applications: [
                        {
                          id: 654,
                          sender: "Phil",
                          receiver: "Jilmkl",
                          amount: "5 USD",
                          date: new Date().toISOString(),
                          status: "Done",
                        },
                        {
                          id: 3452,
                          sender: "Phil",
                          receiver: "Paokom",
                          amount: "7 USD",
                          date: new Date().toISOString(),
                          status: "Done",
                        },
                      ],
                      mobile: this.generateRandomNumber(),
                      email: "Phil.Lihp@mail.com",
                    },
                    {
                      id: 4,
                      firstName: "Jemal",
                      lastName: "Lamej",
                      address: "wasabistreet 12, 89320 WA, US",
                      socialSecurityNumber: this.generateRandomNumber(),
                      receivers: [
                          {
                              id: 345,
                              firstName: "FOiO",
                              lastName: "Lihp",
                              address: "injerastreet 124, 89320 WA, US",
                              socialSecurityNumber: this.generateRandomNumber(),
                              receiver: [],
                              applications: [],
                              mobile: this.generateRandomNumber(),
                              email: "Foio.Lihp@mail.com",
                            },
                            {
                              id: 3566,
                              firstName: "Bahz",
                              lastName: "Lihp",
                              address: "injerastreet 123, 89320 WA, US",
                              socialSecurityNumber: this.generateRandomNumber(),
                              receiver: [],
                              applications: [],
                              mobile: this.generateRandomNumber(),
                              email: "Bahz.Lihp@mail.com",
                            },
                      ],
                      applications: [
                        {
                          id: 1556,
                          sender: "Jemal",
                          receiver: "Jilxl",
                          amount: "5 USD",
                          date: new Date().toISOString(),
                          status: "Done",
                        },
                        {
                          id: 6742,
                          sender: "Jemal",
                          receiver: "Pavvm",
                          amount: "7 USD",
                          date: new Date().toISOString(),
                          status: "Done",
                        },
                      ],
                      mobile: this.generateRandomNumber(),
                      email: "Jemal.Lamej@mail.com",
                    },
                  ])

                  if (localStorage.getItem("sender")) {
                    const sender = {
                      id: 5,
                      firstName: localStorage.getItem("sender"),
                      lastName: "smith",
                      address: "azmistreet 12, 89320 WA, US",
                      receiver: [],
                      applications: [],
                      socialSecurityNumber: this.generateRandomNumber(),
                      mobile: this.generateRandomNumber(),
                      email: `${localStorage.getItem("sender")}@mail.com`,
                    };
              
                    const receiver = {
                      id: 6,
                      firstName: localStorage.getItem("receiver"),
                      lastName: "johnson",
                      address: "chirostreet 12, 89320 WA, US",
                      receiver: [],
                      applications: [],
                      socialSecurityNumber: this.generateRandomNumber(),
                      mobile: this.generateRandomNumber(),
                      email: `${localStorage.getItem("receiver")}@mail.com`,
                    };
              
                    this.model.pushObject(sender);
                    this.model.pushObject(receiver);
                  }
              
                  if (localStorage.getItem("newUser")) {
                    const newUser = JSON.parse(localStorage.getItem("newUser"));
                    model.pushObject(newUser);
                  }if (localStorage.getItem("sender")) {
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