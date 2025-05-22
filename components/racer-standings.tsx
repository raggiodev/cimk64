"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trophy, Medal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function RacerStandings() {
  const { t } = useLanguage()

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">{t("position")}</TableHead>
            <TableHead>{t("racers")}</TableHead>
            <TableHead className="text-center">{t("wins")}</TableHead>
            <TableHead className="text-center">{t("points")}</TableHead>
            <TableHead className="text-center">50cc</TableHead>
            <TableHead className="text-center">100cc</TableHead>
            <TableHead className="text-center">150cc</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {racerStandings.map((racer, index) => (
            <TableRow key={racer.id} className="hover:bg-muted/50">
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
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
                    <div className="text-xs text-muted-foreground">{t(racer.teamKey)}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  {racer.wins}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Medal className="h-4 w-4 text-blue-500" />
                  {racer.points}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={racer.cc50 <= 3 ? "default" : "outline"}
                  className={
                    racer.cc50 === 1
                      ? "bg-yellow-500 hover:bg-yellow-500"
                      : racer.cc50 === 2
                        ? "bg-gray-400 hover:bg-gray-400 text-black"
                        : racer.cc50 === 3
                          ? "bg-amber-700 hover:bg-amber-700"
                          : "bg-black hover:bg-black text-muted-foreground"
                  }
                >
                  {t(racer.cc50 === 1 ? "1st" : racer.cc50 === 2 ? "2nd" : racer.cc50 === 3 ? "3rd" : "4th")}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={racer.cc100 <= 3 ? "default" : "outline"}
                  className={
                    racer.cc100 === 1
                      ? "bg-yellow-500 hover:bg-yellow-500"
                      : racer.cc100 === 2
                        ? "bg-gray-400 hover:bg-gray-400 text-black"
                        : racer.cc100 === 3
                          ? "bg-amber-700 hover:bg-amber-700"
                          : "bg-black hover:bg-black text-muted-foreground"
                  }
                >
                  {t(racer.cc100 === 1 ? "1st" : racer.cc100 === 2 ? "2nd" : racer.cc100 === 3 ? "3rd" : "4th")}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={racer.cc150 <= 3 ? "default" : "outline"}
                  className={
                    racer.cc150 === 1
                      ? "bg-yellow-500 hover:bg-yellow-500"
                      : racer.cc150 === 2
                        ? "bg-gray-400 hover:bg-gray-400 text-black"
                        : racer.cc150 === 3
                          ? "bg-amber-700 hover:bg-amber-700"
                          : "bg-black hover:bg-black text-muted-foreground"
                  }
                >
                  {t(racer.cc150 === 1 ? "1st" : racer.cc150 === 2 ? "2nd" : racer.cc150 === 3 ? "3rd" : "4th")}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

const racerStandings = [
  {
    id: "peach",
    name: "Peach",
    teamKey: "team_fernando",
    wins: 25,
    points: 110,
    cc50: 1,
    cc100: 1,
    cc150: 2,
  },
  {
    id: "yoshi",
    name: "Yoshi",
    teamKey: "team_benizio",
    wins: 16,
    points: 83,
    cc50: 4,
    cc100: 3,
    cc150: 1,
  },
  {
    id: "luigi",
    name: "Luigi",
    teamKey: "team_jeremias",
    wins: 6,
    points: 78,
    cc50: 2,
    cc100: 2,
    cc150: 3,
  },
  {
    id: "dk",
    name: "D.K.",
    teamKey: "team_genesis",
    wins: 1,
    points: 13,
    cc50: 3,
    cc100: 0,
    cc150: 0,
  },
  {
    id: "mario",
    name: "Mario",
    teamKey: "team_genesis",
    wins: 0,
    points: 4,
    cc50: 0,
    cc100: 0,
    cc150: 4,
  },
  {
    id: "bowser",
    name: "Bowser",
    teamKey: "team_fernando",
    wins: 0,
    points: 0,
    cc50: 0,
    cc100: 0,
    cc150: 0,
  },
  {
    id: "wario",
    name: "Wario",
    teamKey: "team_benizio",
    wins: 0,
    points: 0,
    cc50: 0,
    cc100: 0,
    cc150: 0,
  },
  {
    id: "toad",
    name: "Toad",
    teamKey: "team_jeremias",
    wins: 0,
    points: 0,
    cc50: 0,
    cc100: 0,
    cc150: 0,
  },
]
