// Produtos base
const produtos = [
  { id: 1, nome: "Cimento CP II", preco: 32.90, imagem: "Screenshot_21-4-2025_16224_.jpeg" },
  { id: 2, nome: "Areia Lavada 1m³", preco: 149.90, imagem: "areialavada.jpg" },
  { id: 3, nome: "Martelo de Carpinteiro", preco: 39.90, imagem: "be64b646d6038f42cd077ff9b9111365.jpeg"},
  { id: 4, nome: "Locação Betoneira 400L", preco: 299.90, imagem: "Screenshot_21-4-2025_161814_.jpeg" },
];

// Renderizar produtos
const container = document.getElementById("produtos-container");
if (container) {
  produtos.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}" />
      <h3>${p.nome}</h3>
      <p>R$ ${p.preco.toFixed(1)}</p>
      <button onclick="adicionarAoCarrinho(${p.id})">Adicionar</button>
    `;
    container.appendChild(card);
  });
}

// Carrinho (localStorage)
function adicionarAoCarrinho(id) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push(id);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContador();
}

function atualizarContador() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  document.getElementById("cart-count").innerText = carrinho.length;
}

// Login fake
const loginLink = document.getElementById("login-link");
if (loginLink && localStorage.getItem("usuarioLogado")) {
  loginLink.innerText = "Sair";
  loginLink.href = "#";
  loginLink.onclick = () => {
    localStorage.removeItem("usuarioLogado");
    location.reload();
  };
}

// Iniciar contagem
atualizarContador();
