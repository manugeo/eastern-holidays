"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
import { ChevronRightCircle } from 'lucide-react'
import { useRouter } from "next/navigation";


const Services = () => {
  const router = useRouter();
  const SERVICES = [
    {
      name: 'Day Cruise',
      ititnery: [
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
          title: 'Anchoring and checkout.',
          description: ''
        }
      ]
    },
    {
      name: 'Standard',
      ititnery: [
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
      ]
    },
    {
      name: 'Night Stay',
      ititnery: [
        {
          id: '01',
          time: '08:00 pm',
          title: 'Dinner is served.',
          description: 'It has chapatti, chicken curry, dal curry, white rice and four types of vegetable dishes all cooked in Kerala style. Overnight stay in A/C deluxe rooms.'
        },
        {
          id: '02',
          time: '07:00 am',
          title: 'Enjoy the morning in the houseboat followed by breakfast.',
          description: 'It includes bread toast, Omlet, appam, idiappam, poori, egg curry, vegetable curry & steamed banana.'
        },
        {
          id: '03',
          time: '09:00 am',
          title: 'Morning cruise and checkout.',
          description: ''
        },
      ]
    }
  ]
  const splideOptions = {
    width: '100%',
    start: 1,
    arrows: false,
    padding: '5%',
    gap: '3%'
  };

  return (
    <div className="min-h-screen bg-sky-950 flex flex-col justify-around items-center">
      <h2 className="text-center text-5xl p-4">Services</h2>

      <Splide aria-label="Servicess offered" tag="section" options={splideOptions}>
        {SERVICES.map(({ name, ititnery }) => <SplideSlide key={name} className="flex flex-col justify-center">
          <Card>
            <CardHeader>
              <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                {ititnery.map(({ id, time, title, description }) => <li key={id}>
                  {`${time}: ${title} ${description}`}
                </li>)}
              </ul>
            </CardContent>
          </Card>
        </SplideSlide>)}
      </Splide>

      <Button size="lg" className="m-4" onClick={() => router.push('/customer-details')}>
        Book Now <ChevronRightCircle className="mx-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default Services;