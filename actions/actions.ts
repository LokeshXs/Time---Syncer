"use server";

export async function getAllTimezones():Promise<string[]> {
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
