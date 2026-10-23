---
name: Psique Digital BKA
description: Un banner lavanda que se mueve, seguido de un cuaderno de emociones abierto: tapa índigo, hojas cuadriculadas y tinta de lapicero para acompañar a quien se atreve a escribir.
colors:
  tapa: "#2b1f7a"
  tapa-honda: "#1f1660"
  tapa-clara: "#3d2f9c"
  tapa-alterna: "#4a3cb0"
  marca-indigo: "#3d3580"
  sobre-tapa: "#ffffff"
  sobre-tapa-suave: "#d6ccff"
  hoja: "#ffffff"
  cuadro: "#e2e5fb"
  margen: "#c9b8ff"
  nota-fondo: "#f6f4ff"
  papel-hover: "#f3f1ff"
  lavanda-papel: "#f6f7fe"
  lavanda-hondo: "#eceefc"
  lavanda-tinta: "#f3f1fe"
  lavanda-aire: "#dfe3fb"
  lavanda-bruma: "#e6e2fb"
  texto: "#1c1840"
  texto-suave: "#45406e"
  lapicero: "#1d3fbf"
  lila: "#c9b8ff"
  resaltador: "rgba(196, 170, 255, 0.55)"
typography:
  brand:
    fontFamily: "League Spartan, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8.4vw, 7.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  brand-bka:
    fontFamily: "League Spartan, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 4rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0.04em"
  brand-sub:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.25rem, 2.1vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "normal"
  headline:
    fontFamily: "Bricolage Grotesque, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 88"
  title:
    fontFamily: "Bricolage Grotesque, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 3vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 92"
  lead:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.1875rem, 1.6vw, 1.375rem)"
    fontWeight: 400
    lineHeight: "36px"
    letterSpacing: "normal"
  body:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "normal"
  label:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: "24px"
    letterSpacing: "normal"
  annotation:
    fontFamily: "Kalam, Comic Neue, cursive"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "normal"
rounded:
  sm: "4px"
  md: "6px"
  lg: "12px"
  tab: "8px"
  card: "18px"
  pill: "999px"
  round: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "48px"
  xl: "72px"
  section: "120px"
components:
  hero-banner:
    backgroundColor: "{colors.lavanda-papel}"
    textColor: "{colors.marca-indigo}"
  button-primary:
    backgroundColor: "{colors.tapa}"
    textColor: "{colors.sobre-tapa}"
    rounded: "{rounded.pill}"
    height: "52px"
    padding: "0 26px"
  button-primary-hover:
    backgroundColor: "{colors.tapa-clara}"
    textColor: "{colors.sobre-tapa}"
  button-light:
    backgroundColor: "{colors.hoja}"
    textColor: "{colors.tapa}"
    rounded: "{rounded.pill}"
    height: "52px"
    padding: "0 26px"
  button-light-hover:
    backgroundColor: "{colors.lila}"
    textColor: "{colors.tapa}"
  nav-tab:
    textColor: "{colors.sobre-tapa-suave}"
    backgroundColor: "{colors.tapa-clara}"
    rounded: "{rounded.tab}"
    padding: "10px 16px 12px"
  nav-tab-active:
    backgroundColor: "{colors.hoja}"
    textColor: "{colors.tapa}"
  notebook-check-label:
    textColor: "{colors.texto}"
    typography: "{typography.annotation}"
  draft-note:
    backgroundColor: "{colors.nota-fondo}"
    textColor: "{colors.lapicero}"
    rounded: "{rounded.lg}"
    padding: "14px 18px 16px"
    typography: "{typography.annotation}"
---

# Design System: Psique Digital BKA

## Overview

**Creative North Star: "El Cuaderno de Emociones"**

La página abre con un banner lavanda que se mueve: la marca PSIQUE DIGITAL BKA en League Spartan, un campo de ondas de lápiz y una red de nodos que nace de la cabeza de perfil y reacciona al puntero. Después del banner, la página se vuelve un cuaderno de diario emocional, de los que se usan en terapia. La tapa índigo saturada ocupa su región y lleva una cita a mano; por dentro, hojas blancas con cuadrícula periwinkle de 24px donde se escribe con lapicero azul. No hay foto de stock sobre una fila de tarjetas de servicio: el visitante abre el cuaderno y encuentra una frase que parece escrita para él.

El ritmo es pausado y cercano. El banner respira y el cuaderno se abre y se vuelve a cerrar: la tapa y las hojas alternan para marcar los cambios de tema. Las fotos son recortes pegados con cinta, ligeramente girados, nunca marcos limpios. La densidad es baja: cada sección tiene aire y una sola idea.

Las decisiones de forma existen para reducir la ansiedad de quien llega: contraste alto, texto legible en sans humanista, un único lugar para escribir y un único camino para contactar por WhatsApp.

**Key Characteristics:**
- Banner lavanda (#f6f7fe a #eceefc) con la marca en índigo de portada (#3d3580), que es el único lugar donde aparece League Spartan.
- Ondas y red neuronal en canvas, reactivas al puntero, que se pausan fuera de pantalla y en movimiento reducido.
- Adornos de triángulos y líneas de lapicero en la portada, que se dibujan una sola vez al entrar.
- Tapa índigo (#2b1f7a) que ocupa regiones completas, con textura de tela casi imperceptible.
- Hojas blancas con cuadrícula de 24px (#e2e5fb) y margen lila a la izquierda.
- Tres tintas en total en el cuaderno: índigo de tapa, azul de lapicero (#1d3fbf) y un resaltador lila.
- Controles hechos con las marcas del cuaderno: casillas dibujadas a mano, palabras subrayadas, pestañas de página.

## Colors

La paleta es una familia índigo, una tinta azul y un fondo lavanda sólo para el banner, sobre papel blanco. Cada color cumple un rol real.

### Primary
- **Tapa Índigo** (#2b1f7a): la tapa del cuaderno. Ocupa las regiones de tapa, propuesta y pie; es el color del botón principal de WhatsApp.
- **Tapa Honda** (#1f1660): la cabecera fija y el fondo bajo el espiral. Es el tono más profundo y no se usa para texto.
- **Tapa Clara** (#3d2f9c): sólo como estado de hover del botón principal y como fondo de las pestañas.
- **Tapa Alterna** (#4a3cb0): fondo de las pestañas pares de la cabecera.
- **Índigo de Marca** (#3d3580): el nombre PSIQUE DIGITAL BKA en la portada y los triángulos de adorno. Es el color del banner, no de la tapa.

### Secondary
- **Lapicero Azul** (#1d3fbf): la tinta de bolígrafo. Sirve para anotaciones manuscritas, subrayados, casillas, el enlace y la firma. No se usa para párrafos corridos.

### Tertiary
- **Lila Resaltador** (#c9b8ff, y rgba(196, 170, 255, 0.55) para el trazo): el único resaltador. Marca la palabra clave del banner, la selección de texto y el hover de pestañas.

### Fondo de portada (banner)
- **Lavanda Papel** (#f6f7fe), **Lavanda Hondo** (#eceefc), **Lavanda Tinta** (#f3f1fe), **Lavanda Aire** (#dfe3fb) y **Lavanda Bruma** (#e6e2fb): sólo forman el degradado del banner. Ninguno aparece fuera de la portada.
- Los trazos del canvas usan las mismas familias: ondas en rgba(91, 91, 214) y rgba(124, 131, 255); enlaces de la red en rgba(61, 53, 128); nodos en rgba(75, 71, 184) con borde blanco; el puntero se une a la red con rgba(29, 63, 191); los pulsos viajan en rgba(201, 184, 255).

### Neutral
- **Papel Blanco** (#ffffff): la hoja y las superficies de contenido.
- **Cuadrícula Periwinkle** (#e2e5fb): las líneas de la hoja y los separadores punteados.
- **Margen Lila** (#c9b8ff): la línea vertical del margen y el borde de la columna de la carta.
- **Tinta Negra Azulada** (#1c1840): el texto corrido sobre papel y el subtítulo del banner.
- **Tinta Suave** (#45406e): texto secundario, rótulos y notas.
- **Papel Tinta** (#f6f4ff, #f3f1ff): fondo de la nota de borrador y hover de casillas.
- **Texto sobre Tapa Suave** (#d6ccff): texto secundario sobre índigo.

### Named Rules
**The Two Inks Rule.** En el cuaderno sólo hay dos tintas, índigo de tapa y azul de lapicero, más un resaltador lila. Ningún otro color entra en esas superficies como acento. El índigo de marca y el lavanda son exclusivos del banner.

**The Paper Stays White Rule.** La hoja del cuaderno es siempre blanca y cuadriculada. Los tonos de papel tintado (#f6f4ff) son sólo para notas pegadas sobre el papel. El lavanda del banner no pasa a ninguna hoja.

## Typography

**Brand Font:** League Spartan (con Bricolage Grotesque como respaldo), peso 500–900, en mayúsculas. Sólo para el nombre de marca del banner.
**Display / Headline Font:** Bricolage Grotesque (con Atkinson Hyperlegible Next como respaldo), peso 200–800 con eje de ancho (wdth 75–100). Para titulares de sección y cifras.
**Body Font:** Atkinson Hyperlegible Next (con system-ui como respaldo), peso 200–800, cursiva 400.
**Annotation Font:** Kalam (400 y 700), cursiva manuscrita, con Comic Neue como respaldo.

**Character:** Una sans geométrica y muy cargada para la marca, en mayúsculas y peso 800: es el sello del banner. Una sans grotesca compacta para los titulares; una sans humanista pensada para la lectura accesible, para el texto corrido; y una letra manuscrita para lo que se escribe a mano en el cuaderno y en el banner. El contraste entre ellas es el de un cuaderno con su letra impresa y sus notas propias.

### Hierarchy
- **Brand** (League Spartan 800, mayúsculas, clamp(3rem, 8.4vw, 7.5rem), line-height 0.95, letter-spacing -0.01em, color #3d3580): "PSIQUE DIGITAL", centrado en el banner. Sólo una vez por página.
- **Brand BKA** (League Spartan 800, mayúsculas, clamp(2rem, 4.6vw, 4rem), letter-spacing 0.04em): "BKA" bajo el nombre, con un resaltado lila en su parte inferior.
- **Brand sub** (400, clamp(1.25rem, 2.1vw, 1.875rem), line-height 1.3, color Tinta Negra Azulada): "Psicología y bienestar emocional en línea", bajo la marca.
- **Headline** (Bricolage 800, clamp(2.25rem, 4.6vw, 3.75rem), line-height 1, wdth 88): títulos de sección ("La psicología que suena contigo", "Para quién es").
- **Title** (Bricolage 600, clamp(1.625rem, 3vw, 2.5rem), line-height 1.2, wdth 92): la frase de "Para quién es" y las listas grandes de área de atención.
- **Lead** (400, clamp(1.1875rem, 1.6vw, 1.375rem), line-height 36px): entradas de sección y párrafos de apertura, máximo 38rem.
- **Body** (400, 1.0625rem / 17px, line-height 24px): texto corrido. Máximo 65–75 caracteres por línea (36rem a 38rem).
- **Label** (700, 0.8125rem, line-height 24px): rótulo del borrador.
- **Annotation** (Kalam 400, 1.375rem, line-height 1.3): las anotaciones a mano, la tagline del banner en Lapicero Azul, la cita de la tapa, las etiquetas de casilla, la firma y el pie de foto. En la build también aparece en el fecha y el borrador; la norma original la quería "usada con moderación" y la build la usa en más lugares de lo previsto.

### Named Rules
**The Hand Writes Only Rule.** Kalam sólo aparece cuando algo parece escrito a mano por la persona del cuaderno o por la voz del banner (la tagline). Titulares, navegación y botones usan la sans.

**The Brand Is Only The Banner Rule.** League Spartan no se usa fuera de la portada. Dentro del cuaderno y del resto de la página, la marca no vuelve a escribirse en esa fuente.

## Layout

La portada ocupa el primer viewport: un bloque de altura mínima entre 560px y 860px (menos la cabecera). Su contenido va en una rejilla de dos columnas, 7fr para el texto centrado y 4fr para la cabeza, en un contenedor de hasta 1280px. La cabeza de perfil sale por el borde derecho de la pantalla (margen negativo), y la red de nodos se distribuye alrededor de ella.

El cuaderno va después de "Para quién es", a mitad de página, con margen vertical de 48px. Dentro del cuaderno, la tapa y la hoja se dividen en 5fr y 6fr, con un canal de 36px para el espiral. El contenedor de contenido tiene un máximo de 1176px y un margen de 24px a cada lado (`min(100% - 48px, 1176px)`).

Las secciones de contenido se alternan entre hoja y tapa: intro, atención, para quién y cuaderno sobre papel; propuesta y pie sobre índigo. Cada sección usa padding vertical de 120px en escritorio y 84px en móvil, y las grillas de dos columnas usan proporciones 6fr/5fr o 5fr/6fr, con gap de 72px.

Por debajo de 900px la portada se apila: la cabeza va arriba, reducida a 290px como máximo, y el texto debajo. Los adornos inferiores se ocultan y el superior se corre al borde derecho. El cuaderno también se apila: la tapa va arriba, el espiral se vuelve horizontal y el sticker pasa al flujo normal a 110px. Por debajo de 1100px las pestañas bajan a una fila propia bajo la marca, con desplazamiento horizontal, y el botón de WhatsApp de la cabecera queda como círculo de 44px. Por debajo de 420px los botones ocupan el ancho completo.

En móvil, una barra fija de WhatsApp (54px de alto, pill índigo) aparece sólo después de pasar la portada y se oculta en la sección de contacto.

### Named Rules
**The Notebook Grid Rule.** Toda superficie de papel del cuaderno lleva la cuadrícula de 24px. La medida base es 24px y todo espacio es múltiplo o mitad de ella.

## Elevation & Depth

La profundidad es híbrida: tonal por defecto (papel blanco sobre índigo, líneas de cuadrícula, degradado lavanda en el banner), con sombra suave reservada para objetos que se pegan o se levantan sobre la mesa: stickers, fotos pegadas, la cabeza del banner no tiene sombra y el botón de WhatsApp sí.

La sombra del papel es difusa y muy baja: `0 2px 4px rgba(12, 10, 30, 0.1), 0 14px 30px -12px rgba(12, 10, 30, 0.35)`. El borde interior de la hoja del cuaderno usa un inset de 18px, con un sombreado de 0.28 de opacidad, para que el lomo se lea.

### Shadow Vocabulary
- **Papel levantado** (`box-shadow: 0 2px 4px rgba(12, 10, 30, 0.1), 0 14px 30px -12px rgba(12, 10, 30, 0.35)`): stickers, fotos pegadas y el horario.
- **Botón de WhatsApp en reposo** (`box-shadow: 0 2px 3px rgba(12, 10, 30, 0.25), 0 10px 22px -10px rgba(12, 10, 30, 0.45)`): sólo el botón índigo.
- **Botón de WhatsApp en hover** (`box-shadow: 0 4px 6px rgba(12, 10, 30, 0.25), 0 16px 28px -12px rgba(12, 10, 30, 0.45)`): sólo el botón índigo.
- **Lomo del cuaderno** (`box-shadow: inset 18px 0 24px -18px rgba(31, 22, 96, 0.28)`): la hoja del cuaderno, de lado izquierdo.
- **Pestaña en reposo** (`box-shadow: inset 0 -6px 8px -6px rgba(12, 10, 30, 0.45)`): la pestaña de cabecera; se quita al estar activa.

### Named Rules
**The Flat-Until-Pinned Rule.** Las superficies de papel son planas. La sombra aparece sólo cuando un objeto se pega o se sostiene encima de la página, como un sticker o una foto con cinta.

## Shapes

La forma nace del papel, de la mano y de la marca. Los bordes son ligeramente irregulares: las casillas dibujadas tienen radios asimétricos (`3px 5px 4px 6px`), los stickers son círculos perfectos y las fotos tienen esquinas de 6px.

Las notas que se escriben a mano tienen una esquina cuadrada en la parte superior izquierda (`4px 12px 12px 12px`) para que parezcan recortadas. Los controles de acción son píldoras (`999px`) y la pestaña activa tiene sólo las dos esquinas superiores redondeadas (8px).

La cabeza del banner no tiene borde: es una ilustración con recorte de alfa que se funde con el fondo lavanda y se corta en el borde de la pantalla.

Los objetos no están alineados del todo: las fotos tienen rotaciones de ±2° y 3° en el sticker de propuesta, la cita de la tapa gira -2°, y el horario gira 1°. Estas rotaciones son el material propio del cuaderno.

### Named Rules
**The Tilt Is The Tape Rule.** Un objeto girado sólo existe si está pegado con cinta o sostenido sobre la hoja. Las rotaciones no superan 3° y siempre van acompañadas de un elemento de pegado.

## Components

Cada componente hereda una frase de carácter: el banner respira y reacciona; el botón es una tapa que se puede tocar; las casillas son lapicero que marca; la nota de borrador es un papelito pegado.

### Banner de portada (signature)
- **Fondo:** degradado de tres lavandas, con dos halos radiales (uno a la derecha, otro abajo a la izquierda).
- **Marca:** "PSIQUE DIGITAL" en League Spartan 800, mayúsculas, color Índigo de Marca; "BKA" debajo, con resaltado lila. Centrado en su columna.
- **Adornos:** dos dibujos de lapicero de triángulos y líneas (uno arriba a la derecha, uno abajo a la izquierda), trazados en Tapa Índigo de 1.6px con círculos en los vértices. Los triángulos rellenos en Índigo de Marca aparecen a los 700ms, una sola vez, después del trazo.
- **Canvas de ondas y red:** dos bandas de ondas sinusoidales de lapicero y una red de 30 nodos (16 en móvil) alrededor de la cabeza, con enlaces que se desvanecen con la distancia y pulsos que viajan entre nodos. Los nodos derivan suavemente, son atraídos por el puntero dentro de 180px, y el puntero se une a la red con un trazo azul. Se pausa al salir de pantalla o al ocultarse la pestaña; en movimiento reducido se dibuja un solo cuadro.
- **Cabeza:** ilustración con alfa, de 470px máximo, que respira en un ciclo de 9s (desplazamiento de 8px y escala de 1.012).
- **Tagline:** "¡Tu espacio digital, transforma tu vida!" en Kalam, color Lapicero Azul.
- **Acciones:** botón índigo "Escribir por WhatsApp" y el enlace "Cuéntanos cómo te sientes hoy", que lleva al cuaderno. El enlace tiene subrayado lila de 2px.

### Buttons
- **Shape:** píldora completa (999px), altura de 52px (60px en el botón grande de contacto), padding horizontal 26px.
- **Primary (índigo):** fondo Tapa Índigo (#2b1f7a) y texto blanco. Es la acción de conversión del sitio; aparece en el banner, en el cuaderno y en contacto.
- **Hover / Focus:** en hover, el fondo pasa a Tapa Clara (#3d2f9c), sube 2px y la sombra crece. En `:active` baja 1px. Todos los cambios usan 220ms con `cubic-bezier(0.16, 1, 0.3, 1)`. El foco visible es un contorno de 3px en Lapicero Azul (o en Lila sobre la tapa), con 3px de offset.
- **Light (sobre tapa):** fondo blanco y texto índigo, usado en la propuesta. En hover pasa a Lila Resaltador (#c9b8ff).

### Casillas de lapicero (signature)
- **Style:** caja de 24px con borde de 2px en Lapicero Azul y radio irregular. La marca es un trazo dibujado en SVG, de 3.5px, con `stroke-dashoffset` de 1 a 0.
- **State:** sin marcar, la caja sólo tiene el borde; marcada, el trazo se dibuja en 380ms y el texto recibe un resaltado lila que crece de 0% a 100% de ancho en 400ms.
- **Hover:** la caja toma fondo #f3f1ff.
- **Focus:** contorno de 3px en Lapicero Azul, con offset de 3px.

### Nota de borrador
- **Style:** fondo Papel Tinta (#f6f4ff), borde de 1.5px en Cuadrícula Periwinkle, radio asimétrico (4px 12px 12px 12px).
- **Text:** rótulo en Label (700), y el mensaje en Annotation en Lapicero Azul. Es la vista previa del mensaje de WhatsApp.

### Pestañas (navegación)
- **Style:** pestañas índice que cuelgan del borde inferior de la cabecera: fondo Tapa Clara (#3d2f9c), alternando con Tapa Alterna (#4a3cb0), texto Texto sobre Tapa Suave (#d6ccff), 15px en peso 700, padding 10px 16px 12px, radio superior de 8px y una sombra interior abajo.
- **Hover:** fondo lila (#c9b8ff), texto Tapa Honda; la pestaña sube 3px.
- **Active:** fondo blanco (la hoja) y texto índigo, sin sombra: la pestaña de la página abierta.
- **Mobile (≤1100px):** las pestañas pasan a una fila propia bajo la marca, con desplazamiento horizontal y sin barra visible.

### Cards / Containers
- **Corner Style:** 6px para fotos y horario, 50% para stickers circulares.
- **Background:** blanco para todo papel, Papel Tinta (#f6f4ff) para notas.
- **Shadow Strategy:** ver Elevation. Las fotos pegadas llevan cinta lila de 96×28px en la parte superior.
- **Border:** el horario tiene borde de 2px en Tapa Índigo.
- **Internal Padding:** 14px 18px 16px en la nota de borrador; 10px en las fotos pegadas.

### Tapa del cuaderno
- **Contenido:** una cita manuscrita en blanco, rotada -2° ("Un espacio digital para cuidar tu bienestar emocional"), y un sticker circular con la ilustración de manos.
- **Sin nombre:** la tapa no lleva etiqueta de nombre ni de curso; la marca vive en el banner.

### Inputs / Fields
El sitio no tiene campos de texto. Los únicos controles de entrada son las casillas de lapicero, descritas arriba.

### Sticker y foto pegada (signature)
- **Style:** fondo blanco con 10px de padding, cinta lila de 96×28px rotada −3° y sombra de papel levantado.
- **Rotación:** entre −2° y 3°, siempre ligada a la cinta.

## Do's and Don'ts

### Do:
- **Do** usar Índigo de Marca (#3d3580) y League Spartan 800 en mayúsculas sólo para el nombre de marca del banner.
- **Do** usar Tapa Índigo (#2b1f7a) para las regiones de tapa y para el botón principal de WhatsApp; es la única tinta que lleva la conversión.
- **Do** dibujar los trazos de lapicero (subrayados, círculos, ticks, triángulos del banner) una sola vez, al entrar en pantalla, con `stroke-dashoffset` de 900ms y sin repetir.
- **Do** dejar que el canvas del banner se pause fuera de pantalla y que se dibuje un solo cuadro cuando el usuario prefiere movimiento reducido.
- **Do** mantener la cuadrícula de 24px en cada superficie de papel del cuaderno.
- **Do** usar Kalam sólo para lo que parece escrito a mano: la tagline del banner, la cita de la tapa, notas, anotaciones, firma, pies de foto. Las celdas del horario van en la sans en negrita, color lapicero.
- **Do** mantener las rotaciones menores de 3° y siempre con cinta o sticker.
- **Do** escribir el texto corrido en Tinta Negra Azulada (#1c1840) sobre papel, con líneas de 65–75 caracteres.
- **Do** respetar `prefers-reduced-motion`: los trazos se muestran completos, las transiciones duran 0ms y la animación de entrada del banner se omite.

### Don't:
- **Don't** usar una tercera tinta o un acento de color en el cuaderno fuera de Índigo, Lapicero Azul y Lila Resaltador.
- **Don't** llevar el lavanda del banner o el índigo de marca a las hojas del cuaderno o a otras secciones.
- **Don't** poner un tono de texto azul de lapicero en párrafos corridos; el azul es para anotaciones, enlaces y subrayados.
- **Don't** usar League Spartan fuera del nombre de marca del banner.
- **Don't** usar sombras duras con desplazamiento (offset) sobre papel; la sombra es difusa y sólo aparece en objetos pegados.
- **Don't** animar trazos en bucle ni repetir el dibujo de un trazo al hacer scroll.
- **Don't** usar fuentes de sistema como display o titulares; el sistema sólo es respaldo.
- **Don't** añadir etiquetas kicker o eyebrow en mayúsculas espaciadas encima de los titulares.
- **Don't** usar Kalam como fuente de titulares, navegación o botones; la fuente manuscrita es para anotaciones y la tagline.
- **Don't** introducir testimonios, cifras, credenciales o precios en la página. Mientras no existan, el contenido se mantiene honesto.
