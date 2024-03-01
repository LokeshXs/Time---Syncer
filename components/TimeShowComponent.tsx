import { getTime, getTimeType } from "@/actions/actions";
import { Badge, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

type Props = {
  timezoneName: string;
};
export default function TimeShowComponent({ timezoneName }: Props) {
  const [time, setTime] = useState<getTimeType>();

  useEffect(() => {
    const getSelectedTimes = async () => {
      // const timesPromise = timezones.map((timezone) => getTime(timezone));

      // const times = await Promise.all<Promise<getTimeType>[]>(timesPromise);

      // setTimes(times);

      const timezoneTime = await getTime(timezoneName);

      setTime(timezoneTime);
    };

    getSelectedTimes();
  }, []);

 

  return (
    <div
      key={time?.dateTime}
      className=" p-4 max-sm:p-1 bg-muted border-2 border-primary rounded-md flex max-sm:flex-col-reverse justify-between items-center gap-2  "
    >
      <p className="text-xl max-sm:text-lg font-semibold">
        {time?.timeZone}
      </p>

      <div className="flex gap-12 max-sm:gap-2 items-center">
        <div className="flex gap-4">
          <Badge className="rounded text-md max-sm:text-sm">
            {time?.date}
          </Badge>
          <Badge className="rounded text-md max-sm:text-sm">
            {time?.dayOfWeek}
          </Badge>
          <Badge className="rounded text-md max-sm:text-sm">
            {time?.time}
          </Badge>
        </div>

        <div>
          <Button
            size="icon"
            className="bg-muted text-primary shadow-none hover:bg-muted"
            onClick={() => {
              deletTimezone(time?.timeZone);
            }}
          >
            <XCircle />
          </Button>
        </div>
      </div>
    </div>
  );
}
