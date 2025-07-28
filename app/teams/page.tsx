"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal, Award } from "lucide-react"
import Image from "next/image"
import TeamStandings from "@/components/team-standings"
import { useLanguage } from "@/components/language-provider"

export default function TeamsPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">{t("team_statistics")}</h1>
        <p className="text-muted-foreground max-w-[700px]">{t("comprehensive_team_stats")}</p>
      </div>

      <TeamStandings />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {teams.map((team) => (
          <Card key={team.id} className="overflow-hidden border-2 hover:border-primary transition-colors">
            <CardHeader className="bg-muted pb-2">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background z-10">
                    <Image
                      src={`/placeholder.svg?height=48&width=48`}
                      alt={team.racers[0]}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background">
                    <Image
                      src={`/placeholder.svg?height=48&width=48`}
                      alt={team.racers[1]}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <CardTitle>{t(team.nameKey)}</CardTitle>
                  <CardDescription>
                    {t("managed_by")} {team.owner}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">{t("team_stats")}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">{t("wins")}</span>
                      <div className="flex items-center gap-1">
                        <Trophy className="h-4 w-4 text-yellow-500" />
                        <span className="font-bold">{team.wins}</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">{t("points")}</span>
                      <div className="flex items-center gap-1">
                        <Medal className="h-4 w-4 text-blue-500" />
                        <span className="font-bold">{team.points}</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">{t("leagues")}</span>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 text-purple-500" />
                        <span className="font-bold">{team.leagueWins}</span>
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
                          team.cc50L1 === 1
                            ? "bg-yellow-500"
                            : team.cc50L1 === 2
                              ? "bg-gray-400 text-black"
                              : team.cc50L1 === 3
                                ? "bg-amber-700"
                                : "bg-black text-muted-foreground"
                        }
                      >
                        {t(team.cc50L1 === 1 ? "1st" : team.cc50L1 === 2 ? "2nd" : team.cc50L1 === 3 ? "3rd" : "4th")}
                      </Badge>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-muted-foreground">100cc</span>
                      <Badge
                        className={
                          team.cc100 === 1
                            ? "bg-yellow-500"
                            : team.cc100 === 2
                              ? "bg-gray-400 text-black"
                              : team.cc100 === 3
                                ? "bg-amber-700"
                                : "bg-black text-muted-foreground"
                        }
                      >
                        {t(team.cc100 === 1 ? "1st" : team.cc100 === 2 ? "2nd" : team.cc100 === 3 ? "3rd" : "4th")}
                      </Badge>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-muted-foreground">150cc</span>
                      <Badge
                        className={
                          team.cc150 === 1
                            ? "bg-yellow-500"
                            : team.cc150 === 2
                              ? "bg-gray-400 text-black"
                              : team.cc150 === 3
                                ? "bg-amber-700"
                                : "bg-black text-muted-foreground"
                        }
                      >
                        {t(team.cc150 === 1 ? "1st" : team.cc150 === 2 ? "2nd" : team.cc150 === 3 ? "3rd" : "4th")}
                      </Badge>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-muted-foreground">50cc L4</span>
                      <Badge
                        className={
                          team.cc50L4 === 1
                            ? "bg-yellow-500"
                            : team.cc50L4 === 2
                              ? "bg-gray-400 text-black"
                              : team.cc50L4 === 3
                                ? "bg-amber-700"
                                : "bg-black text-muted-foreground"
                        }
                      >
                        {t(team.cc50L4 === 1 ? "1st" : team.cc50L4 === 2 ? "2nd" : team.cc50L4 === 3 ? "3rd" : "4th")}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">{t("racers")}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {team.racerDetails.map((racer) => (
                    <div key={racer.id} className="flex items-center gap-2">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background">
                        <Image
                          src={`/placeholder.svg?height=32&width=32`}
                          alt={racer.name}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{racer.name}</div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Trophy className="h-3 w-3 text-yellow-500 mr-1" />
                          {racer.wins} {t("wins")}
                        </div>
                      </div>
                    </div>
                  ))}
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

const teams = [
  {
    id: "fernando",
    nameKey: "team_fernando",
    owner: "Fernando",
    racers: ["Peach", "Bowser"],
    wins: 31,
    points: 144,
    leagueWins: 3,
    cc50L1: 1,
    cc100: 1,
    cc150: 2,
    cc50L4: 1,
    racerDetails: [
      { id: "peach", name: "Peach", wins: 31 },
      { id: "bowser", name: "Bowser", wins: 0 },
    ],
  },
  {
    id: "benizio",
    nameKey: "team_benizio",
    owner: "Benizio",
    racers: ["Yoshi", "Wario"],
    wins: 24,
    points: 116,
    leagueWins: 1,
    cc50L1: 4,
    cc100: 3,
    cc150: 1,
    cc50L4: 2,
    racerDetails: [
      { id: "yoshi", name: "Yoshi", wins: 24 },
      { id: "wario", name: "Wario", wins: 0 },
    ],
  },
  {
    id: "jeremias",
    nameKey: "team_jeremias",
    owner: "Jeremías",
    racers: ["Luigi", "Toad"],
    wins: 8,
    points: 101,
    leagueWins: 0,
    cc50L1: 2,
    cc100: 2,
    cc150: 3,
    cc50L4: 3,
    racerDetails: [
      { id: "luigi", name: "Luigi", wins: 8 },
      { id: "toad", name: "Toad", wins: 0 },
    ],
  },
  {
    id: "genesis",
    nameKey: "team_genesis",
    owner: "Génesis",
    racers: ["Mario", "D.K."],
    wins: 1,
    points: 23,
    leagueWins: 0,
    cc50L1: 3,
    cc100: 4,
    cc150: 4,
    cc50L4: 4,
    racerDetails: [
      { id: "mario", name: "Mario", wins: 0 },
      { id: "dk", name: "D.K.", wins: 1 },
    ],
  },
]
