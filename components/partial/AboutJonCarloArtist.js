"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SplitSection from "../global/SplitSection";

export default function AboutJonCarloArtist() {
  const paragraphs = [
    `Jon Carlo es un productor y cantautor católico nacido el 1 de junio de 1976 en la República Dominicana. Tras emigrar a los Estados Unidos, vivió una fuerte experiencia de conversión a los 16 años que marcó un antes y un después en su vida. Ese encuentro con Dios lo llevó a dejar atrás un pasado difícil y a comenzar un camino de fe, entrega y propósito.`,

    `Movido por el Espíritu Santo, inició su formación en la Palabra y fundó en Nueva York el ministerio “Unción Juvenil”, dando origen a una nueva generación de jóvenes comprometidos con la alabanza y la adoración. Desde entonces, su vida ha estado centrada en evangelizar a través de la música, utilizando su talento como instrumento para acercar a otros a Dios.`,

    `A lo largo de su carrera, Jon Carlo ha producido e interpretado canciones que transmiten mensajes profundos de fe, esperanza y transformación. Temas como “Nada es Imposible” inspiran a confiar en el poder de Dios aun en medio de las dificultades, mientras que canciones como “Dame de Beber” invitan a tener una relación más íntima con Cristo, reconociendo nuestra necesidad de Él.`,

    `Asimismo, su música también toca corazones a través de mensajes de consuelo y acompañamiento espiritual. En canciones como “Estaré Contigo”, transmite la certeza de que Dios nunca nos abandona, incluso en los momentos de soledad o dolor. Sus letras conectan con quienes han sentido distancia de Dios, recordándoles que Él siempre permanece fiel.`,

    `Uno de los momentos más significativos de su ministerio fue su encuentro con el Papa Francisco, donde tuvo la oportunidad de compartir su misión evangelizadora a través de la música. Este encuentro representó una confirmación de su llamado y un impulso para continuar llevando el mensaje de Dios a más personas alrededor del mundo.`,

    `Hoy en día, Jon Carlo continúa sirviendo con entrega y pasión, viajando a diferentes comunidades y países para compartir su música y su testimonio. Su misión sigue siendo clara: evangelizar, sanar corazones y recordar a cada persona que Dios nunca abandona a sus hijos, y que siempre hay esperanza para comenzar de nuevo en Su amor.`,
  ];

  return (
    <section id="artist-bio" className="py-16 px-4 md:px-8 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Artist Image Top */}
        <div className="mb-12">
          <div className="overflow-hidden ">
            <img
              src="./images/jon-carlo-concert/carloj.jpg"
              alt="Jon Carlo"
              className="h-[320px] md:h-[500px] object-cover mx-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm mb-3">
            Artista Invitado
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Jon Carlo</h2>
          <div className="w-24 h-[2px] bg-yellow-400 mx-auto" />
        </div>

        {/* Text + Middle Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
          <div className="space-y-6 text-base md:text-lg leading-8">
            {paragraphs.slice(0, 3).map((paragraph, index) => (
              <p key={index} className="pb-2">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="w-full">
            <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/wiBwNvPdEgI?si=8WOYpkhnKsGOj-B-"
                  title="Jon Carlo Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Remaining Bio */}
        <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg leading-8 mb-16">
          {paragraphs.slice(3).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Final Video */}
        <div className="w-full">
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/gyHOlT8vziU?si=isFanr7pwEbuCjtt"
                title="Jon Carlo Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
