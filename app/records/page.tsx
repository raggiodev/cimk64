"use client"

import RecordsTable from "@/components/records-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal, Star } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function RecordsPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">{t("tournament_records")}</h1>
        <p className="text-muted-foreground max-w-[700px]">{t("records_achievements")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-2 border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("most_wins_overall")}</CardTitle>
            <Trophy className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background">
                <Image
                  src={`/placeholder.svg?height=32&width=32`}
                  alt="Peach"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold">Peach - 31 {t("wins")}</div>
                <p className="text-xs text-muted-foreground">{t("across_cc_classes")}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-2 border-blue-500/20 hover:border-blue-500/50 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("most_podiums")}</CardTitle>
            <Medal className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background z-10">
                  <Image
                    src={`/placeholder.svg?height=32&width=32`}
                    alt="Peach"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background">
                  <Image
                    src={`/placeholder.svg?height=32&width=32`}
                    alt="Bowser"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">
                  {t("team_fernando")} - 58 {t("podiums")}
                </div>
                <p className="text-xs text-muted-foreground">{t("across_all_tracks")}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500/20 hover:border-green-500/50 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("most_points")}</CardTitle>
            <Star className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background z-10">
                  <Image
                    src={`/placeholder.svg?height=32&width=32`}
                    alt="Peach"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background">
                  <Image
                    src={`/placeholder.svg?height=32&width=32`}
                    alt="Bowser"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">
                  {t("team_fernando")} - 144 {t("points")}
                </div>
                <p className="text-xs text-muted-foreground">{t("across_all_tracks")}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <RecordsTable />
    </div>
  )
}
