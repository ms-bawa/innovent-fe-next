import { joinUsAction } from '@/utils'
import { Button } from './Button'

export const ContactUs = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ready to take your startup to Next Level
          <br />
          connect with us today.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Button
            onClick={() => {
              joinUsAction()
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}
