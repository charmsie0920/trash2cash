"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function Calendar24({
  date,
  setDate,
  time,
  setTime
}: {
  date: Date | undefined,
  setDate: (date: Date | undefined) => void,
  time: string,
  setTime: (t: string) => void
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex gap-4">
      {/* DATE PICKER */}
      <div className="flex flex-col gap-3">
        <Label>Date</Label>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-32 justify-between font-normal bg-white/10 text-white border-white/20"
            >
              {date ? date.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto overflow-hidden p-0">
            <Calendar
              mode="single"
              captionLayout="dropdown"
              selected={date}
              onSelect={(d) => {
                setDate(d)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* TIME PICKER */}
      <div className="flex flex-col gap-3">
        <Label>Time</Label>
        <Input
          type="time"
          step="60"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-32 bg-white/10 text-white border-white/20 
          [&::-webkit-calendar-picker-indicator]:hidden"
        />
      </div>
    </div>
  )
}
