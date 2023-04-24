import "@/styles/globals.css";

import Header from "@/components/header.jsx";

export const metadata = {
  title: "Workout Trainer",
  description:
    "Workout Trainer allows you to define training according to a specific muscle area.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
