"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trophy, Medal, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function TeamStandings() {
  const { t } = useLanguage()

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">{t("position")}</TableHead>
            <TableHead>{t("team")}</TableHead>
            <TableHead className="text-center">{t("wins")}</TableHead>
            <TableHead className="text-center">{t("points")}</TableHead>
            <TableHead className="text-center">{t("leagues")}</TableHead>
            <TableHead className="text-center">50cc</TableHead>
            <TableHead className="text-center">100cc</TableHead>
            <TableHead className="text-center">150cc</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teamStandings.map((team, index) => (
            <TableRow key={team.id} className="hover:bg-muted/50">
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
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
                    <div className="font-medium">{t(team.nameKey)}</div>
                    <div className="text-xs text-muted-foreground">{team.owner}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  {team.wins}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Medal className="h-4 w-4 text-blue-500" />
                  {team.points}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Award className="h-4 w-4 text-purple-500" />
                  {team.leagueWins}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={team.cc50 === 1 ? "default" : "outline"}
                  className={
                    team.cc50 === 1
                      ? "bg-yellow-500 hover:bg-yellow-500"
                      : team.cc50 === 2
                        ? "bg-gray-400 hover:bg-gray-400 text-black"
                        : team.cc50 === 3
                          ? "bg-amber-700 hover:bg-amber-700"
                          : "bg-black hover:bg-black text-muted-foreground"
                  }
                >
                  {t(team.cc50 === 1 ? "1st" : team.cc50 === 2 ? "2nd" : team.cc50 === 3 ? "3rd" : "4th")}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={team.cc100 === 1 ? "default" : "outline"}
                  className={
                    team.cc100 === 1
                      ? "bg-yellow-500 hover:bg-yellow-500"
                      : team.cc100 === 2
                        ? "bg-gray-400 hover:bg-gray-400 text-black"
                        : team.cc100 === 3
                          ? "bg-amber-700 hover:bg-amber-700"
                          : "bg-black hover:bg-black text-muted-foreground"
                  }
                >
                  {t(team.cc100 === 1 ? "1st" : team.cc100 === 2 ? "2nd" : team.cc100 === 3 ? "3rd" : "4th")}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={team.cc150 === 1 ? "default" : "outline"}
                  className={
                    team.cc150 === 1
                      ? "bg-yellow-500 hover:bg-yellow-500"
                      : team.cc150 === 2
                        ? "bg-gray-400 hover:bg-gray-400 text-black"
                        : team.cc150 === 3
                          ? "bg-amber-700 hover:bg-amber-700"
                          : "bg-black hover:bg-black text-muted-foreground"
                  }
                >
                  {t(team.cc150 === 1 ? "1st" : team.cc150 === 2 ? "2nd" : team.cc150 === 3 ? "3rd" : "4th")}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

const teamStandings = [
  {
    id: "fernando",
    nameKey: "team_fernando",
    owner: "Fernando",
    racers: ["Peach", "Bowser"],
    wins: 25,
    points: 110,
    leagueWins: 2,
    cc50: 1,
    cc100: 1,
    cc150: 2,
  },
  {
    id: "benizio",
    nameKey: "team_benizio",
    owner: "Benizio",
    racers: ["Yoshi", "Wario"],
    wins: 16,
    points: 83,
    leagueWins: 1,
    cc50: 4,
    cc100: 3,
    cc150: 1,
  },
  {
    id: "jeremias",
    nameKey: "team_jeremias",
    owner: "Jeremías",
    racers: ["Luigi", "Toad"],
    wins: 6,
    points: 78,
    leagueWins: 0,
    cc50: 2,
    cc100: 2,
    cc150: 3,
  },
  {
    id: "genesis",
    nameKey: "team_genesis",
    owner: "Génesis",
    racers: ["Mario", "D.K."],
    wins: 1,
    points: 17,
    leagueWins: 0,
    cc50: 3,
    cc100: 4,
    cc150: 4,
  },
]
