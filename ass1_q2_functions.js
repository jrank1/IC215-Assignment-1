/* define functions here */

function outputCartRow(file, title, quantity, price, total) {
    document.write('<tr>');
    document.write('<td><img src="img/' + file + '"></td>');
    document.write('<td>' + title + '</td>');
    document.write('<td>' + quantity + '</td>');
    document.write('<td>$' + price.toFixed(2) + '</td>');
    document.write('<td>$' + total.toFixed(2) + '</td>');
    document.write('</tr>');
}

function calculateTotal(quantity, price) {
    return quantity * price;
}

function calcualteSubtotal(quantities, prices) {
    var subtotal = 0;
    for (var i = 0; i < quantities.length; i++) {
        subtotal = subtotal + calculateTotal(quantities[i],prices[i]);
    }
    return subtotal;
}

function calculateTax(subtotal) {
    return subtotal * .1;
}

function calculateShipping(subtotal) {
    return subtotal > 1000 ? 0 : 40;
}

function calculateGrandTotal(subtotal, tax, shipping) {
    return subtotal + tax + shipping;
}