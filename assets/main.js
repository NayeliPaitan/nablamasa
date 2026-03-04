// Config rápido: cambia el número y mensaje de WhatsApp aquí
const WHATSAPP_NUMBER = "51950595875"; 
const WHATSAPP_MSG = "Hola NABLAMA S.A., quiero una cotización. Mi proyecto es:";

function buildWhatsAppUrl() {
  const text = encodeURIComponent(WHATSAPP_MSG);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

// Menú móvil
const burger = document.querySelector(".burger");
const mobile = document.querySelector("[data-mobile]");

if (burger && mobile) {
  burger.addEventListener("click", () => {
    const open = mobile.style.display === "block";
    mobile.style.display = open ? "none" : "block";
    burger.setAttribute("aria-expanded", String(!open));
  });

  mobile.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobile.style.display = "none";
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

// WhatsApp buttons
const waBtn = document.getElementById("waBtn");
const waBtn2 = document.getElementById("waBtn2");
[waBtn, waBtn2].filter(Boolean).forEach((btn) => btn.setAttribute("href", buildWhatsAppUrl()));

// Año footer
document.getElementById("year").textContent = String(new Date().getFullYear());

// Form demo (abre WhatsApp con datos)
const form = document.getElementById("quoteForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);

    const name = fd.get("name") || "";
    const phone = fd.get("phone") || "";
    const service = fd.get("service") || "";
    const message = fd.get("message") || "";

    const fullMsg =
      `Hola NABLAMA S.A. , quiero una cotización.%0A` +
      `Nombre: ${encodeURIComponent(name)}%0A` +
      `Teléfono: ${encodeURIComponent(phone)}%0A` +
      `Servicio: ${encodeURIComponent(service)}%0A` +
      `Detalle: ${encodeURIComponent(message)}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${fullMsg}`, "_blank", "noopener");
  });
}


const track = document.querySelector('.testimonial-track');
let isPaused = false;

// Pausar cuando el usuario pone el mouse encima o toca el slide
track.addEventListener('mouseenter', () => isPaused = true);
track.addEventListener('mouseleave', () => isPaused = false);

function step() {
  if (!isPaused) {
    // Si llega al final, vuelve al inicio
    if (track.scrollLeft >= (track.scrollWidth - track.offsetWidth)) {
      track.scrollLeft = 0;
    } else {
      track.scrollLeft += 1; // Velocidad del scroll
    }
  }
  requestAnimationFrame(step);
}

// Iniciar la animación
requestAnimationFrame(step);

