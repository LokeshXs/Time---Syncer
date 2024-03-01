"use client";

import { useContext, useEffect, useState } from "react";
import { TimezonesContext } from "@/context/TimezoneContext";
import { getTime, getTimeType } from "@/actions/actions";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { XCircle } from "lucide-react";
import { Suspense } from "react";
import { Skeleton } from "./ui/skeleton";

export default function DisplayTimes() {
  const { timezones, setTimezones } = useContext(TimezonesContext);
  const [times, setTimes] = useState<getTimeType[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    const getSelectedTimes = async () => {
      setLoading(true);
      const timesPromise = timezones.map((timezone) => getTime(timezone));

      const times = await Promise.all<Promise<getTimeType>[]>(timesPromise);

      setTimes(times);
      setLoading(false);
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

      {loading ? (
        <div className="flex flex-col gap-4">
          <Skeleton className="w-full h-[60px] max-sm:h-[40px] rounded-full" />
          <Skeleton className="w-full h-[60px] rounded-full" />
          <Skeleton className="w-full h-[60px] rounded-full" />
          <Skeleton className="w-full h-[60px] rounded-full" />
        </div>
      ) : (
        times.map((timeData) => (
          <div
            key={timeData.dateTime}
            className=" p-4 max-sm:p-1 bg-muted border-2 border-primary rounded-md flex max-sm:flex-col-reverse justify-between items-center gap-2  "
          >
            <p className="text-xl max-sm:text-lg font-semibold">
              {timeData.timeZone}
            </p>

            <div className="flex gap-12 max-sm:gap-2 items-center">
              <div className="flex gap-4">
                <Badge className="rounded text-md max-sm:text-sm">
                  {timeData.date}
                </Badge>
                <Badge className="rounded text-md max-sm:text-sm">
                  {timeData.dayOfWeek}
                </Badge>
                <Badge className="rounded text-md max-sm:text-sm">
                  {timeData.time}
                </Badge>
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
        ))
      )}
    </div>
  );
}
