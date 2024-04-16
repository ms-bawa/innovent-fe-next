import Image from 'next/future/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import studioProcess from '@/images/screenshots/studio_process.png'
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Creative Hub',
    description:
      'We pick great ides, quickly create their prototypes and validate it in Market. Once we have proven traction, we launch the startup along with experienced Entrepreneurs.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Multi-Disciplinary Team',

    description:
    'We are a diverse team of Entrepreneurs, AI Engineers, Designers and Growth Hackers. Our Team is Expert in Building, Marketing, Selling and growing the AI Products.',
    icon: UserGroupIcon,
  },
  {
    name: 'Funding & Mentoring',

    description:
      'We provide mentorship and support to entrepreneurs to help them overcome startup challenges. We get startups access to funding and resources through our network.',
    icon: CurrencyDollarIcon,
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'flex h-10 w-10 items-center justify-center rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500'
        )}
      >
        <feature.icon className="h-6 w-6 text-white" />
      </div>
      <h3
        className={clsx(
          'mt-2 text-xl font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 text-slate-900">{feature.description}</p>
      {/* <p className="mt-4 text-sm text-slate-600">{feature.description}</p> */}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <div className="mt-20">
      <>
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
          {features.map((feature, featureIndex) => (
            <Feature
              key={feature.name}
              feature={{
                ...feature,
                name: (
                  <div className="[&:not(:focus-visible)]:focus:outline-none">
                    <span className="absolute inset-0" />
                    {feature.name}
                  </div>
                ),
              }}
              isActive={true}
              className="relative"
            />
          ))}
        </div>
        <div className="mx-auto my-20 w-[75rem] overflow-hidden rounded-xl bg-white shadow shadow-slate-900/5 ring-1 ring-slate-500/10">
          <Image
            className="hidden lg:block w-full"
            src={studioProcess}
            alt="Studio Process"
            sizes="70rem"
          />
        </div>
      </>
    </div>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="howDoWeDo"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-4xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            How do We do It?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            We are building an ecosystem to identify, build, fund and grow
            businesses using our strengths and those of our partners. We also
            partner with select founders and help them bring new ideas to life.
          </p>
        </div>
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
