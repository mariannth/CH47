const productos = ["Jabon facial piel delicada", "Crema hidratante facial (día)", "Crema hidratante (noche)", "Protector solar", "Desodorante", "Bálsamo para labios", "Shampoo para cabello liso", "Shampoo para cabello rizado", "Crema corporal", "Shampoo corporal", "Rimel", "Delineador", "Sombra para ojos", "Tónico facial", "Mascarilla de noche", "Set de Maquillaje", "Crema corporal piel seca", "Crema corporal piel grasa", "Jabon", "Exfoliante", "Desodorante", "Iluminador", "Base", "Aceite para cabello", "Peeling de rostro"];

const container = document.getElementById("divCard");

productos.forEach(producto => {
  const card = document.createElement("div");
  card.classList.add("col");
  card.innerHTML = `
    <div class="card">
      <img src="imgs/background.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${producto}</h5>
        <p class="card-text">Descripción</p>
      </div>
    </div>
  `;

  container.appendChild(card);
});