import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import { Steps } from './Steps'

const features = [
  {
    name: 'For Entrepreneurs/Startups',
    description:
      'We help you to execute and test your dream idea with our expertise in Technology, Product, Marketing, Growth, Branding, Business Strategy and Network.',
    description2: 'We partner with you to take ahead ideas validated by us.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'For Investors',
    description:
      'Innovent Studio mitigates the risk by producing startups that have the same rate of success and stability of in their seed round as of startup at a series B round. ',
    description2:
      'As a result, Exit times are shorter and Return on investments are faster.',
    icon: LockClosedIcon,
  },
  {
    name: 'For Professional Funds',
    description:
      'Innovent Studio provides access to a portfolio of startups with much higher success rate.',
    description2:
      'market Validation of ideas and experienced team support provided by Innovent Studio gives the Funds a confidence to invest in studio startups.',
    icon: ArrowPathIcon,
  },
  {
    name: 'For Enterprises & Governments',
    description:
      'Enterprises have a variety of problems and use cases that need to be solved and can become potential success B2B Startups.',
    description2:
      'Innovent Studio can collaborate with you to quickly ideate, prototype and test those ideas helping to solve corporate problems.',
    icon: FingerPrintIcon,
  },
]

export const WhyUsSection = () => {
  return (
    <div id='whyUs' className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Why Innovent Studio?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Venture studios are the best way to quickly and efficiently build
            companies. Startups originating from a Venture studio have 44% more
            chances of being successful than a traditional apparoach
          </p>
        </div>

        <div className="my-10 space-y-10">
          <h3 className="font-display text-xl tracking-tight text-white sm:text-2xl">
            Traditional Startup Approach
          </h3>
          <Steps isStudio={false} />  
            

          <h3 className="font-display text-xl tracking-tight text-white sm:text-2xl">
            Innovent Studio Approach
          </h3>
          <Steps isStudio={true}/>  
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt className="text-lg font-semibold text-white">
                {/* <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" /> */}
                {feature.name}
              </dt>{' '}
              <dd>{feature.description}</dd>
              <dd>{feature.description2}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
