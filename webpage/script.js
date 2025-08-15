// script.js

// Bus data (converted from your Java version)
const buses = [
    {
        busNumber: "TN-01-AA-1001",
        startCity: "Coimbatore",
        endCity: "Madurai",
        stops: ["Coimbatore", "Pollachi", "Udumalpet", "Palani", "Oddanchatram", "PSNA", "Dindigul", "Madurai"],
        stopTimes: ["06:00", "07:00", "07:40", "08:10", "08:45", "09:15", "09:45", "11:00"]
    },
    {
        busNumber: "TN-02-BB-2002",
        startCity: "Ottanchathiram",
        endCity: "Dindigul",
        stops: ["Ottanchathiram", "Vedasandur", "PSNA", "Dindigul"],
        stopTimes: ["07:30", "07:45", "08:00", "08:20"]
    },
    {
        busNumber: "TN-03-CC-3003",
        startCity: "Tiruppur",
        endCity: "Dindigul",
        stops: ["Tiruppur", "Kangeyam", "Karur", "Vedasandur", "PSNA", "Dindigul"],
        stopTimes: ["05:30", "06:10", "07:10", "08:20", "08:40", "09:00"]
    },
    {
        busNumber: "TN-04-DD-4004",
        startCity: "Coimbatore",
        endCity: "Trichy",
        stops: ["Coimbatore", "Sulur", "Palladam", "Karur", "Kulithalai", "Trichy"],
        stopTimes: ["06:15", "06:40", "07:10", "08:20", "09:15", "10:30"]
    },
    {
        busNumber: "TN-05-EE-5005",
        startCity: "Palani",
        endCity: "Dindigul",
        stops: ["Palani", "Oddanchatram", "Vedasandur", "PSNA", "Dindigul"],
        stopTimes: ["08:10", "08:30", "08:40", "08:50", "09:10"]
    },
    {
        busNumber: "TN-06-FF-6006",
        startCity: "Karur",
        endCity: "Madurai",
        stops: ["Karur", "Vedasandur", "Nilakottai", "Sholavandan", "Madurai"],
        stopTimes: ["09:00", "09:40", "10:10", "10:40", "11:15"]
    },
    {
        busNumber: "TN-07-GG-7007",
        startCity: "Dindigul",
        endCity: "Theni",
        stops: ["Dindigul", "Seelapadi", "Batlagundu", "Periyakulam", "Theni"],
        stopTimes: ["06:50", "07:00", "07:40", "08:10", "08:40"]
    },
    {
        busNumber: "TN-08-HH-8008",
        startCity: "Oddanchatram",
        endCity: "Karur",
        stops: ["Oddanchatram", "Vedasandur", "Karur"],
        stopTimes: ["05:45", "06:10", "07:00"]
    },
    {
        busNumber: "TN-09-II-9009",
        startCity: "Erode",
        endCity: "Madurai",
        stops: ["Erode", "Karur", "Vedasandur", "PSNA", "Dindigul", "Madurai"],
        stopTimes: ["07:20", "08:10", "09:00", "09:15", "09:35", "10:50"]
    },
    {
        busNumber: "TN-10-JJ-1010",
        startCity: "Palani",
        endCity: "Theni",
        stops: ["Palani", "Oddanchatram", "Kodaikanal Road", "Periyakulam", "Theni"],
        stopTimes: ["04:50", "05:20", "06:10", "07:00", "07:30"]
    }
];

function findBuses() {
    const stopInput = document.getElementById("stopInput").value.trim();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (stopInput === "") {
        resultsDiv.innerHTML = "<p style='color:red;'>Please enter a stop name.</p>";
        return;
    }

    let foundBuses = [];

    buses.forEach(bus => {
        bus.stops.forEach((stop, index) => {
            if (stop.toLowerCase() === stopInput.toLowerCase()) {
                foundBuses.push({
                    number: bus.busNumber,
                    route: `${bus.startCity} → ${bus.endCity}`,
                    time: bus.stopTimes[index]
                });
            }
        });
    });

    if (foundBuses.length === 0) {
        resultsDiv.innerHTML = `<p>No buses found passing through this stop.</p>`;
        return;
    }

    // Create table
    let tableHTML = `
        <h3>Buses passing through '${stopInput}':</h3>
        <table>
            <tr>
                <th>#</th>
                <th>Bus Number</th>
                <th>Route</th>
                <th>Time at ${stopInput}</th>
            </tr>
    `;

    foundBuses.forEach((bus, index) => {
        tableHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${bus.number}</td>
                <td>${bus.route}</td>
                <td>${bus.time}</td>
            </tr>
        `;
    });

    tableHTML += `</table>
        <p><b>Total buses:</b> ${foundBuses.length}</p>`;

    resultsDiv.innerHTML = tableHTML;
}
