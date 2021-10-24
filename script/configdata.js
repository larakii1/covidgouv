/*$(document).ready(function () {
    $.get("https://api.thevirustracker.com/free-api?countryTotals=ALL", function (data) {

        console.log(data);
    })
})*/

$.ajax({
    type: "GET",
    url: "https://coronavirus.app/get-history?id=70NwEyCp2qX6xHZyNgfO",
    headers: {
        Autorization: 'Bearer oIXEW4yBLwVz7GFFc7cdDyOyxAjKH8ucLdAl6J4fBiQ1Iub5R70bh2TbrIt25eTP',

    },
    datatype: 'json',
    success: function (result) {
        console.log(result);
    }
})