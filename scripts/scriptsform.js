// Array de produtos conforme os requisitos da atividade 
const products = [
    {
        id: "fc-1885",
        name: "furlong cushion",
        averagerating: 4.7
    },
    {
        id: "fc-2050",
        name: "low line spitfire",
        averagerating: 3.5
    },
    {
        id: "fs-1987",
        name: "time traveler",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low rider",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById("productName");

   
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name; 
        selectElement.appendChild(option);
    });

    
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});