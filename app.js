$(document).ready(function() {

    $.ajax({
        type: "GET",
        // where you are making the GET request to
        url: "https://myapi.profstream.com/api/e5f248/persons",

        // callback functions
        success: function(people) {
            // console.log(people);
            // console.log(people[0].firstname + " " + people[0].lastname);
            // console.log(people[1].firstname + " " + people[1].lastname);
            // console.log(people[2].firstname + " " + people[2].lastname);
            // console.log(people[3].firstname + " " + people[3].lastname);
            // console.log(people[4].firstname + " " + people[4].lastname);

            HANDLE.renderTemplate({
                templateSource: "#people-template",
                data: people,
                where: "#people-rows",
                clearOriginal: true
            });

        },

        error: function() {
            alert("Uh oh!");
        }

    });

});
