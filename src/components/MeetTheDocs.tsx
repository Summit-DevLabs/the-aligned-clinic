const people = [
  {
    name: 'Dr. Alex Tubio',
    role: 'Owner & Chiropractor',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    tiktokUrl: '#',
    instaUrl: '#',
    youtubeUrl: '#',
  },
  {
    name: 'Dr. Liu',
    role: 'Chiropractor',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    tiktokUrl: '#',
    instaUrl: '#',
    youtubeUrl: '#',
  },
  {
    name: 'Dr. Jimenez',
    role: 'Chiropractor',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    tiktokUrl: '#',
    instaUrl: '#',
    youtubeUrl: '#',
  },
  {
    name: 'Dr. Alex Tubio',
    role: 'Owner & Chiropractor',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    tiktokUrl: '#',
    instaUrl: '#',
    youtubeUrl: '#',
  },

]

export default function MeetTheDocs() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">Meet our docs</h2>
          <p className="mt-6 text-lg/8 text-gray-400">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person) => (
            <li key={person.name} className="rounded-2xl bg-gray-800 px-8 py-10">
              <img alt="" src={person.imageUrl} className="mx-auto size-48 rounded-full md:size-56" />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
              <p className="text-sm/6 text-gray-400">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                {/* <li>
                  <a href={person.xUrl} className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">X</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li> */}
                <li>
                  <a href={person.instaUrl} className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">Instagram</span>
                    <svg className="size-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={person.tiktokUrl} className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">TikTok</span>
                    <svg className="size-5" viewBox="0 0 20 20" >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="currentColor"
                          d="M10 1.333C5.4 1.333 1.333 5.4 1.333 10S5.4 18.667 10 18.667 18.667 14.6 18.667 10 14.6 1.333 10 1.333zm4.667 10.8c-.067.467-.467.8-.933.867-1.067.133-5.334.133-5.334.133s-4.267 0-5.334-.133c-.467-.067-.867-.4-.933-.867-.133-1.067-.133-3.2-.133-3.2s0-2.133.133-3.2c.067-.467.467-.8.933-.867 1.067-.133 5.334-.133 5.334-.133s4.267 0 5.334.133c.467.067.867.4.933.867.133 1.067.133 3.2.133 3.2s0 2.133-.133 3.2zM8.333 12.333V7.667l4 2.333-4 2.333z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={person.youtubeUrl} className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">YouTube</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                      <path d="M10 1.333C5.4 1.333 1.333 5.4 1.333 10S5.4 18.667 10 18.667 18.667 14.6 18.667 10 14.6 1.333 10 1.333zm4.667 10.8c-.067.467-.467.8-.933.867-1.067.133-5.334.133-5.334.133s-4.267 0-5.334-.133c-.467-.067-.867-.4-.933-.867-.133-1.067-.133-3.2-.133-3.2s0-2.133.133-3.2c.067-.467.467-.8.933-.867 1.067-.133 5.334-.133 5.334-.133s4.267 0 5.334.133c.467.067.867.4.933.867.133 1.067.133 3.2.133 3.2s0 2.133-.133 3.2zM8.333 12.333V7.667l4 2.333-4 2.333z" />
                    </svg>
                  </a>
                </li>

              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
