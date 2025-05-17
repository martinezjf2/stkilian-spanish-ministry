import {
  holidayImages,
  holidayMessages,
  holidaySubtitles,
} from "@/data/holidayContent";

export const getHolidayContent = (holiday) => ({
  images: holidayImages[holiday] || holidayImages.default,
  message: holidayMessages[holiday] || "Welcome to Our Spanish Community",
  subtitle:
    holidaySubtitles[holiday] ||
    "Building a stronger connection through faith and action.",
});
