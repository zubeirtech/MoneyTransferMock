import Controller from '@ember/controller';

export default Controller.extend({

    data: [
        {
            "label": "Cash & Cash Equivalent",
            "value": 5403418.115000006,
            "type": "money"
        },
        {
            "label": "Fixed Income",
            "value": 8231078.16438347,
            "type": "money"
        },
        {
            "label": "Equity",
            "value": 12935781.176999997,
            "type": "money"
        },
        {
            "label": "Hedge Fund",
            "value": 1621341.246006786,
            "type": "money"
        },
        {
            "label": "Private Equity",
            "value": 1574677.59,
            "type": "money"
        },
        {
            "label": "Real Assets",
            "value": 10475849.276172025,
            "type": "money"
        }
    ],

    tsData: [
        {
            "label": "Label 1",
            "group": "Group Two",
            "value": 26
        },
        {
            "label": "Label 2",
            "group": "Group Two",
            "value": 18
        },
        {
            "label": "Label 3",
            "group": "Group Two",
            "value": 150
        },
        {
            "label": "Label 4",
            "group": "Group Two",
            "value": 160
        },
        {
            "label": "Label 5",
            "group": "Group Two",
            "value": 200
        },
        {
            "label": "Label 1",
            "group": "Group Three",
            "value": 14
        },
        {
            "label": "Label 2",
            "group": "Group Three",
            "value": 31
        },
        {
            "label": "Label 3",
            "group": "Group Three",
            "value": 44
        },
        {
            "label": "Label 4",
            "group": "Group Three",
            "value": 30
        },
        {
            "label": "Label 5",
            "group": "Group Three",
            "value": 62
        },
        {
            "label": "Label 1",
            "group": "Group Four",
            "value": 75
        },
        {
            "label": "Label 2",
            "group": "Group Four",
            "value": 114
        },
        {
            "label": "Label 3",
            "group": "Group Four",
            "value": 19
        },
        {
            "label": "Label 4",
            "group": "Group Four",
            "value": 129
        },
        {
            "label": "Label 5",
            "group": "Group Four",
            "value": 52
        },
        {
            "label": "Label 1",
            "group": "Group Five",
            "value": 200
        },
        {
            "label": "Label 2",
            "group": "Group Five",
            "value": 14
        },
        {
            "label": "Label 3",
            "group": "Group Five",
            "value": 31
        },
        {
            "label": "Label 4",
            "group": "Group Five",
            "value": 44
        },
        {
            "label": "Label 5",
            "group": "Group Five",
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
            label: "Weight-Progress",
            backgroundColor: "rgba(54,162,235,0.2)",
            borderColor: "rgba(54,162,235,0.8)",
            data: [12, 19, 3, 5, 2, 3,6,8,3,11,3,22,19]
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
