
export const SERVICES = [
  {
    name: 'Day Cruise',
    id: 'day-cruise',
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
    id: 'standard',
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
    id: 'night-stay',
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

export const OVERNIGHT_ITINARY = [
  {
    title: "Check-In and Welcome (11:30 am):",
    description: "Guests are welcomed with refreshing coconut water or fresh juice.",
    id: 1
  },
  {
    title: "Cruising Through Backwaters (12:00 pm - 1:30 pm):",
    description: "Houseboat journey commences, offering picturesque views of the backwaters.",
    id: 2
  },
  {
    title: "Lunch Delight (1:30 pm):",
    description: "Enjoy a delectable lunch prepared onboard, featuring local delicacies such as Sambar, Rice, Aviyal, Thoran, Pappad, Curd, Pickle, Green Salad, Chicken Curry, and Karrimeen Fish Fry.",
    id: 3
  },
  {
    title: "Afternoon Cruise and Tea Time (2:30 pm - 5:30 pm):",
    description: "Continue the scenic cruise, with tea and snacks served onboard.",
    id: 4
  },
  {
    title: "Sunset Delight (5:30 pm):",
    description: "Marvel at the stunning sunset view from a picturesque vantage point.",
    id: 5
  },
  {
    title: "Evening Relaxation and Dinner (8:00 pm):",
    description: "Unwind on the sun deck or take a leisurely walk while the staff serves a delightful dinner of local cuisine.",
    id: 6
  },
  {
    title: "Night Stay and Morning Cruise (10:00 pm - 8:30 am):",
    description: "Retire to your comfortable bedroom for a peaceful night's rest, followed by a morning cruise starting at 7:30 am.",
    id: 7
  },
  {
    title: "Breakfast and Check-Out (8:30 am - 9:00 am):",
    description: "Indulge in a delicious breakfast before concluding the memorable tour at 9:00 am.",
    id: 8
  }
];

// Note: Initial number of guests displayed.
export const DEFAULT_GUESTS = {
  adults: 6,
  children: 0,
  infants: 0,
};