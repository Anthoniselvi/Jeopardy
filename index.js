async function getCatagories(count, offset) {
  let response = await fetch(
    "https://jservice.io/api/categories?count=4&offset=30"
  );
  let data = await response.json();
  return data;
}

function getClueHtml(clueValue) {
  return `<div class="my-catagory-clue" style="grid-row-start: ${
    clueValue / 100 + 1
  }"> $${clueValue}</div>`;
}

function getCatagoryHtml(catagory) {
  return `
    <div class="my-catagory-title">${catagory.title}</div>
    ${getClueHtml(100)}
    ${getClueHtml(200)}
    ${getClueHtml(300)}
    ${getClueHtml(400)}
    `;
}
getCatagories(5).then((catagories) => {
  console.log(catagories);
  document.body.innerHTML = `<div class="board">
  ${catagories.map(getCatagoryHtml).join("")}
  </div>`;
});
