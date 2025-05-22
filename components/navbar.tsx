"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Trophy, Users, Flag, Medal, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/components/language-provider"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Trophy className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">MK64 Stats</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              {t("overview")}
            </Link>
            <Link
              href="/teams"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t("teams")}
            </Link>
            <Link
              href="/racers"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t("racers")}
            </Link>
            <Link
              href="/leagues"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t("leagues")}
            </Link>
            <Link
              href="/records"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t("records")}
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <LanguageSwitcher />
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <Trophy className="h-6 w-6" />
                <span className="font-bold">MK64 Stats</span>
              </Link>
              <div className="grid gap-2 py-6">
                <Link
                  href="/"
                  className={cn("flex items-center gap-2 text-lg font-semibold", "hover:text-primary")}
                  onClick={() => setIsOpen(false)}
                >
                  <BarChart3 className="h-5 w-5" />
                  {t("overview")}
                </Link>
                <Link
                  href="/teams"
                  className={cn(
                    "flex items-center gap-2 text-lg font-semibold text-muted-foreground",
                    "hover:text-primary",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Users className="h-5 w-5" />
                  {t("teams")}
                </Link>
                <Link
                  href="/racers"
                  className={cn(
                    "flex items-center gap-2 text-lg font-semibold text-muted-foreground",
                    "hover:text-primary",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Medal className="h-5 w-5" />
                  {t("racers")}
                </Link>
                <Link
                  href="/leagues"
                  className={cn(
                    "flex items-center gap-2 text-lg font-semibold text-muted-foreground",
                    "hover:text-primary",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Flag className="h-5 w-5" />
                  {t("leagues")}
                </Link>
                <Link
                  href="/records"
                  className={cn(
                    "flex items-center gap-2 text-lg font-semibold text-muted-foreground",
                    "hover:text-primary",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Trophy className="h-5 w-5" />
                  {t("records")}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
