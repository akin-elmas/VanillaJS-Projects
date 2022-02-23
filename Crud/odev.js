window.mockApiUrl = "https://5ffae59f87478d0017d9a9d2.mockapi.io/pets/";

window.removePet = (id) => {
  fetch(`${window.mockApiUrl}${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  }).then(() => {
    window.location.reload();
  });
};

window.openPetDetail = (id) => {
  fetch(`${window.mockApiUrl}${id}`)
    .then((response) => response.json())
    .then((data) => {
      const petModalHTMl = generateDetailModal(data);
      document.querySelector("body").innerHTML += petModalHTMl;
      $(`#exampleModal${id}`).modal("show");
      document.querySelector(`.exampleModal${id}`);
    });
};

window.generateDetailModal = (pet) => {
  return `<div class="modal fade" id="exampleModal${pet.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Pretty Pet</h5>
        <button type="button" class ="btn btn-success" data-bs-dismiss="modal">Close</button>
      </div>
      <div class="modal-body">
       Adı: ${pet.name} <br>
        ${pet.description} 
      
      </div>
      
    </div>
  </div>
</div>`;
};
