const SECRET_CODE = "VINILAAND";

const unlockBtn = document.getElementById("unlockBtn");
const ticketContainer = document.getElementById("ticketContainer");

unlockBtn.addEventListener("click", function () {

    const code = prompt("Enter Secret Code");

    if (code === null) return;

    if (code.trim().toUpperCase() !== SECRET_CODE) {
        alert("Wrong Code!");
        return;
    }

    unlockBtn.style.display = "none";

    ticketContainer.innerHTML = "";

    players.forEach(ticket => {

        ticketContainer.innerHTML += `
        <div class="ticket">

            <h2>🎟 Ticket ${ticket.id}</h2>

            <div class="player">
                <img src="${ticket.brazil.image}" alt="${ticket.brazil.name}">
                <h3>🇧🇷 ${ticket.brazil.name}</h3>
            </div>

            <hr>

            <div class="player">
                <img src="${ticket.norway.image}" alt="${ticket.norway.name}">
                <h3>🇳🇴 ${ticket.norway.name}</h3>
            </div>

        </div>
        `;

    });

});
