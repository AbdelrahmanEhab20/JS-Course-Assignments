// script

var mydata = {
    "Students": [
        {
            "Id": 100,
            "Name": "Abdo",
            "Age": 21,
            "Address": "Cairo",
            "Skills": [
                "Programming",
                "Computer",
                "Presentation"
            ],
            "IsLeader": true
        },
        {
            "Id": 200,
            "Name": "ALi",
            "Age": 25,
            "Address": "Menia",
            "Skills": [
                "Programming",
                "Communication",
                "Presentation"
            ],
            "IsLeader": true
        },
        {
            "Id": 300,
            "Name": "Ahmaed",
            "Age": 28,
            "Address": null,
            "Skills": [
                "Communication",
                "Computer",
                "Presentation"
            ],
            "IsLeader": false
        }
    ]
}

function showData() {
    var container = document.getElementById("container");
    for (std of mydata["Students"]) {
        container.innerHTML += `<p id="id">your Id = ${std.Id}</p>
        <p id="name">your Name = ${std.Name}</p>
        <p id="skills"> your Skills =${std.Skills}</p> <hr>`;
    }
}
