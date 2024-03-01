"use client";

import { MouseEventHandler, useContext, useEffect, useState } from "react";
import { TimezonesContext } from "@/context/TimezoneContext";
import { getTime, getTimeType } from "@/actions/actions";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { XCircle } from "lucide-react";

export default function DisplayTimes() {
  const { timezones, setTimezones } = useContext(TimezonesContext);
  const [times, setTimes] = useState<getTimeType[]>([]);

  useEffect(() => {
    const getSelectedTimes = async () => {
      const timesPromise = timezones.map((timezone) => getTime(timezone));

      const times = await Promise.all<Promise<getTimeType>[]>(timesPromise);

      setTimes(times);
    };

    getSelectedTimes();
  }, [timezones]);

  function deletTimezone(toDeleteTimezone: string): void {
    const newTimes = timezones.filter(
      (timezone) => timezone !== toDeleteTimezone.toLowerCase()
    );

    setTimezones(newTimes);
  }

  return (
    <div className="min-w-[600px] max-lg:min-w-[400px]  max-sm:min-w-[300px] min-h-[300px] bg-muted p-4 flex flex-col gap-4">
      {/* {JSON.stringify(times)} */}

      {times.map((timeData) => (
        <div
          key={timeData.dateTime}
          className=" p-4 max-sm:p-1 bg-muted border-2 border-primary rounded-md flex max-sm:flex-col-reverse justify-between items-center gap-2  "
        >
          <p className="text-xl max-sm:text-lg font-semibold">{timeData.timeZone}</p>

          <div className="flex gap-12 max-sm:gap-2 items-center">
            <div className="flex gap-4">
              <Badge className="rounded text-md max-sm:text-sm">{timeData.date}</Badge>
              <Badge className="rounded text-md max-sm:text-sm">{timeData.dayOfWeek}</Badge>
              <Badge className="rounded text-md max-sm:text-sm">{timeData.time}</Badge>
            </div>

            <div>
              <Button
                size="icon"
                className="bg-muted text-primary shadow-none hover:bg-muted"
                onClick={() => {
                  deletTimezone(timeData.timeZone);
                }}
              >
                <XCircle />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
