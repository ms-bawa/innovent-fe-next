import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid'

const cards = [
  {
    name: 'Strategy',
    description:
      'We act like a co-founder and help the startups to streamline their business model, structure, finances and overall business strategy.',
    icon: PhoneIcon,
  },
  {
    name: 'Product',
    description:
      'Our strength is building great products, From design to technology to  deployment at scale, we know how to do it efficiently.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Funding',
    description:
      'We fund early stage startups with a seed fund, also we help the startups which are associated with us to raise funds on advanced stages.',
    icon: NewspaperIcon,
  },
  {
    name: 'Growth',
    description:
      'Whether its B2B or B2C each startup requires unique ways to acquire customers, we help with low-cost strategies to generate higher ROI',
    icon: PhoneIcon,
  },
  {
    name: 'Team',
    description:
      'Our team of experts not only mentors the startups, but we also help to hire, orient and train the team on various aspects. ',
    icon: LifebuoyIcon,
  },
  {
    name: 'Network',
    description:
      'Being associated with India Accelerator, We have a great network of Investors, VCs, Angels and Mentors from various industries. ',
    icon: NewspaperIcon,
  },
]

export const WhatDoWeDo = () => {
  return (
    <div id='whatDoWeDo' className="relative isolate overflow-hidden bg-gray-600 px-6 py-24 sm:py-32 lg:px-8">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-display tracking-tight text-white sm:text-4xl">
          What do We do?
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          We have the complete ecosystem and experience on how to successfully build and scale a startup. We innovate and build companies. We also venture with Founders who have some great ideas and provide them with all the resources they need.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2 lg:max-w-6xl lg:grid-cols-3 lg:gap-8">
        {cards.map((card) => (
          <div
            key={card.name}
            className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
          >
            <card.icon
              className="h-7 w-5 flex-none text-indigo-400"
              aria-hidden="true"
            />
            <div className="text-base leading-7">
              <h3 className="font-semibold text-white">{card.name}</h3>
              <p className="mt-2 text-gray-300">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
