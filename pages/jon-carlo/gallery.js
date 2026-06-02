// pages/gallery/[slug].js

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

const galleryItems = [
// Video 1

  { type: "video", src: "https://www.youtube.com/embed/oeHOPiTzvaA?si=CG9jN6Cmhj0bcBnP", alt: "La Perla Preciosa", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/107.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/12.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/91.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/24.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/39.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/4.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/24.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/69.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/21.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/92.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/25.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/53.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/18.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/22.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/7.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/57.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/46.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/74.jpeg", alt: "Jon Carlo Concert", category: "preshow" },

    // Video 2
  { type: "video", src: "https://www.youtube.com/embed/hDwt2AD02qs?si=kFLhGK_gBWtZOL56", alt: "Bienvenido A Nuestro Concierto", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/28.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/78.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/59.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/25.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/36.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/106.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/62.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/3.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  
  { type: "video", src: "https://www.youtube.com/embed/ZctfuK-WCbA?si=JURiyBdMRaS6xNIo", alt: "Mi Familia", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/40.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/36.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/3.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/12.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/14.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/71.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/26.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/15.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/104.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/15.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  
  { type: "video", src: "https://www.youtube.com/embed/vfzgatpw9As?si=zUYC-EG1e_vqok95", alt: "Vida Nueva", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/30.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/44.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/8.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/2.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/33.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/8.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/65.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/70.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  
  { type: "video", src: "https://www.youtube.com/embed/5URpViFD-DI?si=D-hWDKrdBvPi465u", alt: "Ella", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/55.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/44.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/6.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/11.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/82.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/11.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/13.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/51.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/52.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/90.jpeg", alt: "Jon Carlo Concert", category: "preshow" },

  { type: "video", src: "https://www.youtube.com/embed/aUo0tmS3lHQ?si=OKiRnnmsR3RzhKmU", alt: "No Puedo Parar", category: "concert" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/9.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/14.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/58.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/51.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/73.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/2.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/1.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/74.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/25.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/18.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  
  { type: "video", src: "https://www.youtube.com/embed/Lm2ndp4Powc?si=o7bSdVmJdPEKD3XX", alt: "Quema Mi Vida", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/87.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/17.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/80.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/1.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/43.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/16.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/49.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/46.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/40.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/30.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/17.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/73.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/8.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/39.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/32.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/1.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/5.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/43.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/68.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/20.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/62.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/52.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/11.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/10.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/21.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/13.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/21.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/2.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/9.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/37.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/78.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/85.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/55.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/54.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/48.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/54.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/64.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/83.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/61.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/31.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/18.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/57.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/63.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/53.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/27.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/50.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/81.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/41.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/40.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/64.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/29.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/22.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/59.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/42.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/10.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/14.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/69.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/67.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/77.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/27.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/82.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/42.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/6.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/22.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/37.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/58.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/45.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/23.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/18.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/29.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/23.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/61.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/48.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/66.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/38.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/56.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/19.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/49.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/85.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/86.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/16.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/4.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/60.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/65.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/50.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/71.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/80.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/96.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/41.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/76.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/31.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/6.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/34.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/91.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/24.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/51.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/11.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/19.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/26.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/43.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/10.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/1.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/63.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/46.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/66.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/19.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/35.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/60.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/2.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/60.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/45.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/76.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/37.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/30.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/64.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/83.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/94.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/47.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/22.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/89.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/50.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/44.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/32.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/3.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/20.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/4.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/29.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/98.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/7.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/66.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/17.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/42.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/67.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/33.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/38.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/5.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/32.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/61.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/34.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/13.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/54.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/70.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/3.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/8.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/5.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/39.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/90.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/4.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/62.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/88.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/75.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/6.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/16.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/9.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/17.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/102.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/48.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/24.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/7.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/72.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/20.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/35.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/23.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/33.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/65.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/35.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/26.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/79.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/56.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/28.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/53.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/31.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/36.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/81.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/15.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/14.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/100.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/7.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/72.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/15.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/12.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/88.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/28.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/47.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/89.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/23.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/10.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/58.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/38.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/84.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/34.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/63.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/77.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/79.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/59.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/87.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/95.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/103.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/13.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/56.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/105.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  // { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/86.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/101.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/19.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/55.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/27.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/47.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/84.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/9.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/97.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/49.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/99.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/57.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/41.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/93.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/12.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/16.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/21.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-postshow.s3.us-east-1.amazonaws.com/5.jpeg", alt: "Jon Carlo Concert", category: "postshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/52.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-decor.s3.us-east-1.amazonaws.com/20.jpeg", alt: "Jon Carlo Concert", category: "decoration" },
  { type: "image", src: "https://jon-carlos-live-concert.s3.us-east-1.amazonaws.com/45.jpeg", alt: "Jon Carlo Concert", category: "concert" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/68.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/67.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
  { type: "image", src: "https://jon-carlos-preshow.s3.us-east-1.amazonaws.com/75.jpeg", alt: "Jon Carlo Concert", category: "preshow" },
];


/*
  =========================
  YOUTUBE HELPERS
  =========================
*/
const isYouTube = (src) =>
  typeof src === "string" && src.includes("youtube.com/embed/");

const getYouTubeThumbnail = (src) => {
  const id = src?.split("youtube.com/embed/")[1]?.split("?")[0];
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : null;
};

const getVideoThumbnail = (item) => {
  if (item.thumbnail) return item.thumbnail;
  if (isYouTube(item.src)) return getYouTubeThumbnail(item.src);
  return null;
};

/*
  =========================
  FILTER TABS CONFIG
  type filters and category
  filters are separate rows
  =========================
*/
const TYPE_FILTERS = [
  { key: "all",   label: "All" },
  { key: "image", label: "Photos" },
  { key: "video", label: "Videos" },
];

const CATEGORY_FILTERS = [
  { key: "all",      label: "All Moments" },
  { key: "preshow",  label: "Pre-Show" },
  { key: "concert",  label: "Concert" },
  { key: "postshow", label: "Post-Show" },
  { key: "decoration", label: "Decoration" }
];

export default function AlbumPage() {
  const router = useRouter();

  const [visibleCount, setVisibleCount] = useState(16);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const videoRef = useRef(null);
  const savedTimes = useRef({});

  /*
    =========================
    FILTERING
    Both filters apply together —
    type AND category must match
    =========================
  */
  const filteredItems = galleryItems.filter((item) => {
    const typeMatch = typeFilter === "all" || item.type === typeFilter;
    const categoryMatch = categoryFilter === "all" || item.category === categoryFilter;
    return typeMatch && categoryMatch;
  });

  const visibleItems = filteredItems.slice(0, visibleCount);
  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  // Counts always reflect only the currently active category filter
  const countFor = (type) =>
    galleryItems.filter(
      (i) =>
        (type === "all" || i.type === type) &&
        (categoryFilter === "all" || i.category === categoryFilter)
    ).length;

  const categoryCountFor = (cat) =>
    galleryItems.filter(
      (i) =>
        (cat === "all" || i.category === cat) &&
        (typeFilter === "all" || i.type === typeFilter)
    ).length;

  /*
    =========================
    VIDEO POSITION RESTORE
    =========================
  */
  useEffect(() => {
    if (selectedIndex === null) return;
    if (selectedItem?.type !== "video") return;
    if (isYouTube(selectedItem.src)) return;
    if (!videoRef.current) return;

    const saved = savedTimes.current[selectedIndex] ?? 0;
    videoRef.current.currentTime = saved;
    if (saved > 0) videoRef.current.play().catch(() => {});
  }, [selectedIndex, selectedItem]);

  const saveCurrentTime = () => {
    if (
      videoRef.current &&
      selectedItem?.type === "video" &&
      !isYouTube(selectedItem.src)
    ) {
      savedTimes.current[selectedIndex] = videoRef.current.currentTime;
    }
  };

  /*
    =========================
    MODAL FUNCTIONS
    =========================
  */
  const openItem = (index) => {
    setSelectedIndex(index);
    setIsClosing(false);
  };

  const closeModal = () => {
    saveCurrentTime();
    setIsClosing(true);
    setTimeout(() => {
      setSelectedIndex(null);
      setIsClosing(false);
    }, 250);
  };

  const nextMedia = () => {
    saveCurrentTime();
    setSelectedIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevMedia = () => {
    saveCurrentTime();
    setSelectedIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") nextMedia();
      if (e.key === "ArrowLeft") prevMedia();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  const handleViewMore = () => setVisibleCount((prev) => prev + 16);

  const handleTypeFilter = (key) => {
    setTypeFilter(key);
    setVisibleCount(16);
    setSelectedIndex(null);
  };

  const handleCategoryFilter = (key) => {
    setCategoryFilter(key);
    setVisibleCount(16);
    setSelectedIndex(null);
  };

  const slugTitle = router.query.slug?.replaceAll("-", " ")?.toUpperCase();

  const filterLabel = () => {
    if (typeFilter === "all" && categoryFilter === "all") return "moments";
    if (typeFilter === "image") return "photos";
    if (typeFilter === "video") return "videos";
    return "moments";
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .gallery-page * { box-sizing: border-box; }

        .gallery-item { animation: fadeUp 0.5s ease both; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .modal-enter { animation: modalIn 0.25s ease both; }
        .modal-exit  { animation: modalOut 0.25s ease both; }

        @keyframes modalIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalOut { from { opacity: 1; } to { opacity: 0; } }

        .media-enter { animation: mediaIn 0.3s ease both; }
        @keyframes mediaIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }

        .nav-btn { transition: transform 0.15s ease, color 0.15s ease, background 0.15s ease; }
        .nav-btn:hover { transform: scale(1.15); }

        .grid-item-inner {
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .gallery-item:hover .grid-item-inner  { transform: scale(1.06); }
        .gallery-item:hover .item-overlay     { opacity: 1 !important; }
        .gallery-item:hover .item-label       { transform: translateY(0); opacity: 1; }

        .item-label {
          transform: translateY(8px);
          opacity: 0.7;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .filter-btn {
          transition: all 0.2s ease;
        }
        .filter-btn:hover {
          border-color: rgba(255,255,255,0.3) !important;
          color: rgba(255,255,255,0.85) !important;
        }

        .filter-divider {
          width: 1px;
          height: 20px;
          background: rgba(255,255,255,0.12);
          margin: 0 4px;
          flex-shrink: 0;
        }
      `}</style>

      <section
        className="gallery-page min-h-screen bg-black text-white"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* ── HEADER ── */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p
                className="uppercase text-lg tracking-[6px] text-neutral-500"
                style={{ letterSpacing: "0.4em" }}
              >
                Full Album
              </p>
              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  lineHeight: 1.05,
                  fontWeight: 700,
                }}
              >
                {slugTitle}
              </h1>
            </div>

            <p className="text-neutral-500 text-sm md:text-right">
              {filteredItems.length} {filterLabel()}
            </p>
          </div>

          {/* thin divider */}
          <div
            className="mt-5 h-px w-full"
            style={{ background: "linear-gradient(90deg, #fff2, transparent)" }}
          />

          {/* ── FILTER ROWS ── */}
          <div className="mt-8 flex flex-col gap-3">

            {/* ROW 1: Type (All / Photos / Videos) + divider + Category */}
            <div className="flex flex-wrap items-center gap-2">

              {/* TYPE FILTERS */}
              {TYPE_FILTERS.map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleTypeFilter(key)}
                  className="filter-btn px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                  style={{
                    background: typeFilter === key ? "white" : "rgba(255,255,255,0.06)",
                    color: typeFilter === key ? "black" : "rgba(255,255,255,0.55)",
                    border: typeFilter === key ? "1px solid white" : "1px solid rgba(255,255,255,0.1)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {label}
                  <span
                    className="text-xs rounded-full px-1.5 py-0.5"
                    style={{
                      background: typeFilter === key ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.08)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {countFor(key)}
                  </span>
                </button>
              ))}

              {/* VERTICAL DIVIDER */}
              <div className="filter-divider" />

              {/* CATEGORY FILTERS */}
              {CATEGORY_FILTERS.map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleCategoryFilter(key)}
                  className="filter-btn px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                  style={{
                    background: categoryFilter === key
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(255,255,255,0.04)",
                    color: categoryFilter === key ? "white" : "rgba(255,255,255,0.45)",
                    border: categoryFilter === key
                      ? "1px solid rgba(255,255,255,0.4)"
                      : "1px solid rgba(255,255,255,0.08)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {label}
                  <span
                    className="text-xs rounded-full px-1.5 py-0.5"
                    style={{
                      background: categoryFilter === key
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(255,255,255,0.06)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {categoryCountFor(key)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── GRID ── */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
          {filteredItems.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-32 gap-4"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              <span style={{ fontSize: "3rem" }}>○</span>
              <p className="text-sm uppercase tracking-widest">No items found</p>
            </div>
          ) : (
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
              style={{ gridAutoRows: "200px" }}
            >
              {(() => {
                let imageCounter = 0;
                let videoCounter = 0;
                return visibleItems.map((item, index) => {
                  const isVideo = item.type === "video";
                  const isEvenVideo = videoCounter % 2 === 0;
                  const pattern = isVideo
                    ? {
                        col: "md:col-span-2",
                        row: "md:row-span-2",
                        colStart: isEvenVideo ? "md:col-start-1" : "md:col-start-3",
                      }
                    : {
                        ...[
                          { col: "md:col-span-1", row: "md:row-span-1" },
                          { col: "md:col-span-1", row: "md:row-span-2" },
                          { col: "md:col-span-1", row: "md:row-span-1" },
                          { col: "md:col-span-2", row: "md:row-span-1" },
                          { col: "md:col-span-1", row: "md:row-span-1" },
                          { col: "md:col-span-1", row: "md:row-span-1" },
                        ][imageCounter % 6],
                        colStart: "",
                      };

                  if (isVideo) videoCounter++;
                  else imageCounter++;

                  const thumb = getVideoThumbnail(item);

                  // Category badge colour
                  const categoryColor = {
                    preshow:  "rgba(251,191,36,0.9)",  // amber
                    concert:  "rgba(99,102,241,0.9)",   // indigo
                    postshow: "rgba(52,211,153,0.9)",   // emerald
                    decoration:  "rgba(244,114,182,0.9)",
                  }[item.category] || "rgba(255,255,255,0.5)";

                  return (
                    <button
                      type="button"
                      key={index}
                      onClick={() => openItem(index)}
                      className={`gallery-item relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/30 ${pattern.col} ${pattern.row} ${pattern.colStart}`}
                      style={{ animationDelay: `${(index % 8) * 60}ms` }}
                    >
                      <div className="grid-item-inner absolute inset-0">
                        {item.type === "video" ? (
                          thumb ? (
                            <img src={thumb} alt={item.alt || "Video"} className="w-full h-full object-cover" />
                          ) : (
                            <video src={item.src} muted playsInline preload="metadata" className="w-full h-full object-cover pointer-events-none" />
                          )
                        ) : (
                          <img src={item.src} alt={item.alt || ""} className="w-full h-full object-cover" />
                        )}
                      </div>

                      {/* gradient overlay */}
                      <div
                        className="item-overlay absolute inset-0 pointer-events-none"
                        style={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
                          opacity: 0.7,
                          transition: "opacity 0.3s ease",
                        }}
                      />

                      {/* play icon */}
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)" }}
                          >
                            <span style={{ fontSize: "1rem", marginLeft: "2px" }}>▶</span>
                          </div>
                        </div>
                      )}

                      {/* category dot — top right */}
                      {item.category && (
                        <div
                          className="absolute top-3 right-3 pointer-events-none px-2 py-0.5 rounded-full text-black font-semibold"
                          style={{
                            background: categoryColor,
                            fontSize: "0.55rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          {{
                            preshow:  "Pre",
                            concert:  "Live",
                            postshow: "Post",
                            decoration: "Decoration"
                          }[item.category]}
                        </div>
                      )}

                      {/* bottom label */}
                      <div className="item-label absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                        <span
                          className="text-xs uppercase tracking-widest"
                          style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.6rem", letterSpacing: "0.2em" }}
                        >
                          {item.type === "video"
                            ? isYouTube(item.src) ? "● YouTube" : "● Video"
                            : "○ Photo"}
                        </span>
                        {item.alt && (
                          <p className="text-sm font-medium mt-0.5 truncate">{item.alt}</p>
                        )}
                      </div>
                    </button>
                  );
                });
              })()}
            </div>
          )}

          {/* VIEW MORE */}
          {visibleCount < filteredItems.length && (
            <div className="flex justify-center mt-16">
              <button
                type="button"
                onClick={handleViewMore}
                className="px-10 py-4 rounded-full font-medium text-sm uppercase"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "transparent",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.15em",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "black"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "white"; }}
              >
                Load More
                <span className="ml-3 opacity-50">({filteredItems.length - visibleCount} remaining)</span>
              </button>
            </div>
          )}
        </div>

        {/* ── MODAL ── */}
        {selectedItem && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center px-4 ${isClosing ? "modal-exit" : "modal-enter"}`}
            style={{ background: "rgba(0,0,0,0.97)", backdropFilter: "blur(16px)" }}
          >
            {/* counter */}
            <div
              className="absolute top-6 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.2em" }}
            >
              {selectedIndex + 1} / {filteredItems.length}
            </div>

            {/* close */}
            <button
              onClick={closeModal}
              className="nav-btn absolute top-5 right-5 z-50 w-11 h-11 rounded-full flex items-center justify-center text-xl"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              ×
            </button>

            {/* prev */}
            <button
              onClick={prevMedia}
              className="nav-btn absolute left-4 md:left-8 z-50 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
            >
              ‹
            </button>

            {/* media */}
            <div key={selectedIndex} className="media-enter max-w-5xl w-full flex flex-col items-center">
              {selectedItem.type === "video" ? (
                isYouTube(selectedItem.src) ? (
                  <div className="w-full rounded-2xl overflow-hidden bg-neutral-950" style={{ aspectRatio: "16/9" }}>
                    <iframe
                      key={selectedIndex}
                      src={`${selectedItem.src.split("?")[0]}?autoplay=1&rel=0`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-2xl"
                    />
                  </div>
                ) : (
                  <div className="w-full rounded-2xl overflow-hidden bg-neutral-950">
                    <video
                      key={selectedIndex}
                      ref={videoRef}
                      src={selectedItem.src}
                      poster={selectedItem.thumbnail}
                      controls
                      playsInline
                      preload="auto"
                      className="w-full max-h-[78vh] rounded-2xl"
                      style={{ background: "#000" }}
                    />
                  </div>
                )
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt || ""}
                  className="max-h-[78vh] rounded-2xl object-contain"
                  style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.8)" }}
                />
              )}

              {/* caption + actions */}
              <div className="flex flex-col items-center w-full mt-5 px-2 gap-4">
                {selectedItem.alt && (
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)", fontStyle: "italic" }}>
                    {selectedItem.alt}
                  </p>
                )}
                <div className="flex items-center justify-center gap-3">
                  {selectedItem.type === "image" && (
                    <a
                      href={selectedItem.src}
                      download
                      className="px-5 py-2.5 rounded-xl text-sm font-medium bg-white text-black hover:opacity-90 transition"
                    >
                      Download
                    </a>
                  )}
                  <button
                    onClick={closeModal}
                    className="px-5 py-2.5 rounded-xl text-sm font-medium transition"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>

            {/* next */}
            <button
              onClick={nextMedia}
              className="nav-btn absolute right-4 md:right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
            >
              ›
            </button>
          </div>
        )}
      </section>
    </>
  );
}