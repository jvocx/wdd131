
document.getElementById("currentYear").textContent =
    new Date().getFullYear();



const products = [
    { id: "p1", name: "Air Fryer XL" },
    { id: "p2", name: "Smart TV 55\"" },
    { id: "p3", name: "Bluetooth Speaker" },
    { id: "p4", name: "Coffee Machine Pro" },
    { id: "p5", name: "Wireless Headphones" }
];


const productSelect = document.getElementById("productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});
