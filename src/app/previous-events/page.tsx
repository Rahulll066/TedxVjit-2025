import PreviousEventCard from '../../components/PreviousEventCard'

export default function PreviousEventsPage() {
  const prevEvents = [
    { year: 2023, theme: 'Ignite', highlights: '...', image: '/2023.jpg' }
    // ...more events
  ]
  return (
    <section className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6">Previous Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {prevEvents.map((e, i) => (
          <PreviousEventCard key={i} event={e} />
        ))}
      </div>
    </section>
  )
}
