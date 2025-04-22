document.addEventListener('DOMContentLoaded', () => {
  const loadTableBtn = document.getElementById('loadTableBtn');
  const tableBody = document.getElementById('data-table-body');
  let messageVisible = false;

  loadTableBtn.addEventListener('click', () => {
    if (!messageVisible) {
      fetch('/data')
        .then(response => response.json())
        .then(data => {
          // Clear existing content
          tableBody.innerHTML = '';

          // Create header row
          const headerRow = document.createElement('div');
          headerRow.className = 'row header';

          const headerCol1 = document.createElement('div');
          headerCol1.textContent = 'Column 1';
          headerCol1.className = 'cell';

          const headerCol2 = document.createElement('div');
          headerCol2.textContent = 'Column 2';
          headerCol2.className = 'cell';

          headerRow.appendChild(headerCol1);
          headerRow.appendChild(headerCol2);
          tableBody.appendChild(headerRow);

          // Create data rows
          data.forEach(row => {
            const dataRow = document.createElement('div');
            dataRow.className = 'row';

            const dataCol1 = document.createElement('div');
            dataCol1.textContent = row.col1;
            dataCol1.className = 'cell';

            const dataCol2 = document.createElement('div');
            dataCol2.textContent = row.col2;
            dataCol2.className = 'cell';

            dataRow.appendChild(dataCol1);
            dataRow.appendChild(dataCol2);

            tableBody.appendChild(dataRow);
          });

          messageVisible = true;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } else {
      // Hide the message
      tableBody.innerHTML = '';
      messageVisible = false;
    }
  });
});
