// Carga de contenido
const options_socialmedia = document.querySelectorAll('.navbar__menu-social-media li a')
Array.from(options_socialmedia).forEach(option => {
  const classIcon = Array.from(option.classList).filter(clase => /^icon-(.*)/.test(clase))[0];
  option.href = REDES_SOCIALES[classIcon.split('-')[1]] || '#';
});
//Contenido INGLES
const sliderTextEng = document.querySelectorAll('#sliderlist-eng .swiper-slide .swiper-slide__text-image')
if (!!sliderTextEng && !!sliderTextEng.length) {
  Array.from(sliderTextEng).forEach((sliderText, index) => {
    sliderText.innerHTML = TEXTOS_SLIDERS_INICIO_ENG[index]
  });
}
const paragraphMediaEng = document.querySelector('#paragraph_eng');
if (!!paragraphMediaEng) {
  paragraphMediaEng.innerHTML = `${CONTENIDO_SECCION_MEDIA_COMPOSING_ENG.cuerpo}`;
}
const imageListMediaEng = document.querySelectorAll('#images-list-eng .image-container .font-text');
if (!!imageListMediaEng && !!imageListMediaEng.length) {
  Array.from(imageListMediaEng).forEach((text, index) => text.textContent = CONTENIDO_SECCION_MEDIA_COMPOSING_ENG.listaTextos[index])
}
const captionVideoEng = document.querySelector('#text-caption-video-eng');
if (!!captionVideoEng) {
  captionVideoEng.innerHTML = `${TEXTO_CAPTION_SHOWREEL_SECTION_ENG.texto} <a class="font-text" href="${TEXTO_CAPTION_SHOWREEL_SECTION_ENG.url}" target="_blank">${TEXTO_CAPTION_SHOWREEL_SECTION_ENG.textoLink}</a>` 
}
const captionAudioEng = document.querySelector('#text-caption-audio-eng');
if (!!captionAudioEng) {
  captionAudioEng.innerHTML = `${TEXTO_CAPTION_AUDIOREEL_SECTION_ENG.texto} <a class="font-text" href="${TEXTO_CAPTION_AUDIOREEL_SECTION_ENG.url}" target="_blank">${TEXTO_CAPTION_AUDIOREEL_SECTION_ENG.textoLink}</a>` 
}
const firstQuoteTorreEng = document.querySelector('#first-quote-torre-eng')
if (!!firstQuoteTorreEng) {
  firstQuoteTorreEng.querySelector('em').innerHTML = DESCRIPCIONES_TORRE_ENG.primeraReferencia.texto;
  firstQuoteTorreEng.querySelector('strong').innerHTML = `<br>${DESCRIPCIONES_TORRE_ENG.primeraReferencia.autor}`;
}
const secondQuoteTorreEng = document.querySelector('#second-quote-torre-eng')
if (!!secondQuoteTorreEng) {
  secondQuoteTorreEng.querySelector('em').innerHTML = `${DESCRIPCIONES_TORRE_ENG.segundaReferencia.texto}<br>`;
  secondQuoteTorreEng.querySelector('strong').innerHTML = `<br>${DESCRIPCIONES_TORRE_ENG.segundaReferencia.autor}`;
}
const firstQuoteOmarEng = document.querySelector('#first-quote-omar-eng')
if (!!firstQuoteOmarEng) {
  firstQuoteOmarEng.querySelector('em').innerHTML = `${DESCRIPCIONES_OMAR_ENG.primeraReferencia.texto}<br>`;
  firstQuoteOmarEng.querySelector('strong').innerHTML = `<br>${DESCRIPCIONES_OMAR_ENG.primeraReferencia.autor}`;
}
const secondQuoteOmarEng = document.querySelector('#second-quote-omar-eng')
if (!!secondQuoteOmarEng) {
  secondQuoteOmarEng.querySelector('em').innerHTML = `${DESCRIPCIONES_OMAR_ENG.segundaReferencia.texto}<br>`;
  secondQuoteOmarEng.querySelector('strong').innerHTML = `<br>${DESCRIPCIONES_OMAR_ENG.segundaReferencia.autor}`;
}
const firstQuoteLandoEng = document.querySelector('#first-quote-lando-eng')
if (!!firstQuoteLandoEng) {
  firstQuoteLandoEng.querySelector('em').innerHTML = `${DESCRIPCIONES_LANDO_ENG.primeraReferencia.texto}<br>`;
  firstQuoteLandoEng.querySelector('strong').innerHTML = `<br>${DESCRIPCIONES_LANDO_ENG.primeraReferencia.autor}`;
}
const secondQuoteLandoEng = document.querySelector('#second-quote-lando-eng')
if (!!secondQuoteLandoEng) {
  secondQuoteLandoEng.querySelector('em').innerHTML = `${DESCRIPCIONES_LANDO_ENG.segundaReferencia.texto}<br>`;
  secondQuoteLandoEng.querySelector('strong').innerHTML = `<br>${DESCRIPCIONES_LANDO_ENG.segundaReferencia.autor}`;
}