document.addEventListener("DOMContentLoaded", () => {
    console.log("Site de TI carregado!");
  
    const form = document.getElementById("form-contato");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      form.reset();
    });
  });
  