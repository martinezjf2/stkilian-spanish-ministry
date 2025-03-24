import { useState, useEffect } from "react";
import { getHoliday } from "@/utils/dateUtils";

const holidayImages = {
  "Christmas Eve": ["https://c.tadst.com/gfx/750w/istock-493559502.jpg"],
  "Valentine's Day": [
    "https://magazine.joovy.com/wp-content/uploads/2024/01/AdobeStock_250413771-scaled.jpeg",
    "https://images.news18.com/ibnlive/uploads/2023/02/shutterstock_2236021087-16757939493x2.jpg",
  ],
  "Ash Wednesday": [
    "https://s.hdnux.com/photos/01/36/23/22/24720527/3/ratio3x2_960.jpg",
    "https://catholicphilly.com/media-files/2018/02/ASH-WEDNESDAY-BIBLE_800.jpg",
    "https://www.dioceseofcleveland.org/files/news/page/iwa-ash-wednesday-mass2018have-ok-to-use-cropped-1400x7002.jpg",
  ],
  "New Year's Day": [
    "https://www.usatoday.com/gcdn/presto/2022/12/22/USAT/b8e663f1-f098-4d46-b47a-ef21023609f3-martin-dm.jpg?crop=2119,1192,x0,y108",
    "https://cdn.britannica.com/18/128818-050-48E6CB53/Fireworks-confetti-cheering-crowd-Times-Square-New-January-1-2007.jpg",
    "https://c.tadst.com/gfx/750w/paris-new-year.jpg",
    "https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2022/12/25082257/shutterstock_1444487645.jpg",
  ],
  "Memorial Day": [
    "https://d.newsweek.com/en/full/2045198/memorial-day-2022.jpg",
    "https://www.asomf.org/wp-content/uploads/2021/05/5ecbb9f8ee9fafe91ffb2343_memorialday-1024x538.jpeg",
    "https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/175/History_Memorial_Day_34766_SF_HD_1104x622-16x9.jpg",
  ],
  "Veterans Day": [
    "https://www.bu.edu/files/2024/10/veteran-shoutout-feat.jpg",
    "https://workingsolutions.com/wp-content/uploads/2020/11/veterans-day-kind-hugging-his-dad.jpg",
    "https://chicagoparent.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2021/01/veterans-day-events.jpg",
  ],
  "Labor Day": [
    "https://cdn.britannica.com/40/239640-050-046C95B3/diverse-group-occupations-workforce.jpg",
    "https://media.istockphoto.com/id/612614502/photo/family-with-two-children-celebrating-4th-of-july.jpg?s=612x612&w=0&k=20&c=gFUfbptPQBAKG382g2uMtwBH88iWb5VgxZj6qcolkQA=",
    "https://hips.hearstapps.com/hmg-prod/images/when-is-labor-day-1629318192.jpg?fill=16:9",
  ],
  "Thanksgiving": [
    "https://ceoptions.com/wp-content/uploads/2023/11/IMG_0212-scaled.jpeg",
    "https://i.swncdn.com/media/960w/via/12465-gettyimages-1066944118-monkeybusinessimages.jpg",
    "https://thefamilydinnerproject.org/wp-content/uploads/2019/11/shutterstock_341486426.jpg",
  ],
  "Guadalupe Day": [
    "https://themiscellany.org/sites/default/files/styles/article_full/public/2021-12/guadalupe-2021.png?h=a955cd85&itok=wxjakG29",
    "https://nwcatholic.org/system/images/W1siZiIsIjIwMjIvMTIvMDUvN3dmd2ljMXYxNF8yMDIyX09MR19DZWxlYnJhdGlvbl8xNjU0MC5qcGciXSxbInAiLCJ0aHVtYiIsIjE0MDB4Il1d/image.jpg",
    "https://ca-times.brightspotcdn.com/dims4/default/ea1e15f/2147483647/strip/true/crop/7569x4258+0+479/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F62%2Fb9%2Fb60d91b84a47bdb1be2814b41561%2F1386242-la-de-los-virgen-de-guadalupe-06.JPG",
  ],
  "Christmas": [
    "https://media.licdn.com/dms/image/v2/D5612AQHET8O6eBE7gQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1735109130983?e=2147483647&v=beta&t=0xRMZw1VQZNEiGAuv-Nc86mfJuqieNr5B0-bqzYwqHg",
    "https://www.abhibus.com/blog/wp-content/uploads/2023/12/10-Reasons-Why-We-Celebrate-Christmas-696x464.jpg",
    "https://cf.ltkcdn.net/christmas/images/orig/274931-2131x1407-christmas-ornament.jpg",
    "https://i0.wp.com/santadavidva.com/wp-content/uploads/2021/04/nativity_1.jpg?fit=768%2C432&ssl=1",
  ],
  "Mother's Day": [
    "https://www.bhg.com/thmb/6gV0ZVMCWMd8AqgUzVX2WNP426s=/1866x0/filters:no_upscale():strip_icc()/mother-daughter-smiling-outdoors-7d884281db614313bf629048299e7384.jpg",
    "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_scale,w_640/v1/media/gmg/D5SZRNQJRFEO5DKYPRF2TW55UM.png?_a=DAJAUVWIZAAA",
    "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Ch=1174%2Cq=85%2Cw=2048/wp-content/uploads/happy-mother-s-day-2021-08-27-22-12-32-utc-scaled.jpg",
    "https://xlentcare.com/wp-content/uploads/2024/03/2024-03-Xlent-Care-Mothers-day.jpg",
  ],
  "Father's Day": [
    "https://www.123dentist.com/wp-content/uploads/2018/06/daughter-giving-gift-to-father.jpg",
    "https://familypolicyalliance.com/wp-content/uploads/2021/06/dad-carrying-daughter-istockW.jpg",
    "https://c.tadst.com/gfx/750w/istock-1061168890.jpg",
    "https://us.images.westend61.de/0001808438pw/happy-child-enjoying-a-story-book-with-her-dad-at-home-girl-smiles-while-lying-on-a-bad-with-her-father-father-and-daughter-spending-time-together-during-the-day-JLPSF29531.jpg",
  ],

  "Palm Sunday": [
    "https://img.freepik.com/premium-photo/overhead-view-religious-cross-with-palm-leaves-easter-palm-sunday-background_601748-51772.jpg",
  ],
  "Remembering 9/11": [
    "https://img.buzzfeed.com/buzzfeed-static/static/2021-09/7/20/asset/f627c523d1d4/sub-buzz-909-1631047007-11.jpg",
    "https://images.wsj.net/im-394089?pixel_ratio=2",
    "https://images.theconversation.com/files/234736/original/file-20180904-41720-xwahre.jpg?ixlib=rb-4.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    "https://i.natgeofe.com/k/0d86119f-42f8-4426-9b19-a75c44626f01/Flag_911_KIDS_0821_16x9.jpg",
    "https://www.usace.army.mil/portals/2/siteimages/HistoryOffice/VignetteImages100-199/146_Pent_FT%209-11%20pic%20048P.jpg?ver=WDI0Lvw2fqqp1i6S-Aw1Ug%3D%3D",
    "https://media.tegna-media.com/assets/WQAD/images/ca8d0c8b-3da4-41cb-846c-e2275bf7ee37/ca8d0c8b-3da4-41cb-846c-e2275bf7ee37_750x422.jpg",
    "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2016_35/1694021/160903-pentagon-sept-11-attacks-mn-1244.jpg",
  ],
  "St.Patricks Day": [
    "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt89478e6778097ffb/6656412a6f73af0026de1145/StPatrick_1200.jpg?q=70&width=3840&auto=webp",
  ],

  "Cinco de Mayo": [
    "https://psinapse.com/wp-content/uploads/2021/05/Cinco-De-Mayo.jpg",
    "https://texashillcountryoliveco.com/cdn/shop/articles/easy-cinco-de-mayo-decorations-snacks-other-party-hacks-770893.jpg?v=1683038308",
    "https://www.travelzoo.com/images/tzoo.88776.0.841152.LEAD-AlamyD2BTWC.jpg",
  ],

  "Adult Holy Hour": [
    "https://woforgmedia.wordonfire.org/wp-content/uploads/2019/01/15101422/thays-orrico-v4q5XmZPi-0-unsplash-scaled.jpg",
  ],
  "Youth Holy Hour": [
    "https://www.churchpop.com/content/images/2023/09/eucharist.jpg",
  ],

  default: [
    "/images/home/familia.jpg",
    "/images/home/banda.jpg",
    "/images/home/renovacion.jpg",
    "/images/home/guadalupanos.jpg",
    "/images/home/jovenes.jpg",
    "/images/home/monagios.jpg",
    "/images/home/jovenes2.jpg",
    "/images/home/banda2.jpg",
  ],
};

// Custom messages for holidays
const holidayMessages = {
  "Christmas Eve": "Merry Christmas Eve! 🎄",
  "Valentine's Day": "Happy Valentine's Day! ❤️",
  "Ash Wednesday": "Ash Wednesday",
  "New Year's Day": "Happy New Year! 🎆",
  "Memorial Day": "Honoring Our Heroes on Memorial Day 🇺🇸",
  "Veterans Day": "Thank You, Veterans! 🇺🇸",
  "Labor Day": "Happy Labor Day! 💼",
  "Thanksgiving": "Happy Thanksgiving! 🦃",
  "Guadalupe Day": "Día de la Virgen de Guadalupe 🌹",
  "Christmas": "Merry Christmas! 🎄",
  "Mother's Day": "Happy Mother's Day! 💐",
  "Father's Day": "Happy Father's Day! 👨‍👧‍👦",
  "Palm Sunday": "Palm Sunday 🙏",
  "Remembering 9/11": "Remembering 9/11 🇺🇸",
  "St.Patricks Day": "Happy St.Patrick's Day ☘️",
  "Cinco de Mayo": "Feliz Cinco de Mayo! 🇲🇽",
  "Adult Holy Hour": "Join Us for Holy Hour 🙏",
  "Youth Holy Hour": "Youth Holy Hour 🔥",
};

const holidaySubtitles = {
  "Christmas Eve": "The magic of Christmas begins tonight 🎅✨",
  "Valentine's Day": "Love is in the air! ❤️",
  "Ash Wednesday": "A time for reflection and repentance ✝️",
  "New Year's Day": "A fresh start, a new beginning! 🎆",
  "Memorial Day": "Their sacrifice will never be forgotten 🕊️",
  "Veterans Day": "Thank you for your courage and service 🎖️🇺🇸",
  "Labor Day": "Celebrating the hard work that builds our nation 💼",
  "Thanksgiving": "Grateful hearts, warm homes, and cherished moments 🦃🍂",
  "Guadalupe Day": "Nuestra Señora de Guadalupe, ruega por nosotros 🌹",
  "Christmas": "Peace, joy, and love to all this season 🎄🎁",
  "Mother's Day": "Thank you, Mom, for your endless love and care 💐",
  "Father's Day": "Dad, you are our rock and our hero 👨‍👧‍👦",
  "Palm Sunday": "Hosanna! Blessed is He who comes in the name of the Lord! 🌿",
  "Remembering 9/11": "We will never forget the lives lost and the heroes who stood tall 🇺🇸",
  "St.Patricks Day": "May the luck of the Irish be with you! ☘️",
  "Cinco de Mayo": "Celebrating Mexican heritage and culture! 🇲🇽🎉",
  "Adult Holy Hour": "Take a moment to reflect, pray, and adore Christ in the Eucharist.",
  "Youth Holy Hour": "An evening of worship, praise, and connection with Christ for our youth.",
};

export default function Jumbotron() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const holiday = getHoliday();
  // const holiday = "Adult Holy Hour";
  const images = holidayImages[holiday] || holidayImages.default;

  // Automatic slideshow effect with interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-[80vh] md:h-[100vh] overflow-hidden">
      {/* Slide images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 bg-black/50">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {holiday ? (
            holidayMessages[holiday]
          ) : (
            <>
              Welcome to Our
              <br />
              Spanish Community
            </>
          )}
        </h1>
        <p className="text-lg md:text-xl">
          {holiday
            ? holidaySubtitles[holiday]
            : "Building a stronger connection through faith and action."}
        </p>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-5 w-full flex justify-center space-x-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}



// For Cinco de Mayo
// "https://in-sight.symrise.com/fileadmin/_processed_/1/d/csm_cincodemayo_710c0651a7.jpg",