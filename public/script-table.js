document.addEventListener('DOMContentLoaded', () => {
  const loadTableBtn = document.getElementById('loadTableBtn');
  const table = document.getElementById('data-table');
  const tableBody = document.getElementById('data-table-body');
  let tableVisible = false;

  loadTableBtn.addEventListener('click', () => {
    if (!tableVisible) {
      fetch('/data')
        .then(response => response.json())
        .then(data => {
          // Clear existing rows
          tableBody.innerHTML = '';

          // Populate table rows
          data.forEach(row => {
            const tr = document.createElement('tr');

            const td1 = document.createElement('td');
            td1.textContent = row.col1;

            const td2 = document.createElement('td');
            td2.textContent = row.col2;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tableBody.appendChild(tr);
          });

          table.style.display = 'table';
          tableVisible = true;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } else {
      // Hide the table
      table.style.display = 'none';
      tableBody.innerHTML = '';
      tableVisible = false;
    }
  });
});
