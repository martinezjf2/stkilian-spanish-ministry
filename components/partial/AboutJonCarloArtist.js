"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SplitSection from "../global/SplitSection";

export default function AboutJonCarloArtist() {
  const paragraphs = [
    `Jon Carlo, joven productor y cantautor católico que aspira agradar a Dios a través de su música y creatividad, nació el 1ro de junio de 1976 en la República Dominicana. Algunos años más tarde, su familia emigró a los Estados Unidos y se estableció en Nueva York, donde Jon Carlo vivió una experiencia de encuentro con Dios a los 16 años de edad, luego de haber estado en la cárcel por llevar una vida de desorden y vandalismo. Formándose en la Palabra, sintió la inspiración y el llamado del Espíritu Santo a formar lo que sería el primer ministerio de alabanza y adoración juvenil de la ciudad de Nueva York: "Unción Juvenil", iniciando así una nueva generación de adoradores que optan por servir a Dios a través de la música.`,

    `Como productor y cantautor, Jon Carlo ha participado en múltiples proyectos, entre los que destacan: "Nada es Imposible para Ti" de Rodrigo Aguiluz (2016), "Volar" de Kairy Márquez (2016), proyecto en el que participa como productor y escritor; "Por Siempre", edición especial de Joan Sánchez y RP Band (2010), participando como asesor de producción; y "De Bendición en Bendición" del Grupo Alfareros (2008), participando como compositor y productor.`,

    `En el 2009, ya como solista, Jon Carlo lanza "Mi Más Grande Pasión". Catalogado como uno de los mejores discos de música católica contemporánea, esta producción popularizó temas como "Te Necesito", "La Mano de Dios", "Te Equivocas" y "Quema Mi Vida", entre otros.`,

    `Hoy en día, Jon Carlo es uno de los cantantes católicos más destacados, y su música se transmite en emisoras de toda Latinoamérica, alcanzando también reconocimientos dentro de la Iglesia. Con ocasión de la Jornada Mundial de la Juventud de 2013, fue elegido para cantar al Papa Francisco ante más de 3.5 millones de personas. En 2014 lanza su segunda producción, "Traigo Música de Dios", que incluye temas como "No Puedo Parar", popularmente cantado en Latinoamérica y Estados Unidos. Los conciertos de Jon Carlo no solo están caracterizados por estar llenos de energía, buena música y una alta calidad de producción, sino que sobre todo conectan a las audiencias más jóvenes en una experiencia con el Dios de la vida.`,

    `El 18 de enero de 2019 lanza con OCP su tercera producción, "Tú Eres Más Fuerte", cuyo sencillo del mismo nombre se convierte en un nuevo éxito, llegando a ser el tema usado durante la Vigilia Juvenil con el Papa Francisco en la JMJ Panamá 2019. Los frutos del trabajo y ministerio de Jon Carlo se reflejan también en sus redes sociales, visitadas por cristianos y no cristianos que encuentran en su música la frescura de mensajes positivos. Su canal de YouTube, "joncarlosband", cuenta con más de 150 mil suscriptores. Actualmente, Jon Carlo vive en la ciudad de Pharr, Texas, junto a su esposa Angélica y sus cuatro hijos: Geancarlos, Jon Marcos, Alina Esther y Lucas Sebastián.`,
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
