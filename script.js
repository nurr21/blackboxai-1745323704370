document.getElementById('loadBtn').addEventListener('click', () => {
    fetch('/view-html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('result').innerHTML = data;
      })
      .catch(err => console.error('Error:', err));
  });
  