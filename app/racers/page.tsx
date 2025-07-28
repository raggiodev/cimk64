"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal } from "lucide-react"
import Image from "next/image"
import RacerStandings from "@/components/racer-standings"
import { useLanguage } from "@/components/language-provider"

export default function RacersPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">{t("racer_statistics")}</h1>
        <p className="text-muted-foreground max-w-[700px]">{t("individual_statistics")}</p>
      </div>

      <RacerStandings />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {racers.map((racer) => (
          <Card key={racer.id} className="overflow-hidden border-2 hover:border-primary transition-colors">
            <CardHeader className="bg-muted pb-2">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background">
                  <Image
                    src={`/placeholder.svg?height=48&width=48`}
                    alt={racer.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <CardTitle>{racer.name}</CardTitle>
                  <CardDescription>{t(racer.teamKey)}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">{t("stats")}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">{t("wins")}</span>
                      <div className="flex items-center gap-1">
                        <Trophy className="h-4 w-4 text-yellow-500" />
                        <span className="font-bold">{racer.wins}</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">{t("points")}</span>
                      <div className="flex items-center gap-1">
                        <Medal className="h-4 w-4 text-blue-500" />
                        <span className="font-bold">{racer.points}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">{t("league_positions")}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-muted-foreground">50cc L1</span>
                      <Badge
                        className={
                          racer.cc50L1 === 1
                            ? "bg-yellow-500"
                            : racer.cc50L1 === 2
                              ? "bg-gray-400 text-black"
                              : racer.cc50L1 === 3
                                ? "bg-amber-700"
                                : "bg-black text-muted-foreground"
                        }
                      >
                        {racer.cc50L1 === 0
                          ? "N/A"
                          : t(
                              racer.cc50L1 === 1
                                ? "1st"
                                : racer.cc50L1 === 2
                                  ? "2nd"
                                  : racer.cc50L1 === 3
                                    ? "3rd"
                                    : "4th",
                            )}
                      </Badge>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-muted-foreground">100cc</span>
                      <Badge
                        className={
                          racer.cc100 === 1
                            ? "bg-yellow-500"
                            : racer.cc100 === 2
                              ? "bg-gray-400 text-black"
                              : racer.cc100 === 3
                                ? "bg-amber-700"
                                : "bg-black text-muted-foreground"
                        }
                      >
                        {racer.cc100 === 0
                          ? "N/A"
                          : t(
                              racer.cc100 === 1 ? "1st" : racer.cc100 === 2 ? "2nd" : racer.cc100 === 3 ? "3rd" : "4th",
                            )}
                      </Badge>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-muted-foreground">150cc</span>
                      <Badge
                        className={
                          racer.cc150 === 1
                            ? "bg-yellow-500"
                            : racer.cc150 === 2
                              ? "bg-gray-400 text-black"
                              : racer.cc150 === 3
                                ? "bg-amber-700"
                                : "bg-black text-muted-foreground"
                        }
                      >
                        {racer.cc150 === 0
                          ? "N/A"
                          : t(
                              racer.cc150 === 1 ? "1st" : racer.cc150 === 2 ? "2nd" : racer.cc150 === 3 ? "3rd" : "4th",
                            )}
                      </Badge>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-muted-foreground">50cc L4</span>
                      <Badge
                        className={
                          racer.cc50L4 === 1
                            ? "bg-yellow-500"
                            : racer.cc50L4 === 2
                              ? "bg-gray-400 text-black"
                              : racer.cc50L4 === 3
                                ? "bg-amber-700"
                                : "bg-black text-muted-foreground"
                        }
                      >
                        {racer.cc50L4 === 0
                          ? "N/A"
                          : t(
                              racer.cc50L4 === 1
                                ? "1st"
                                : racer.cc50L4 === 2
                                  ? "2nd"
                                  : racer.cc50L4 === 3
                                    ? "3rd"
                                    : "4th",
                            )}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${className}`}>{children}</span>
)

const racers = [
  {
    id: "peach",
    name: "Peach",
    teamKey: "team_fernando",
    wins: 31,
    points: 144,
    cc50L1: 1,
    cc100: 1,
    cc150: 2,
    cc50L4: 1,
  },
  {
    id: "yoshi",
    name: "Yoshi",
    teamKey: "team_benizio",
    wins: 24,
    points: 116,
    cc50L1: 4,
    cc100: 3,
    cc150: 1,
    cc50L4: 2,
  },
  {
    id: "luigi",
    name: "Luigi",
    teamKey: "team_jeremias",
    wins: 8,
    points: 101,
    cc50L1: 2,
    cc100: 2,
    cc150: 3,
    cc50L4: 3,
  },
  {
    id: "dk",
    name: "D.K.",
    teamKey: "team_genesis",
    wins: 1,
    points: 13,
    cc50L1: 3,
    cc100: 0,
    cc150: 0,
    cc50L4: 0,
  },
  {
    id: "mario",
    name: "Mario",
    teamKey: "team_genesis",
    wins: 0,
    points: 10,
    cc50L1: 0,
    cc100: 0,
    cc150: 4,
    cc50L4: 4,
  },
  {
    id: "bowser",
    name: "Bowser",
    teamKey: "team_fernando",
    wins: 0,
    points: 0,
    cc50L1: 0,
    cc100: 0,
    cc150: 0,
    cc50L4: 0,
  },
  {
    id: "wario",
    name: "Wario",
    teamKey: "team_benizio",
    wins: 0,
    points: 0,
    cc50L1: 0,
    cc100: 0,
    cc150: 0,
    cc50L4: 0,
  },
  {
    id: "toad",
    name: "Toad",
    teamKey: "team_jeremias",
    wins: 0,
    points: 0,
    cc50L1: 0,
    cc100: 0,
    cc150: 0,
    cc50L4: 0,
  },
]
