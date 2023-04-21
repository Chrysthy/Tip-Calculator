function calculateTip(event) {
    alert('Fui submetido para a função');
    event.preventDefault();
   let bill = document.getElementById('bill').value;
   let service = document.getElementById('service').value;
   let numOfPeople = document.getElementById('people').value;

   if(bill == '' | service == 0){
alert(Please fill out the amounts)
return

   }

   if(numofPeolpe == "" | numOfPeople <= 1){
numOfPeople = 1;
document.getElementById('each').style.display = "none";
   }
else {

    document.getElementById('each').style.display = "block"
}

let total = (bill * service) / numOfPeolpe;
total = total.toFixed(2);
document.getElementById('tip').innerHTML = total;
document.getElementById('totalTip')´.style.display = "block";
}

document.getElementById('totalTitp').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip); 