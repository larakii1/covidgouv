const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];
const data = {
    labels: labels,
    datasets: [{
        label: 'Contamination',
        backgroundColor: 'rgb(255, 165, 0)',
        borderColor: 'rgb(255, 165, 0)',
        data: [0, 10, 5, 2, 20, 30, 45],
        tension: 0.1,

    },
    {
        label: 'Rétablissement',
        backgroundColor: 'rgb(60, 179, 113)',
        borderColor: 'rgb(60, 179, 113)',
        data: [0, 10, 25, 2, 20, 30, 45],
        tension: 0.1,

    }, {
        label: 'Décès',
        backgroundColor: 'rgb(255, 63, 79)',
        borderColor: 'rgb(255, 63, 79)',
        data: [0, 25, 15, 22, 20, 30, 45],
        tension: 0.1,

    }


    ]
};



const config = {
    type: 'line',
    data: data,
    options: {}
};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);

