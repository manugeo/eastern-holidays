"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SERVICES } from "@/lib/eastern-holidays";
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
import { useRouter } from "next/navigation";


const Services = () => {
  const router = useRouter();
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
        Book Now
      </Button>
    </div>
  );
};

export default Services;