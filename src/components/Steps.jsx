import { CheckIcon } from '@heroicons/react/24/solid'

const stepsStartup = [
  { id: '01', name: 'Pick and Idea', href: '#', status: 'complete' },
  { id: '02', name: 'Amateur Team', href: '#', status: 'current' },
  { id: '03', name: 'Raise Funds', href: '#', status: 'upcoming' },
  { id: '04', name: 'Build the Product', href: '#', status: 'upcoming' },
  { id: '05', name: 'Product Launch', href: '#', status: 'upcoming' },
]

const stepsStudio = [
    { id: '01', name: '50+ ideas', href: '#', status: 'complete' },
    { id: '02', name: 'Market Validation', href: '#', status: 'current' },
    { id: '03', name: 'Build MVP', href: '#', status: 'upcoming' },
    { id: '04', name: 'Skilled CEO', href: '#', status: 'upcoming' },
    { id: '05', name: '$500K Funding', href: '#', status: 'upcoming' },
  ]

export const Steps = ({isStudio}) => {
    const steps = isStudio ? stepsStudio : stepsStartup;
  return (
    <nav aria-label="Progress">
      <ol
        role="list"
        className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0"
      >
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex md:flex-1">
            <a
              href={step.href}
              className="flex items-center px-6 py-4 text-sm font-medium"
              aria-current="step"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                <span className="text-white">{step.id}</span>
              </span>
              <span className="text-md ml-4 font-semibold text-white">
                {step.name}
              </span>
            </a>

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div
                  className="absolute right-0 top-0 hidden h-full w-5 md:block"
                  aria-hidden="true"
                >
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
