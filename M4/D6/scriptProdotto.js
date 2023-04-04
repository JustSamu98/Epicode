document.addEventListener("DOMContentLoaded", async () => {
    console.log("La pagina ha appena finito di caricare");

    //document.getElementById("container").innerHTML='<object type="text/html" style="height: 100%; width: 100%" data="infoUtente.html"></object>';

    var variabiliPassate = new URLSearchParams(window.location.search);
    var variabileID = variabiliPassate.get("id");

    fetch("https://jsonplaceholder.typicode.com/users/" + variabileID).then((response) => {
        response.json().then((data) => {
            console.log(data);
            mostraDati(data);
        });
    })
    .catch((err) => {console.log("Azz! C'è un errore, eccolo qui: " + err);});
});

//EXTRA 3 dentro il div iframe
function mostraDati(user) {
    const oggetto = document.querySelector("#container");
    oggetto.innerHTML = 
        `
        <td>${user.id}</td></br>
        <td>${user.name}</td></br>
        <td>${user.username}</td></br>
        <td>${user.email}</td></br>
        <div style="width: 100%">
            <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${user.address.geo.lat},${user.address.geo.lng}(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
            </iframe>
        </div>
        `;
}