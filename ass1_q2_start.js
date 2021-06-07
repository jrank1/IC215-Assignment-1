/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

   for (var i = 0; i < 3; i++) {
      outputCartRow(filenames[i], titles[i], quantities[i], prices[i], calculateTotal(quantities[i], prices[i]));
  }
  
  let subtotal = calcualteSubtotal(quantities, prices);
  let tax = calculateTax(subtotal);
  let shipping = calculateShipping(subtotal);
  let grandTotal = calculateGrandTotal(subtotal, tax, shipping);
  
  // subtotal row
  document.write('<tr class="totals">');
  document.write('<td colspan="4">Subtotal</td>');
  document.write('<td>$' + subtotal.toFixed(2) + '</td>');
  document.write('</tr>');
  
  // tax row
  document.write('<tr class="totals">');
  document.write('<td colspan="4">Tax</td>');
  document.write('<td>$' + tax.toFixed(2) + '</td>');
  document.write('</tr>');
  
  // shipping row
  document.write('<tr class="totals">');
  document.write('<td colspan="4">Shipping</td>');
  document.write('<td>$' + shipping.toFixed(2) + '</td>');
  document.write('</tr>');
  
  // grand total row
  document.write('<tr class="totals focus">');
  document.write('<td colspan="4">Grand Total</td>');
  document.write('<td>$' + grandTotal.toFixed(2) + '</td>');
  document.write('</tr>');