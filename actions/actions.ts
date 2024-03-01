"use server";

export async function getAllTimezones(): Promise<string[]> {
  const result = await fetch(
    "https://timeapi.io/api/TimeZone/AvailableTimeZones",
    {
      method: "GET",
    }
  );

  // console.log(result);

  if (!result.ok) {
    throw new Error("Something went wrong");
  }

  // console.log(await result.json());

  const data = await result.json();

  return data;
}

export type getTimeType = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  seconds: number;
  milliSeconds: number;
  dateTime: string;
  date: string;
  time: string;
  timeZone: string;
  dayOfWeek: string;
  dstActive: boolean;
};

export async function getTime(timezone: string): Promise<getTimeType> {
  const result = await fetch(
    `https://timeapi.io/api/Time/current/zone?timeZone=${timezone}`,
    {
      method: "GET",
    }
  );

  if (!result.ok) {
    throw new Error("Something went wrong");
  }

  const data = await result.json();

  return data;
}
