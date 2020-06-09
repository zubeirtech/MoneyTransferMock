import Controller from '@ember/controller';

export default Controller.extend({

    data: [
        {
            "label": "Cash",
            "value": 5403418.115000006,
            "type": "money"
        },
        {
            "label": "Deposit Account",
            "value": 8231078.16438347,
            "type": "money"
        },
        {
            "label": "Cheque",
            "value": 12935781.176999997,
            "type": "money"
        },
        {
            "label": "Email transfer",
            "value": 1621341.246006786,
            "type": "money"
        },
        {
            "label": "Card",
            "value": 1574677.59,
            "type": "money"
        },
        {
            "label": "Wire",
            "value": 10475849.276172025,
            "type": "money"
        }
    ],

    tsData: [
        {
            "label": "USD",
            "group": "May",
            "value": 26
        },
        {
            "label": "GBP",
            "group": "May",
            "value": 18
        },
        {
            "label": "EUR",
            "group": "May",
            "value": 150
        },
        {
            "label": "CNY",
            "group": "May",
            "value": 160
        },
        {
            "label": "INR",
            "group": "May",
            "value": 200
        },
        {
            "label": "USD",
            "group": "March",
            "value": 14
        },
        {
            "label": "GBP",
            "group": "March",
            "value": 31
        },
        {
            "label": "EUR",
            "group": "March",
            "value": 44
        },
        {
            "label": "CNY",
            "group": "March",
            "value": 30
        },
        {
            "label": "INR",
            "group": "March",
            "value": 62
        },
        {
            "label": "USD",
            "group": "June",
            "value": 75
        },
        {
            "label": "GBP",
            "group": "June",
            "value": 114
        },
        {
            "label": "EUR",
            "group": "June",
            "value": 19
        },
        {
            "label": "CNY",
            "group": "June",
            "value": 129
        },
        {
            "label": "INR",
            "group": "June",
            "value": 52
        },
        {
            "label": "USD",
            "group": "April",
            "value": 200
        },
        {
            "label": "GBP",
            "group": "April",
            "value": 14
        },
        {
            "label": "EUR",
            "group": "April",
            "value": 31
        },
        {
            "label": "CNY",
            "group": "April",
            "value": 44
        },
        {
            "label": "INR",
            "group": "April",
            "value": 30
        }
    ],

    ldata: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "USD Exchange Rate",
            backgroundColor: "rgba(54,162,235,0.2)",
            borderColor: "rgba(54,162,235,0.8)",
            data: [0.88, 0.89, 0.88, 0.90, 0.91, 0.92, 0.93, 0.95, 0.94, 0.91, 0.88, 0.82, 0.89, 0.90, 0.88, 0.87, 0.86, 0.85, 0.85, 0.85, 0.85]
          }
        ]
    },

    lineOptions: { // ADDED
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                }
            }]
        }
    }



});
