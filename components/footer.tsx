"use client"

import Link from "next/link"
import { Trophy } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5" />
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Mario Kart 64 Tournament Stats</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/about" className="hover:underline">
            {t("about")}
          </Link>
          <Link href="/rules" className="hover:underline">
            {t("rules")}
          </Link>
          <Link href="/contact" className="hover:underline">
            {t("contact")}
          </Link>
        </div>
      </div>
    </footer>
  )
}
