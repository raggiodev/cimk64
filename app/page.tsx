"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import StatsOverview from "@/components/stats-overview"
import TeamStandings from "@/components/team-standings"
import RacerStandings from "@/components/racer-standings"
import RecordsTable from "@/components/records-table"
import LeagueTable from "@/components/league-table"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-6">
      <section className="mb-8">
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">
            {t("tournament_title")}
          </h1>
          <p className="text-muted-foreground max-w-[700px]">{t("tournament_subtitle")}</p>
        </div>

        <StatsOverview />
      </section>

      <Tabs defaultValue="teams" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="teams">{t("teams")}</TabsTrigger>
          <TabsTrigger value="racers">{t("racers")}</TabsTrigger>
          <TabsTrigger value="leagues">{t("leagues")}</TabsTrigger>
          <TabsTrigger value="records">{t("records")}</TabsTrigger>
        </TabsList>
        <TabsContent value="teams" className="pt-4">
          <TeamStandings />
        </TabsContent>
        <TabsContent value="racers" className="pt-4">
          <RacerStandings />
        </TabsContent>
        <TabsContent value="leagues" className="pt-4">
          <div className="grid gap-6">
            <LeagueTable league="Liga 1 (50cc)" />
            <LeagueTable league="Liga 2 (100cc)" />
            <LeagueTable league="Liga 3 (150cc)" />
            <LeagueTable league="Liga 4 (50cc)" />
          </div>
        </TabsContent>
        <TabsContent value="records" className="pt-4">
          <RecordsTable />
        </TabsContent>
      </Tabs>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {teams.map((team) => (
          <Link href={`/teams/${team.id}`} key={team.id}>
            <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background z-10">
                      <Image
                        src={`/placeholder.svg?height=32&width=32`}
                        alt={team.racers[0]}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background">
                      <Image
                        src={`/placeholder.svg?height=32&width=32`}
                        alt={team.racers[1]}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <span>{team.owner}</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  <div>{t(team.nameKey)}</div>
                  <div>{team.racers.join(" & ")}</div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Trophy className="h-4 w-4 text-yellow-500" />
                    <span>
                      {t("wins")}: {team.wins}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Medal className="h-4 w-4 text-blue-500" />
                    <span>
                      {t("points")}: {team.points}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  )
}

const teams = [
  {
    id: "fernando",
    nameKey: "team_fernando",
    owner: "Fernando",
    racers: ["Peach", "Bowser"],
    wins: 31,
    points: 144,
  },
  {
    id: "benizio",
    nameKey: "team_benizio",
    owner: "Benizio",
    racers: ["Yoshi", "Wario"],
    wins: 24,
    points: 116,
  },
  {
    id: "jeremias",
    nameKey: "team_jeremias",
    owner: "Jeremías",
    racers: ["Luigi", "Toad"],
    wins: 8,
    points: 101,
  },
  {
    id: "genesis",
    nameKey: "team_genesis",
    owner: "Génesis",
    racers: ["Mario", "D.K."],
    wins: 1,
    points: 23,
  },
]
