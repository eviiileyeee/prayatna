import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Real-time Route Optimization',
    description:
      'Leverage AI-powered analytics to determine the most efficient shipping routes, reducing fuel consumption and voyage time.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Advanced Weather Monitoring',
    description: 'Integrates real-time meteorological data to avoid harsh weather conditions, ensuring safety and efficiency.',
    icon: LockClosedIcon,
  },
  {
    name: 'Sustainable Fuel Management',
    description: 'Optimizes fuel usage by dynamically adjusting routes, minimizing emissions and operational costs.',
    icon: ServerIcon,
  },
]

export default function SmartVoyageFeatures() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Smart Voyage Optimization</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Smarter, Safer, Greener
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Enhance maritime efficiency with real-time AI-driven route optimization, cutting fuel costs and improving sustainability.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Smart Voyage Optimization Map"
            src="./map.png"
            width={2432}
            height={1442}
            className="w-[60rem] max-w-2xl h-[30rem]  rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-8 lg:-ml-16"
          />
        </div>
      </div>
    </div>
  )
}
