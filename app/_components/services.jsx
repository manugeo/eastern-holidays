import { Card, CardContent, CardHeader } from "./card";


const Services = () => {
  const STANDARD_SERVICE = [
    {
      id: '01',
      time: '11:00 am',
      title: 'Checkin and houseboat cruise starts',
      description: 'Welcome drinks and fruits are served while boarding the houseboat.'
    },
    {
      id: '02',
      time: '01:00 pm',
      title: 'Lunch is served to the guests, we serve authentic Kerala food.',
      description: 'Rice, severn types of vegetables and fish fry.'
    },
    {
      id: '03',
      time: '02:00 pm',
      title: 'Cruise resumes.',
      description: ''
    },
    {
      id: '04',
      time: '04:00 pm',
      title: 'Tea & Coffee is served with snacks.',
      description: ''
    },
    {
      id: '05',
      time: '05:30 pm',
      title: 'Anchoring',
      description: ''
    },
    {
      id: '06',
      time: '08:00 pm',
      title: 'Dinner is served.',
      description: 'It has chapatti, chicken curry, dal curry, white rice and four types of vegetable dishes all cooked in Kerala style. Overnight stay in A/C deluxe rooms.'
    },
    {
      id: '07',
      time: '07:00 am',
      title: 'Enjoy the morning in the houseboat followed by breakfast.',
      description: 'It includes bread toast, Omlet, appam, idiappam, poori, egg curry, vegetable curry & steamed banana.'
    },
    {
      id: '08',
      time: '09:00 am',
      title: 'Morning cruise and checkout.',
      description: ''
    },
  ];

  return (
    <div className="min-h-screen bg-sky-950 p-4">
      <ul className="list-disc list-inside">
        <Card>
          <CardHeader>Standard Itinery</CardHeader>
          <CardContent>
            {STANDARD_SERVICE.map(({ id, time, title, description }) => <li key={id}>
              {`${time}: ${title} ${description}`}
            </li>)}
          </CardContent>
        </Card>
      </ul>
    </div>
  );
};

export default Services;