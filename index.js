const CAT_FACT_END_POINT = 'https://catfact.ninja/fact';

const $catFactDesc = document.getElementById('catFactDesc');
const $updateButton = document.getElementById('updateButton');

$updateButton.addEventListener('click', function () {
  $catFactDesc.innerHTML = '';
  fetchCatFact();
});

async function fetchCatFact() {
  try {
    const res = await window.fetch(CAT_FACT_END_POINT, { methods: 'GET' }).then((res) => res.json());
    $catFactDesc.appendChild(document.createTextNode(res.fact));
  } catch (err) {
    console.error(err.message);
  }
}
