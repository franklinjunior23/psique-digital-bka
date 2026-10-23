document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  // Fecha del día en el cuaderno
  const fecha = document.querySelector("[data-fecha]");
  if (fecha) {
    const hoy = new Intl.DateTimeFormat("es-PE", { weekday: "long", day: "numeric", month: "long" }).format(new Date());
    fecha.textContent = `Hoy, ${hoy}`;
  }
  const anio = document.querySelector("[data-anio]");
  if (anio) anio.textContent = new Date().getFullYear();

  // "Hoy me siento…" arma el mensaje de WhatsApp
  const diario = document.getElementById("diario");
  const borrador = document.getElementById("borrador");
  const campo = document.getElementById("texto-wa");
  if (diario && borrador && campo) {
    const unir = (items) => {
      if (items.length <= 1) return items.join("");
      return `${items.slice(0, -1).join(", ")} y ${items[items.length - 1]}`;
    };
    const actualizar = () => {
      const marcados = [...diario.querySelectorAll('input[type="checkbox"]:checked')].map((i) => i.value);
      const mensaje = marcados.length
        ? `Hola, Psique Digital BKA. Hoy me siento ${unir(marcados)}. Me gustaría recibir orientación.`
        : "Hola, Psique Digital BKA. Me gustaría recibir orientación.";
      borrador.textContent = mensaje;
      campo.value = mensaje;
    };
    diario.addEventListener("change", actualizar);
    actualizar();
  }

  // Trazos de lapicero que se dibujan al llegar
  const trazos = document.querySelectorAll("[data-trazo], .temas");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("dibujado");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.6 });
    trazos.forEach((t) => io.observe(t));
  } else {
    trazos.forEach((t) => t.classList.add("dibujado"));
  }

  // Pestaña activa según la sección visible
  const enlaces = [...document.querySelectorAll(".pestanas a")];
  const secciones = enlaces.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window && secciones.length) {
    const io = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        enlaces.forEach((a) => a.toggleAttribute("aria-current", a.getAttribute("href") === `#${e.target.id}`));
        enlaces.forEach((a) => a.hasAttribute("aria-current") && a.setAttribute("aria-current", "true"));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    secciones.forEach((s) => io.observe(s));
  }

  // Portada: ondas y red neuronal que nace de la cabeza
  const lienzo = document.querySelector(".portada__lienzo");
  if (lienzo && lienzo.getContext) iniciarPortada(lienzo);

  // Barra de WhatsApp en móvil: aparece al pasar la portada y se esconde en contacto
  const barra = document.querySelector("[data-barra]");
  const portada = document.getElementById("inicio");
  const contacto = document.getElementById("contacto");
  if (barra && portada && "IntersectionObserver" in window) {
    let portadaVisible = true;
    let contactoVisible = false;
    const pintar = () => { barra.hidden = portadaVisible || contactoVisible; };
    new IntersectionObserver(([e]) => { portadaVisible = e.isIntersecting; pintar(); }, { threshold: 0.05 }).observe(portada);
    if (contacto) new IntersectionObserver(([e]) => { contactoVisible = e.isIntersecting; pintar(); }).observe(contacto);
  }
});

function iniciarPortada(lienzo) {
  const ctx = lienzo.getContext("2d");
  const portada = lienzo.parentElement;
  const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let ancho = 0, alto = 0, nodos = [], pulsos = [], t = 0, corriendo = false, visible = true;
  const puntero = { x: -9999, y: -9999, activo: false };

  const medir = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    ancho = portada.clientWidth;
    alto = portada.clientHeight;
    lienzo.width = Math.round(ancho * dpr);
    lienzo.height = Math.round(alto * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    crearNodos();
  };

  const crearNodos = () => {
    const movil = ancho < 900;
    const total = movil ? 16 : 30;
    // la red vive alrededor de la cabeza (derecha en escritorio, arriba en móvil)
    const cx = movil ? ancho * 0.5 : ancho * 0.8;
    const cy = movil ? alto * 0.2 : alto * 0.45;
    const rx = movil ? ancho * 0.48 : ancho * 0.24;
    const ry = movil ? alto * 0.2 : alto * 0.42;
    nodos = Array.from({ length: total }, () => {
      const a = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random());
      const x = cx + Math.cos(a) * rx * r;
      const y = cy + Math.sin(a) * ry * r;
      return { x, y, ox: x, oy: y, vx: 0, vy: 0, fase: Math.random() * 6.28, r: 2 + Math.random() * 3.5 };
    });
  };

  const ondas = () => {
    const bandas = [
      { y: alto * 0.62, amp: alto * 0.1, f: 0.0042, v: 0.25, n: 16, color: "91, 91, 214" },
      { y: alto * 0.3, amp: alto * 0.08, f: 0.0031, v: -0.18, n: 12, color: "124, 131, 255" },
    ];
    ctx.lineWidth = 1;
    for (const b of bandas) {
      for (let i = 0; i < b.n; i++) {
        ctx.beginPath();
        const alfa = 0.05 + (i / b.n) * 0.09;
        ctx.strokeStyle = `rgba(${b.color}, ${alfa})`;
        for (let x = -20; x <= ancho + 20; x += 16) {
          const y = b.y + i * 7 +
            Math.sin(x * b.f + t * b.v + i * 0.22) * b.amp +
            Math.sin(x * b.f * 0.5 - t * b.v * 0.6) * b.amp * 0.5;
          x === -20 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }
  };

  const red = () => {
    const enlace = ancho < 900 ? 110 : 150;
    for (const n of nodos) {
      // deriva suave + atracción leve al puntero
      const dx = puntero.x - n.x, dy = puntero.y - n.y;
      const d = Math.hypot(dx, dy);
      if (puntero.activo && d < 180) { n.vx += (dx / d) * 0.06; n.vy += (dy / d) * 0.06; }
      n.vx += (n.ox + Math.cos(t * 0.6 + n.fase) * 14 - n.x) * 0.012;
      n.vy += (n.oy + Math.sin(t * 0.5 + n.fase) * 14 - n.y) * 0.012;
      n.vx *= 0.9; n.vy *= 0.9;
      n.x += n.vx; n.y += n.vy;
    }
    for (let i = 0; i < nodos.length; i++) {
      for (let j = i + 1; j < nodos.length; j++) {
        const a = nodos[i], b = nodos[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < enlace) {
          ctx.strokeStyle = `rgba(61, 53, 128, ${0.32 * (1 - d / enlace)})`;
          ctx.lineWidth = 1.4;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          if (!quieto && Math.random() < 0.0009) pulsos.push({ a, b, p: 0 });
        }
      }
      if (puntero.activo) {
        const n = nodos[i];
        const d = Math.hypot(puntero.x - n.x, puntero.y - n.y);
        if (d < 160) {
          ctx.strokeStyle = `rgba(29, 63, 191, ${0.45 * (1 - d / 160)})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.moveTo(puntero.x, puntero.y); ctx.lineTo(n.x, n.y); ctx.stroke();
        }
      }
    }
    for (const n of nodos) {
      const latido = 1 + Math.sin(t * 1.4 + n.fase) * 0.18;
      ctx.fillStyle = "rgba(75, 71, 184, 0.85)";
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r * latido, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    pulsos = pulsos.filter((q) => q.p <= 1);
    for (const q of pulsos) {
      q.p += 0.018;
      const x = q.a.x + (q.b.x - q.a.x) * q.p, y = q.a.y + (q.b.y - q.a.y) * q.p;
      ctx.fillStyle = "rgba(201, 184, 255, 0.95)";
      ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
    }
  };

  const cuadro = () => {
    ctx.clearRect(0, 0, ancho, alto);
    ondas();
    red();
  };

  const bucle = () => {
    if (!corriendo) return;
    t += 0.016;
    cuadro();
    requestAnimationFrame(bucle);
  };
  const arrancar = () => {
    if (quieto || corriendo || !visible || document.hidden) return;
    corriendo = true;
    requestAnimationFrame(bucle);
  };
  const parar = () => { corriendo = false; };

  medir();
  cuadro();
  arrancar();

  let espera;
  window.addEventListener("resize", () => {
    clearTimeout(espera);
    espera = setTimeout(() => { medir(); cuadro(); }, 150);
  });
  portada.addEventListener("pointermove", (e) => {
    const r = portada.getBoundingClientRect();
    puntero.x = e.clientX - r.left;
    puntero.y = e.clientY - r.top;
    puntero.activo = true;
  });
  portada.addEventListener("pointerleave", () => { puntero.activo = false; });
  document.addEventListener("visibilitychange", () => (document.hidden ? parar() : arrancar()));
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      visible ? arrancar() : parar();
    }).observe(portada);
  }
}
