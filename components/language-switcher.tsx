"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t("language")}</span>
          <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary flex items-center justify-center text-[10px] text-primary-foreground font-bold">
            {language.toUpperCase()}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("es")}>{t("spanish")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("en")}>{t("english")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
