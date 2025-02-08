const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

	const prices = document.querySelectorAll('.prices');
    let totalPrice = 0;

    prices.forEach(priceElement => {
        const price = parseFloat(priceElement.textContent); // Parse price as float
        if (!isNaN(price)) { // Check if parsed value is a valid number
            totalPrice += price;
        } else {
            console.error("Invalid price:", priceElement.textContent); // Handle invalid price
            alert("Some prices are not valid numbers. Please correct and try again.")
            return; //stop further calculation
        }
    });

    const table = document.querySelector('table'); // Assumes there's only one table
    if (!table) {
        console.error("Table not found!");
        return;
    }

    // Check if the total row already exists to avoid appending multiple times
    let totalRow = table.querySelector('#total-row');
    if (totalRow) {
        totalRow.remove(); // Remove old total row if present
    }

    totalRow = table.insertRow(); // Insert at the end by default
    totalRow.id = "total-row"; //Give it an ID to find it later

    const totalCell = totalRow.insertCell();
    totalCell.colSpan = table.rows[0].cells.length; // Span across all columns
    totalCell.style.textAlign = "right"; //Align to right
    totalCell.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
  
};

getSumBtn.addEventListener("click", getSum);

