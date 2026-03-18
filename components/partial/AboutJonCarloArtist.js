"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SplitSection from "../global/SplitSection";

export default function AboutJonCarloArtist() {
  const paragraphs = [
    `Jon Carlo es un productor y cantautor católico que ha dedicado su vida a agradar a Dios a través de su música y creatividad. Nacido en la República Dominicana y criado en los Estados Unidos, su historia está marcada por un profundo encuentro con Dios que transformó su vida y le dio un nuevo propósito.`,

    `A partir de esa experiencia, comenzó a formarse en la Palabra y respondió al llamado del Espíritu Santo fundando en Nueva York el ministerio “Unción Juvenil”. Este ministerio dio inicio a una nueva generación de jóvenes que decidieron servir a Dios a través de la alabanza y la adoración, impactando numerosas vidas dentro y fuera de la Iglesia.`,

    `Como productor y cantautor, Jon Carlo ha participado en diversos proyectos musicales dentro de la música católica contemporánea, colaborando con reconocidos artistas y aportando su talento tanto en la composición como en la producción. Su música se caracteriza por transmitir mensajes de esperanza, fe y transformación.`,

    `En su carrera como solista, ha lanzado producciones que han marcado a muchos creyentes, con canciones que invitan a confiar en Dios, a acercarse a Él y a reconocer su presencia en todo momento. Temas como “Te Necesito”, “La Mano de Dios” y “No Puedo Parar” se han convertido en himnos dentro de muchas comunidades.`,

    `Su ministerio ha trascendido fronteras, llevando su música a diferentes países y escenarios importantes dentro de la Iglesia. Uno de los momentos más significativos fue su participación en la Jornada Mundial de la Juventud, donde tuvo la oportunidad de cantar ante el Papa Francisco, confirmando así el impacto de su misión evangelizadora.`,

    `Hoy en día, Jon Carlo continúa sirviendo con pasión, llevando un mensaje claro a través de su música: Dios está siempre presente, incluso en los momentos más difíciles, y nunca deja de acompañar a sus hijos.`,
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
