import TimezoneSelect from "@/components/TimezoneSelect";
import { getAllTimezones } from "@/actions/actions";
import DisplayTimes from "@/components/DisplayTimes";

import { ProviderTimezone } from "@/components/ProviderTimezone";
import ChatBubble from "@/components/ChatBubble";
import Hero from "@/components/Hero";

export default async function Home() {
  const timezones = await getAllTimezones();

  return (
    <main className="p-6 max-w-[1400px] m-auto flex flex-col gap-24 max-lg:gap-20 max-sm:gap-12 items-center justify-center">
    <Hero />

    <div className="text-center space-y-4 bg-primary p-12 max-lg:p-6 rounded-md">
      <p className="text-4xl max-lg:text-3xl max-sm:text-2xl font-semibold text-secondary  ">Discover what time it is anywhere on the globe.</p>
      <p className="text-xl max-sm:text-sm text-muted">From New York to Tokyo, stay synced with the world</p>
    </div>

      <ProviderTimezone>
        <section className=" flex flex-col gap-12 items-center">
          <TimezoneSelect timezones={timezones} className="w-[600px] max-lg:w-[400px] max-sm:w-[320px] " />
          <DisplayTimes />
        </section>
      </ProviderTimezone>
    </main>
  );
}
