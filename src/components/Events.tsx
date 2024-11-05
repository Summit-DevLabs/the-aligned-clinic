import { link } from "fs";
import { Button } from "./Button";


const events = [
  {
    title: 'Monthly wellness check-ins',
    description: 'Get a monthly check-in to keep track of your health and wellness.',
    link: '/events/monthly-wellness-check-ins',
  },
  {
    title: 'Quarterly health workshops',
    description: 'Join our workshops to learn more about health and wellness.',
    link: '/events/quarterly-health',
  },
  {
    title: 'Annual health fair',
    description: 'Attend our health fair to learn more about health and wellness.',
    link: '/events/annual-health-fair',
  },
]

export default function Events() {
  return (
    <>
            <section className="flex flex-col items-center rounded-3xl px-6 sm:px-8 lg:py-8">
        <h3 className="mt-5 font-display text-2xl text-primary">Events</h3>
        <p className="mt-2 text-base text-slate-400 text-center">
          We host events to help you learn more about your health and wellness.
        </p>
        <ul role="list" className="mt-10 flex flex-col gap-y-3 text-sm text-slate-200">
          {events.map((event) => (
            <li key={event.title} className="text-center">
              <h4 className="font-display text-lg text-slate-900">{event.title}</h4>
              <p>{event.description}</p>
              <Button href={event.link} variant="outline" color="slate" className="mt-2">
                Learn more
              </Button>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}