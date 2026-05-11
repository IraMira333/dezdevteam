import "./globals.css";

import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";

import { Footer } from "@/src/components/footer/Footer";
import { Header } from "@/src/components/header/Header";
import { Background } from "@/src/components/shared/Background";
import { routing } from "@/src/i18n/routing";

const inter = Inter({
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({ locale, namespace: "Site" });

  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    alternates: {
      languages: {
        "en-US": "/en",
        "uk-UA": "/",
      },
    },
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
    },
  };
}
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="image" property="og:image" content="/public/opengraph.jpg" />
        <meta name="twitter:image" content="/public/opengraph.jpg" />
        <meta name="robots" content="index, follow" />
      </head>
      <body>
        <NextIntlClientProvider>
          <Background />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="mt-19.25 flex flex-[1_0_auto] flex-col">
              {children}
              {/* <Analytics /> */}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
