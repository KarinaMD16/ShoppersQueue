var agregar = document.getElementById("add");
var inicio = document.getElementById("start");
var input1 = document.getElementById("cola-1");
var input2 = document.getElementById("cola-2");
var input3 = document.getElementById("cola-3");
var comprador1 = document.getElementById("shoppers-1")
var comprador2 = document.getElementById("shoppers-2")
var comprador3 = document.getElementById("shoppers-3")

var cola1 = [];
var cola2 = [];
var cola3 = [];

function newShopper (comprador, cola){
    comprador.innerHTML = '';
    
    for (let i = 0; i < cola.length; i++) {
        const img = document.createElement('img');
        img.src = './assets/shopper.png'; 
        comprador.appendChild(img);
    }
}

function startQueue(cola, comprador) {
    if (cola.length === 0) return;

    const shoppers = comprador.getElementsByTagName('img');
    const img = shoppers[0];

        setTimeout(() => {
            img.classList.add('walk-out');
            setTimeout(() => {
                img.style.display = 'none';
                cola.shift();
                comprador.removeChild(img); 
                startQueue(cola, comprador);
            }, 200);
        }, 1400);
    
}

agregar.addEventListener('click', function(){
    var count1 = parseInt(input1.value, 10);
    var count2 = parseInt(input2.value, 10);
    var count3 = parseInt(input3.value, 10);

    for (let i = 0; i < count1; i++) cola1.push({});
    for (let i = 0; i < count2; i++) cola2.push({});
    for (let i = 0; i < count3; i++) cola3.push({});

    newShopper(comprador1, cola1);
    newShopper(comprador2, cola2);
    newShopper(comprador3, cola3);
});

inicio.addEventListener('click', function(){
    startQueue(cola1, comprador1);
    startQueue(cola2, comprador2);
    startQueue(cola3, comprador3);
});