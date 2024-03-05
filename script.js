// Obtener referencias a elementos HTML
const textarea = document.getElementById('text-encrypt');
const btnEncrypt = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');

// Oyente de eventos para el botón de cifrado
btnEncrypt.addEventListener('click', () => {
  // Obtención del texto del área de texto y aplicación de sustituciones.
  let text = textarea.value.toLowerCase()
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  // Actualiza la pantalla con el texto cifrado.
  if (text !== "") {
    const boxMsg = document.getElementById('box-msg');
    boxMsg.textContent = text;
    const boxDesign = document.getElementById('box-design');
    boxDesign.remove();
    const boxTitle = document.getElementById('box-title');
    boxTitle.textContent = 'Tu mensaje es:';
    boxMsg.style.fontSize = '20px';
    boxTitle.style.fontSize = '40px';
    copyBtn.style.display = 'block';
    copyBtn.disabled = false;
  } else {
    alert("Añadir un mensaje válido");
    copyBtn.style.display = 'none';
    const boxTitle = document.getElementById('box-title');
    boxTitle.textContent = 'Su último mensaje fue:';
  }
});

// Oyente de eventos para el botón de descifrado
decryptBtn.addEventListener('click', () => {
  // Obtención del texto del área de texto e invierta las sustituciones
  let text = textarea.value.toLowerCase()
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  // Actualiza la pantalla con el texto descifrado.
  const boxMsg = document.getElementById('box-msg');
  boxMsg.textContent = text;
  const boxDesign = document.getElementById('box-design');
  boxDesign.remove();
  const boxTitle = document.getElementById('box-title');
  boxTitle.textContent = 'Tu mensaje es:';
  boxMsg.style.fontSize = '20px';
  boxTitle.style.fontSize = '40px';
});

// Oyente de eventos para el botón copiar
copyBtn.addEventListener('click', () => {
  const boxMsg = document.getElementById('box-msg');
  let textCopy = boxMsg.textContent; // utilizar contenido de texto en lugar de valor
  navigator.clipboard.writeText(textCopy);
  alert("Tu mensaje ha sido copiado.");
});
