import React from 'react';

function PricingTable() {
return (
<section className="pricing-table">
<h2>Pricing</h2>
<table>
<thead>
<tr>
<th>Plan</th>
<th>Price</th>
<th>Features</th>
</tr>
</thead>
<tbody>
<tr>
<td>Basic</td>
<td>$10</td>
<td>Feature 1</td>
</tr>
<tr>
<td>Pro</td>
<td>$20</td>
<td>Feature 1, Feature 2</td>
</tr>
</tbody>
</table>
</section>
);
}

export default PricingTable;