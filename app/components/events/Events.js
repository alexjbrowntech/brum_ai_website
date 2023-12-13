/*
const dummyData = [
    {
        "name": "University Event",
        "date": "2024-10-10",
        "url": "",
        "image": "",
    },
    {
        "name": "Another Event",
        "date": "2024-11-10",
        "url": "",
        "image": "",
    }
]

const Events = () => {
    return (
        <section className="text-citrus text-center text-3xl py-2">
            <h1>Upcoming Events:</h1>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-content-evenly">
                        <div className="relative">
                            <div className="bg-[url('/assets/event1_white.png')] bg-contain bg-center bg-no-repeat w-64 md:w-80 lg:w-96 xl:w-102 h-64 md:h-80 lg:h-96 xl:h-102 flex" >
                                <p className="py-20 bottom-0 inset-x text-5xl leading-4 absolute m-auto left-0 right-0">OCT 24</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-[url('/assets/event2_white.png')] bg-contain bg-center bg-no-repeat w-64 md:w-80 lg:w-96 xl:w-102 h-64 md:h-80 lg:h-96 xl:h-102 flex">
                                <p className="py-20 bottom-0 inset-x text-5xl leading-4 absolute m-auto left-0 right-0">NOV 25</p>
                            </div>
                        </div>
                </section>
        </section>
    );
  }
  
  export default Events;
  */

  'use client'

  import supabase from '../../utils/supabase'
  import {useState, useEffect } from 'react';
  import NextEventsMap from './NextEventsMap';
  
  const todayDate = new Date().toLocaleDateString();
  
  console.log(todayDate);
  
  //todayDate.replace('/','-')
  
  
  console.log(todayDate);
  
  export default function EventSection() {
      const [testEvents, setTestEvents] = useState(null);
  
      useEffect(() => {
          const fetchEvents = async () => {
            const { data, error } = await supabase
              .from('testEvents')
              .select('*')
              .gt('display_until', todayDate)
              .order('event_date', { ascending: true })
              .limit(2);
   console.log(data)     
            if (error) {
              console.error('Error:', error.message);
              return;
            }
        
            if (data) {
              console.log('Data:', data); // Log the data variable to check the values
        
              // // Apply filtering and ordering
              // const filteredData = data.filter(event => new Date(event.display_until) > new Date());
              // const sortedData = filteredData.sort((a, b) => new Date(a.display_until) - new Date(b.display_until));
              // const limitedData = sortedData.slice(0, 2);
        
               setTestEvents(data);
            }
          };
        
          fetchEvents();
        }, []);
  
  return (
    <section className="text-citrus text-center text-3xl py-2">
            <h1 className="mt-8 text-6xl text-center p-4 bg-clip-text text-transparent bg-gradient-to-r from-magenta via-citrus to-aqua">Upcoming Events</h1>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-content-evenly">


      {testEvents && testEvents.map?.((nextEvents) => (
    <NextEventsMap key={nextEvents.id} data={nextEvents} />

   
    
  ))}
      </section>
      </section>
      // <div>
      //     <p>{testEvents?.[1]?.event_description}</p>
      // </div>
  )
  }