import { Button } from "./Button";
import events1 from '@/images/events/events1.webp'
import events2 from '@/images/events/events2.jpeg'
import events3 from '@/images/events/events3.jpg'

const events = [
  {
    id: 1,
    title: 'Monthly wellness check-ins',
    description: 'Get a monthly check-in to keep track of your health and wellness.',
    imageUrl: events1,
    date: 'March 1, 2022',
    datetime: '7:00 PM',
    href: '/events/monthly-wellness-check-ins',
  },
  {
    id: 2,
    title: 'Quarterly health workshops',
    description: 'Join our workshops to learn more about health and wellness.',
    imageUrl: events2,
    date: 'March 1, 2022',
    datetime: '7:00 PM',
    href: '/events/quarterly-health',
  },
  {
    id: 3,
    title: 'Annual health fair',
    description: 'Attend our health fair to learn more about health and wellness.',
    imageUrl: events3,
    date: 'March 1, 2022',
    datetime: '7:00 PM',
    href: '/events/annual-health-fair',
  },
]

export default function Events() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Events
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              We host events to help you learn more about your health and wellness.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {events.map((events) => (
              <article
                key={events.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group"
              >
                <img
                  alt=""
                  src={events.imageUrl.src}
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <time dateTime={events.datetime} className="mr-8">
                    {events.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    {/* <div className="flex gap-x-2.5">
                    <img alt="" src={events.author.imageUrl} className="h-6 w-6 flex-none rounded-full bg-white/10" />
                    {events.author.name}
                  </div> */}
                  </div>
                </div>
                <h3 className="mt-3 text-lg/6 font-semibold text-white">
                  <a href={events.href}>
                    <span className="absolute inset-0" />
                    {events.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}