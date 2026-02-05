"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal, Award } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function StatsOverview() {
  const { t } = useLanguage()

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="border-2 border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("team_most_wins")}</CardTitle>
          <Trophy className="h-4 w-4 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{t("team_fernando")}</div>
          <p className="text-xs text-muted-foreground">38 {t("total_victories")}</p>
        </CardContent>
      </Card>
      <Card className="border-2 border-blue-500/20 hover:border-blue-500/50 transition-colors">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("racer_most_wins")}</CardTitle>
          <Medal className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Peach</div>
          <p className="text-xs text-muted-foreground">38 {t("individual_victories")}</p>
        </CardContent>
      </Card>
      <Card className="border-2 border-orange-500/20 hover:border-orange-500/50 transition-colors">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("most_consecutive_wins")}</CardTitle>
          <Trophy className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{t("team_fernando")}</div>
          <p className="text-xs text-muted-foreground">{t("consecutive_wins_detail")}</p>
        </CardContent>
      </Card>
      <Card className="border-2 border-purple-500/20 hover:border-purple-500/50 transition-colors">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("league_champions")}</CardTitle>
          <Award className="h-4 w-4 text-purple-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2 {t("teams")}</div>
          <p className="text-xs text-muted-foreground">Fernando (3), Benizio (2)</p>
        </CardContent>
      </Card>
    </div>
  )
}
