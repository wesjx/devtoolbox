"use client"
import { useLocale } from "@/lib/locale-context";
import LanguageToggle from "./language-toggle";
import { ModeToggle } from "./theme-toggle";

export default function Hero() {
  const { locale } = useLocale()
  return (
    <div className="relative z-10 flex items-center justify-center h-full text-center px-4 p-8">
      <div className="max-w-3xl w-full space-y-6">
        <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl leading-tight">
          devtoolbox
        </h1>

        <h2 className="font-mono text-lg sm:text-xl md:text-2xl">
          {locale === 'en'
            ? 'A ready-to-use dev toolbox.'
            : 'Uma caixa de ferramentas do dev, pronta pra usar.'}
        </h2>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <ModeToggle />
          <LanguageToggle />
        </div>
      </div>

    </div>
  )
}