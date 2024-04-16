import { CurrencyDollarIcon, InboxIcon, TrashIcon, UserGroupIcon, UsersIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Creative Hub',
    description:
      'We pick great ides, quickly create their prototypes and validate it in Market. Once we have proven traction, we launch the startup along with experienced Entrepreneurs.',
    href: '#',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Multi-Disciplinary Team',
    description:
      'We are a diverse team of Entrepreneurs, AI Engineers, Designers and Growth Hackers. Our Team is Expert in Building, Marketing, Selling and growing the Products.',
    href: '#',
    icon: UserGroupIcon,
  },
  {
    name: 'Funding & Mentoring',
    description:
      'We provide mentorship and support to entrepreneurs to help them overcome startup challenges. We get startups access to funding and resources through our network.',
    href: '#',
    icon: CurrencyDollarIcon,
  },
]

export const HowWeDoIt = () => {
  return (
    <div className="mx-auto bg-white py-24 text-center sm:py-32">
      <h2 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900">
        How do We do It?
      </h2>
      <p className="mx-auto mt-6 max-w-5xl text-lg leading-8 text-gray-600">
        We are passionate about great ideas, products and
        growth. We are building an ecosystem to identify, build, fund and grow
        businesses using our strengths and those of our partners. We also
        partner with select founders and help them bring new ideas to life.
      </p>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
        <dl className="grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600">
                <feature.icon
                  className="h-12 w-12 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="text-center text-base font-semibold leading-7 text-gray-900">
                {feature.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{feature.description}</p>
                {/* <p className="mt-6">
                  <a
                    href={feature.href}
                    className="text-sm font-semibold leading-6 text-indigo-600"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p> */}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
