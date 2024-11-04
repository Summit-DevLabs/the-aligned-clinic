import { Button } from "./Button";

export default function Events() {
  return (
    <>
      <section className="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
        <h3 className="mt-5 font-display text-lg text-primary">Events</h3>
        <p className="mt-2 text-base text-slate-400">
          We host events to help you learn more about your health and wellness.
        </p>
        <p className="font-display text-5xl font-light tracking-tight text-primary">
          Free
        </p>
        <ul role="list" className="mt-10 flex flex-col gap-y-3 text-sm text-slate-200">
          <li className="flex">
            <div className="text-slate-400" />
            <span className="ml-4">Monthly wellness check-ins</span>
          </li>
          <li className="flex">
            <div className="text-slate-400" />
            <span className="ml-4">Quarterly health workshops</span>
          </li>
          <li className="flex">
            <div className="text-slate-400" />
            <span className="ml-4">Annual health fair</span>
          </li>
        </ul>
        <Button
          href="/events"
          variant="outline"
          color="white"
          className="mt-8"
          aria-label="Learn more about our events"
        >
          Learn more
        </Button>
      </section>
    </>
  )
}