// Produtos base
const produtos = [
  { id: 1, nome: "Cimento CP II", preco: 32.90, imagem: "Screenshot_21-4-2025_16224_.jpeg" },
  { id: 2, nome: "Areia Lavada 1m³", preco: 149.90, imagem: "areialavada.jpg" },
  { id: 3, nome: "Martelo de Carpinteiro", preco: 39.90, imagem: "be64b646d6038f42cd077ff9b9111365.jpeg"},
  { id: 4, nome: "Brita 1m³", preco: 129.90, imagem: "Screenshot 2025-05-20 at 16-51-23 brita-11-213bf83acbf67b2fc716489070392923-1024-1024.png (imagem PNG 1024 × 1024 pixels) - Redimensionada (75_).png" },
  { id: 5, nome: "Furadeira de Impacto Skill", preco: 210.00, imagem: "Screenshot 2025-05-20 at 16-41-31 shopping (imagem WEBP 217 × 173 pixels).png" },
  { id: 6, nome: "Locação Betoneira 400L", preco: 299.90, imagem: "Screenshot_21-4-2025_161814_.jpeg" },
  { id: 7, nome: "Locação Andaime 1,5MT a diária", preco: 3.00, imagem: "Screenshot 2025-05-20 at 16-46-35 aluguel_de_andaime_1_5mt_11_1_7730c5a73af4dbe0374667d76c8cb8ab.jpg (imagem JPEG 320 × 247 pixels).png" },
  
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
