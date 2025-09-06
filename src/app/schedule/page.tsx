import Timeline from '../../components/Timeline'

export default function SchedulePage() {
  const events = [
    { time: '10:00 AM', title: 'Opening Ceremony', description: 'Kick-off and welcome address.' },
    { time: '11:00 AM', title: 'Keynote Speech', description: 'Inspiring talk by our keynote speaker.' },
    { time: '12:00 PM', title: 'Networking Break', description: 'Meet and connect with other attendees.' },
  ];
  return (
    <section className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6">Event Schedule</h1>
      <Timeline events={events} />
    </section>
  )
}
