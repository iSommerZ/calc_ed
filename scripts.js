function calculateTip(event) {
    event.preventDefault();
    let capacity = document.getElementById('capacity').value;
    let buyValue = document.getElementById('buyValue').value;
    let sellValue = document.getElementById('sellValue').value;
    let saltoDis = document.getElementById('saltoDis').value;
    let routedis = document.getElementById('routeDis').value;

    if (capacity === '' || buyValue === '' || sellValue === 0) {
        alert("Por favor, preencha os valores");
        return;
    }

    let totalRoute = (sellValue * capacity) - (buyValue * capacity);
    let totalSalt = (routedis / saltoDis);

    document.getElementById('routeValue').innerHTML = totalRoute.toLocaleString("pt-BR", {style:"currency", currency: "BRL"});
    document.getElementById('totalRoute').style.display = "block";
    document.getElementById('lucro').style.display = "block";
    document.getElementById('salt').style.display = "block";
    document.getElementById('totalSalt').style.display = "block";
    document.getElementById('salt').innerHTML = totalSalt.toFixed(2);
}

document.getElementById('totalRoute').style.display = "none";
document.getElementById('lucro').style.display = "none";
document.getElementById('salt').style.display = "none";
document.getElementById('totalSalt').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);
