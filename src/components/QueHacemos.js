import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    console.log(this.props);
    return(
      <div class="contenido-principal contenedor">
          <main class="blog">
              <h2>¿Qué ofrecemos?</h2>
              <article class="entrada-blog">
              <div class="imagen">
                  <img src="img/DesarrolloWebImg.jpeg" alt="Imagen blog" />
              </div>
              <div class="contenido-blog">
                      <h3 class="no-margin">Desarrollo web</h3>
                      <p>
                          Ofrecemos desarrollo y automatización de páginas web de calidad para tu negocio o emprendimiento personal.
                          Usando tecnologías actuales tales como React, Vue, Angular, además de otras herramientas.
                      </p>
                  </div>
              </article>
              <article class="entrada-blog">
                  <div class="imagen">
                      <img src="img/AplicacionesImg.jpg" alt="Imagen blog" />
                  </div>
                  <div class="contenido-blog">
                      <h3 class="no-margin">Software de facturación y gestión</h3>
                      <p>
                          Ofrecemos un software que trabaje de manera eficiente para automatizar el flujo de trabajo de
                          tu empresa.
                      </p>
                  </div>
              </article>
              <article class="entrada-blog">
                  <div class="imagen">
                      <img src="img/AsesoramientoIMG.jpg" alt="Imagen blog" />
                  </div>
                  <div class="contenido-blog">
                      <h3 class="no-margin">Asesoramiento de tu equipo</h3>
                      <p>
                          Contactanos, dinos que es lo que necesitas en tu equipo. Te asesoraremos en la compra de tu equipamiento
                          y del software necesario para que funcione de la manera más óptima posible.
                      </p>
                  </div>
              </article>
          </main>
        </div>
      )
    }
  }
