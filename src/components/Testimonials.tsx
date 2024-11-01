import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

const testimonials = [
  [
    {
      content:
        'Omg Dr.Tubio is amazing. Definitely has changed my life. After years of suffering and pain glad I decided to book over 5 months ago. Each visit just gets better and better. His staff and especially the young ladies in the front are extremely friendly and awesome. Definitely recommended. He’s the Best Hands Down. 🙏🏼',
      author: {
        name: 'Nathan Herrera',
        role: 'November 8, 2022',
        image: avatarImage2,
      },
    },
    {
      content:
        'so professional! 👏👏👏👏👏👏👏',
      author: {
        name: 'Lena Dela Cruz',
        role: 'July 25, 2021',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        'I’m grateful for the opportunity to see Dr. Tubio - he took his time, explained and adjusted me according to my needs. I felt like a champ after being adjusted. See you next month!',
      author: {
        name: 'Alicia Olguin',
        role: 'April 5, 2021',
        image: avatarImage5,
      },
    },
    {
      content:
        'After one adjustment, I noticed a huge improvement in posture, little to no pain in my daily activities now, and improvement in my quality of life overall. Dr T is worth every penny. Will continue to see him on a regular basis now.',
      author: {
        name: 'Nigel Smith',
        role: 'October 16, 2020',
        image: avatarImage1,
      },
    },
  ],
  [
    {
      content:
        'I came all the way from California to visit Dr. Tubio! I have to say that this visit with him literally changed my life. I have been going to chiropractors for the last 4 to 5 years and none of them were able to do what he did!',
      author: {
        name: 'Ray Felix',
        role: 'June 21, 2020',
        image: avatarImage3,
      },
    },
    {
      content:
        'I drove in from Gretna, LA. I have scoliosis and I am pretty much uncomfortable most of the time. The Y-Strap felt amazing. After my adjustment I did something I haven’t done in forever...stand or sit without shifting. This is huge.',
      author: {
        name: 'Lisa Sisung',
        role: 'June 13, 2020',
        image: avatarImage4,
      },
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our patients are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by patients from all over the world.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our practice has helped hundreds of patients from all over the world. Here are some of their stories.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
