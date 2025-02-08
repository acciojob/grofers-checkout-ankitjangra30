const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

	const prices = document.querySelectorAll('.prices');
    let totalPrice = 0;

    prices.forEach(priceElement => {
        const priceText = priceElement.textContent;
        const price = parseFloat(priceText.replace(/[^0-9.]/g, '')); // Extract numbers and .
        
        if (!isNaN(price)) {
            totalPrice += price;
        } else {
            console.error("Invalid price:", priceText);
            alert("Some prices are not valid numbers. Please correct and try again.");
            return; // Stop further calculation
        }
    });

    const table = document.querySelector('table');
    if (!table) {
        console.error("Table not found!");
        return;
    }

    let totalRow = table.querySelector('#total-row');
    if (totalRow) {
        totalRow.remove();
    }

    totalRow = table.insertRow();
    totalRow.id = "total-row";

    const totalCell = totalRow.insertCell();
    totalCell.colSpan = table.rows[0].cells.length;
    totalCell.style.textAlign = "right";
    totalCell.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
  
};

getSumBtn.addEventListener("click", getSum);

