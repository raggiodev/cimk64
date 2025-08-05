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
            <TableHead className="text-center">50cc L1</TableHead>
            <TableHead className="text-center">100cc</TableHead>
            <TableHead className="text-center">150cc</TableHead>
            <TableHead className="text-center">50cc L4</TableHead>
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
                    <div className="font-medium">{team.owner}</div>
                    <div className="text-xs text-muted-foreground">{t(team.nameKey)}</div>
                    <div className="text-xs text-muted-foreground">{team.racers.join(" & ")}</div>
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
                  variant={team.cc50L1 === 1 ? "default" : "outline"}
                  className={
                    team.cc50L1 === 1
                      ? "bg-yellow-500 hover:bg-yellow-500"
                      : team.cc50L1 === 2
                        ? "bg-gray-400 hover:bg-gray-400 text-black"
                        : team.cc50L1 === 3
                          ? "bg-amber-700 hover:bg-amber-700"
                          : "bg-black hover:bg-black text-muted-foreground"
                  }
                >
                  {t(team.cc50L1 === 1 ? "1st" : team.cc50L1 === 2 ? "2nd" : team.cc50L1 === 3 ? "3rd" : "4th")}
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
              <TableCell className="text-center">
                <Badge
                  variant={team.cc50L4 === 1 ? "default" : "outline"}
                  className={
                    team.cc50L4 === 1
                      ? "bg-yellow-500 hover:bg-yellow-500"
                      : team.cc50L4 === 2
                        ? "bg-gray-400 hover:bg-gray-400 text-black"
                        : team.cc50L4 === 3
                          ? "bg-amber-700 hover:bg-amber-700"
                          : "bg-black hover:bg-black text-muted-foreground"
                  }
                >
                  {t(team.cc50L4 === 1 ? "1st" : team.cc50L4 === 2 ? "2nd" : team.cc50L4 === 3 ? "3rd" : "4th")}
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
    wins: 31, // 9 (50cc L1) + 10 (100cc) + 6 (150cc) + 6 (50cc L4) = 31
    points: 144, // 27 + 49 + 34 + 34 = 144
    leagueWins: 3, // Won 50cc L1, 100cc, and 50cc L4
    cc50L1: 1, // 1st in 50cc Liga 1
    cc100: 1, // 1st in 100cc
    cc150: 2, // 2nd in 150cc
    cc50L4: 1, // 1st in 50cc Liga 4
  },
  {
    id: "benizio",
    nameKey: "team_benizio",
    owner: "Benizio",
    racers: ["Yoshi", "Wario"],
    wins: 24, // 1 (50cc L1) + 6 (100cc) + 9 (150cc) + 8 (50cc L4) = 24
    points: 116, // 7 + 37 + 39 + 33 = 116
    leagueWins: 1, // Won 150cc only
    cc50L1: 4, // 4th in 50cc Liga 1
    cc100: 3, // 3rd in 100cc
    cc150: 1, // 1st in 150cc
    cc50L4: 2, // 2nd in 50cc Liga 4
  },
  {
    id: "jeremias",
    nameKey: "team_jeremias",
    owner: "Jeremías",
    racers: ["Luigi", "Toad"],
    wins: 8, // 0 (50cc L1) + 5 (100cc) + 1 (150cc) + 2 (50cc L4) = 8
    points: 101, // 19 + 40 + 19 + 23 = 101
    leagueWins: 0, // No league wins
    cc50L1: 2, // 2nd in 50cc Liga 1
    cc100: 2, // 2nd in 100cc
    cc150: 3, // 3rd in 150cc
    cc50L4: 3, // 3rd in 50cc Liga 4
  },
  {
    id: "genesis",
    nameKey: "team_genesis",
    owner: "Génesis",
    racers: ["Mario", "D.K."],
    wins: 1, // 1 (50cc L1) + 0 (100cc) + 0 (150cc) + 0 (50cc L4) = 1
    points: 23, // 13 + 0 + 4 + 6 = 23
    leagueWins: 0, // No league wins
    cc50L1: 3, // 3rd in 50cc Liga 1
    cc100: 4, // 4th in 100cc (didn't participate)
    cc150: 4, // 4th in 150cc
    cc50L4: 4, // 4th in 50cc Liga 4
  },
]
