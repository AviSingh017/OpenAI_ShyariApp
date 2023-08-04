async function fetchShayari() {
  const inputKeyword = document.getElementById('keywordInput');
  const shayariOutput = document.getElementById('shayariOutput');

  shayariOutput.textContent = "Generating Shyari for you. Please wait a minute...";

  try {
    const response = await fetch(`http://localhost:7000/shayari?keyword=${encodeURIComponent(inputKeyword.value)}`);
    const data = await response.json();
    shayariOutput.textContent = data.shayari;
  } catch (error) {
    shayariOutput.textContent = "An error occurred while fetching the shayari.";
    console.error(error);
  }
}
