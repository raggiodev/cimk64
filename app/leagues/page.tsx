"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LeagueTable from "@/components/league-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Flag, Calendar } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function LeaguesPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">{t("league_standings")}</h1>
        <p className="text-muted-foreground max-w-[700px]">{t("view_standings")}</p>
      </div>

      <Tabs defaultValue="50cc-l1">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="50cc-l1">Liga 1</TabsTrigger>
          <TabsTrigger value="100cc-l2">Liga 2</TabsTrigger>
          <TabsTrigger value="150cc">Liga 3</TabsTrigger>
          <TabsTrigger value="50cc-l4">Liga 4</TabsTrigger>
          <TabsTrigger value="100cc-l5">Liga 5</TabsTrigger>
        </TabsList>
        <TabsContent value="50cc-l1" className="pt-4">
          <LeagueDetails
            league="Liga 1 (50cc)"
            champion={t("team_fernando")}
            runnerUp={t("team_jeremias")}
            races={11}
            date="22/12/2022"
          />
          <LeagueTable league="Liga 1 (50cc)" />
        </TabsContent>
        <TabsContent value="100cc-l2" className="pt-4">
          <LeagueDetails
            league="Liga 2 (100cc)"
            champion={t("team_fernando")}
            runnerUp={t("team_jeremias")}
            races={21}
            date="23/01/2025"
          />
          <LeagueTable league="Liga 2 (100cc)" />
        </TabsContent>
        <TabsContent value="150cc" className="pt-4">
          <LeagueDetails
            league="Liga 3 (150cc)"
            champion={t("team_benizio")}
            runnerUp={t("team_fernando")}
            races={16}
            date="19/05/2025"
          />
          <LeagueTable league="Liga 3 (150cc)" />
        </TabsContent>
        <TabsContent value="50cc-l4" className="pt-4">
          <LeagueDetails
            league="Liga 4 (50cc)"
            champion={t("team_fernando")}
            runnerUp={t("team_benizio")}
            races={16}
            date="15/08/2025"
          />
          <LeagueTable league="Liga 4 (50cc)" />
        </TabsContent>
        <TabsContent value="100cc-l5" className="pt-4">
          <LeagueDetails
            league="Liga 5 (100cc)"
            champion={t("team_benizio")}
            runnerUp={t("team_fernando")}
            races={16}
            date=""
          />
          <LeagueTable league="Liga 5 (100cc)" />
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface LeagueDetailsProps {
  league: string
  champion: string
  runnerUp: string
  races: number
  date: string
}

function LeagueDetails({ league, champion, runnerUp, races, date }: LeagueDetailsProps) {
  const { t } = useLanguage()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="border-2 border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("champion")}</CardTitle>
          <Trophy className="h-4 w-4 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{champion}</div>
          <p className="text-xs text-muted-foreground">{t("current_league_leader")}</p>
        </CardContent>
      </Card>
      <Card className="border-2 border-green-500/20 hover:border-green-500/50 transition-colors">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("total_races")}</CardTitle>
          <Flag className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{races}</div>
          <p className="text-xs text-muted-foreground">{t("races_in_league")}</p>
        </CardContent>
      </Card>
      <Card className="border-2 border-blue-500/20 hover:border-blue-500/50 transition-colors">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("league_date")}</CardTitle>
          <Calendar className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{date}</div>
        </CardContent>
      </Card>
    </div>
  )
}
