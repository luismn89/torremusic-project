// Carga de contenido
const options_socialmedia = document.querySelectorAll('.navbar__menu-social-media li a')
Array.from(options_socialmedia).forEach(option => {
  const classIcon = Array.from(option.classList).filter(clase => /^icon-(.*)/.test(clase))[0];
  option.href = REDES_SOCIALES[classIcon.split('-')[1]] || '#';
});
//Contenido Español
const sliderTextEsp = document.querySelectorAll('#sliderlist-esp .swiper-slide .swiper-slide__text-image')
if (!!sliderTextEsp && !!sliderTextEsp.length) {
  Array.from(sliderTextEsp).forEach((sliderText, index) => {
    sliderText.innerHTML = TEXTOS_SLIDERS_INICIO_ESP[index]
  });
}
const paragraphMediaEsp = document.querySelector('#paragraph_esp.description');
if (!!paragraphMediaEsp) {
  paragraphMediaEsp.innerHTML = CONTENIDO_SECCION_MEDIA_COMPOSING_ESP.cuerpo;
}
const imageListMediaEsp = document.querySelectorAll('#images-list-esp .image-container .font-text');
if (!!imageListMediaEsp && !!imageListMediaEsp.length) {
  Array.from(imageListMediaEsp).forEach((text, index) => text.textContent = CONTENIDO_SECCION_MEDIA_COMPOSING_ESP.listaTextos[index])
}
const captionVideoEsp = document.querySelector('#text-caption-video-esp');
if (!!captionVideoEsp) {
  captionVideoEsp.innerHTML = `${TEXTO_CAPTION_SHOWREEL_SECTION_ESP.texto} <a class="font-text" href="${TEXTO_CAPTION_SHOWREEL_SECTION_ESP.url}" target="_blank">${TEXTO_CAPTION_SHOWREEL_SECTION_ESP.textoLink}</a>` 
}
const captionAudioEsp = document.querySelector('#text-caption-audio-esp');
if (!!captionAudioEsp) {
  captionAudioEsp.innerHTML = `${TEXTO_CAPTION_AUDIOREEL_SECTION_ESP.texto} <a class="font-text" href="${TEXTO_CAPTION_AUDIOREEL_SECTION_ESP.url}" target="_blank">${TEXTO_CAPTION_AUDIOREEL_SECTION_ESP.textoLink}</a>` 
}
const firstQuoteTorreEsp = document.querySelector('#first-quote-torre-esp')
if (!!firstQuoteTorreEsp) {
  firstQuoteTorreEsp.querySelector('em').innerHTML = `${DESCRIPCIONES_TORRE_ESP.primeraReferencia.texto}<br>`;
  firstQuoteTorreEsp.querySelector('strong').innerHTML = `<br>${DESCRIPCIONES_TORRE_ESP.primeraReferencia.autor}`;
}
const secondQuoteTorreEsp = document.querySelector('#second-quote-torre-esp')
if (!!secondQuoteTorreEsp) {
  secondQuoteTorreEsp.querySelector('em').innerHTML = `${DESCRIPCIONES_TORRE_ESP.segundaReferencia.texto}<br>`;
  secondQuoteTorreEsp.querySelector('strong').innerHTML = `<br>${DESCRIPCIONES_TORRE_ESP.segundaReferencia.autor}`;
}
const firstQuoteOmarEsp = document.querySelector('#first-quote-omar-esp')
if (!!firstQuoteOmarEsp) {
  firstQuoteOmarEsp.querySelector('em').innerHTML = `${DESCRIPCIONES_OMAR_ESP.primeraReferencia.texto}<br>`;
  firstQuoteOmarEsp.querySelector('strong').innerHTML = `<br>${DESCRIPCIONES_OMAR_ESP.primeraReferencia.autor}`;
}
const secondQuoteOmarEsp = document.querySelector('#second-quote-omar-esp')
if (!!secondQuoteOmarEsp) {
  secondQuoteOmarEsp.querySelector('em').innerHTML = `${DESCRIPCIONES_OMAR_ESP.segundaReferencia.texto}<br>`;
  secondQuoteOmarEsp.querySelector('strong').innerHTML = `<br>${DESCRIPCIONES_OMAR_ESP.segundaReferencia.autor}`;
}
const firstQuoteLandoEsp = document.querySelector('#first-quote-lando-esp')
if (!!firstQuoteLandoEsp) {
  firstQuoteLandoEsp.querySelector('em').innerHTML = `${DESCRIPCIONES_LANDO_ESP.primeraReferencia.texto}<br>`;
  firstQuoteLandoEsp.querySelector('strong').innerHTML = `<br>${DESCRIPCIONES_LANDO_ESP.primeraReferencia.autor}`;
}
const secondQuoteLandoEsp = document.querySelector('#second-quote-lando-esp')
if (!!secondQuoteLandoEsp) {
  secondQuoteLandoEsp.querySelector('em').innerHTML = `${DESCRIPCIONES_LANDO_ESP.segundaReferencia.texto}<br>`;
  secondQuoteLandoEsp.querySelector('strong').innerHTML = `<br>${DESCRIPCIONES_LANDO_ESP.segundaReferencia.autor}`;
}