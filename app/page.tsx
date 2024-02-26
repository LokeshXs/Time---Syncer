import TimezoneSelect from "@/components/TimezoneSelect";
import { getAllTimezones } from "@/actions/actions";
import { Hero } from "@/components/Hero";

export default async function Home() {

 const timezones = await getAllTimezones();




  return (
    <main className="p-6 max-w-[1400px] m-auto flex flex-col gap-24 items-center justify-center">

      

      <section className="w-[600px]" >
        <TimezoneSelect timezones={timezones} className="w-[600px]" />
        
      </section>
    </main>
  );
}
