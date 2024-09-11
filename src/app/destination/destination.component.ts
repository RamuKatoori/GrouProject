
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  // Declare destinations as a class property
  destinations = {
    lakshadweep: {
      name: 'Lakshadweep',
      description: "Welcome to Lakshadweep, a hidden wonder of incredible India that’s known for its pristine white sandy beaches, vibrant coral reefs, and crystal-clear turquoise water. It’s indeed the paradisical archipelago embodying tranquility, beauty, and exhilaration at the same point. If you're seeking relaxation or a closer connection with nature, the sublime Lakshadweep is the best destination to witness the wonders of both worlds. So, if you’re planning to delve deeper into the cool oceans of the city, then be ready to book your dream journey with EaseMyTrip’s exclusive Lakshadweep tour packages. Travel around the destination with us now and cherish the memories created together forever.",
      additionalImages: [
        'assets/famous-tourist-attraction/lakshadweep1.png',
        'assets/famous-tourist-attraction/lakshadweep2.png',
        'assets/famous-tourist-attraction/lakshadweep3.png'
      ],
      packages: [
        {
          title: 'Explore Lakshadweep',
          duration: '3 Nights',
          locations: '1N Cochin / 2N Agatti',
          price: '₹ 22,999',
          oldPrice: '₹ 24,999',
          image: 'assets/famous-tourist-attraction/lakshadweep1.png',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Beauty of Coral Reef Lakshadweep',
          duration: '5 Nights',
          locations: '1N Cochin / 2N Kavaratti / 2N Bangaram',
          price: '₹ 50,199',
          oldPrice: '₹ 53,999',
          image: 'assets/famous-tourist-attraction/lakshadweep2.png',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Treasure of Bangaram Lakshadweep',
          duration: '4 Nights',
          locations: '1N Cochin / 3N Bangaram',
          price: '₹ 39,799',
          oldPrice: '₹ 42,999',
          image: 'assets/famous-tourist-attraction/lakshadweep3.png',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        }
      ]
    },
    andaman: {
      name: 'Andaman',
      description: "One of the union territories of India, Andaman and Nicobar Islands is a breathtaking archipelago located in the Bay of Bengal consisting of nearly 600 islands out of which only 36 are inhabited. It is among the most popular beach holiday destinations of India. The island is a natural paradise with lush green forests and abundance of wildlife. Most famous for its legendary beaches with coral reefs and stunning marine life, the place serves as an ideal place to get away from the hustle and bustle of the city life in the lap of tranquility. Providing the opportunity for the different water activities, thrilling trek or scenic landscapes make this destination with the varieties of interesting experiences. Enjoy Hiking to the twisting roads of Mount Harriet to get a stunning view of Port Blair and other islands like Ross Island, Viper Island and Jolly Buoy Island. Enjoy escaping to the exotic getaway of Andaman serving peace and cultural extravaganza with the best offers on Andaman tour packages from EaseMyTrip.com",
      additionalImages: [
        'assets/famous-tourist-attraction/andaman1.png',
        'assets/famous-tourist-attraction/andaman2.png',
        'assets/famous-tourist-attraction/andaman3.png'
      ],
      packages: [
        {
          title: 'Explore Andaman',
          duration: '4 Nights',
          locations: '2N Port Blair / 2N Havelock Island',
          price: '₹ 28,499',
          oldPrice: '₹ 30,999',
          image: 'assets/famous-tourist-attraction/andaman1.png',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Andaman Beach Delight',
          duration: '5 Nights',
          locations: '3N Port Blair / 2N Neil Island',
          price: '₹ 40,199',
          oldPrice: '₹ 45,999',
          image: 'assets/famous-tourist-attraction/andaman2.png',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Discover Andaman',
          duration: '6 Nights',
          locations: '3N Port Blair / 3N Havelock Island',
          price: '₹ 52,499',
          oldPrice: '₹ 58,999',
          image: 'assets/famous-tourist-attraction/andaman3.png',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        }
      ]
    },
    kashmir: {
      name: 'Kashmir',
      description: "If there is heaven on earth, it is in Kashmir. The real paradise of Kashmir is an ultimate place for holidaying in the lap of nature. The place enjoys diverse wildlife, snow-capped mountains, picturesque valleys, charming landscapes, flowery gardens, traditional houseboats and much more. Known with beautiful names like 'Alps of East', 'Kingdom of Heaven' and 'Paradise on Earth', Kashmir is an awesome destination for honeymooners but others as well visit this wonderful destination for getting connected to the beauty of nature.",
      additionalImages: [
        'assets/famous-tourist-attraction/kashmir1.jpg',
        'assets/famous-tourist-attraction/kashmir2.jpg',
        'assets/famous-tourist-attraction/kashmir3.jpg'
      ],
      packages: [
        {
          title: 'Feel Alive in Kashmir in Summer',
          duration: '5 Nights',
          locations: 'Srinagar, Pahalgam, Gulmarg',
          price: '₹ 23,999',
          oldPrice: '₹ 26,999',
          image: 'assets/famous-tourist-attraction/kashmir1.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal'],
          highlights: 'Explore the vibrant city of Srinagar, experience the tranquility of Pahalgam, and enjoy the thrill of skiing in Gulmarg.'
        },
        {
          title: 'Kashmir Deepawali & Dussehra Special',
          duration: '4 Nights',
          locations: 'Srinagar',
          price: '₹ 12,999',
          oldPrice: '₹ 15,999',
          image: 'assets/famous-tourist-attraction/kashmir2.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal'],
          highlights: 'Celebrate the festive season in Kashmir with traditional celebrations and enjoy the stunning beauty of the region.'
        },
        {
          title: 'Unexplored Kashmir',
          duration: '5 Nights',
          locations: 'Srinagar, Sonmarg, Gulmarg',
          price: '₹ 30,999',
          oldPrice: '₹ 32,999',
          image: 'assets/famous-tourist-attraction/kashmir3.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal'],
          highlights: 'Discover hidden gems in Kashmir, explore off-the-beaten-path destinations, and experience the true essence of the region.'
        }
      ]
    },
    jaipur: {
      name: 'Jaipur',
      description: "Jaipur is home to one of the most visited and possibly most photographed landmarks of India. Landmarks like Hawa Mahal, City Palace, Amber Fort and Jantar Mantar are the greatest places to visit in Jaipur. Jaipur tour packages are highly sold due to the rich heritage and legacy that it offers. Apart from above mentioned attractions in Jaipur, you can also visit Jaigarh Fort, Nahargarh Fort and Jal Mahal. For the best offers on Jaipur Packages, visit EaseMyTrip. Click to get exciting deals for Jaipur holiday packages.",
      additionalImages: [
        'assets/famous-tourist-attraction/jaipur1.png',
        'assets/famous-tourist-attraction/jaipur2.png',
        'assets/famous-tourist-attraction/jaipur3.png'
      ],
      packages: [
        {
          title: 'Historic Trip to Jaipur',
          duration: '2 Nights',
          locations: 'Jaipur',
          price: '₹ 12,999',
          oldPrice: '₹ 14,999',
          image: 'assets/famous-tourist-attraction/jaipur1.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Amazing Tour of Rajasthan',
          duration: '8 Nights',
          locations: 'Delhi, Agra, Jaipur, Jodhpur, Udaipur',
          price: '₹ 33,999',
          oldPrice: '₹ 36,999',
          image: 'assets/famous-tourist-attraction/jaipur2.png',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Captivating Rajasthan',
          duration: '8 Nights',
          locations: 'Bikaner, Jaisalmer, Jodhpur, Udaipur, Jaipur',
          price: '₹ 34,999',
          oldPrice: '₹ 38,999',
          image: 'assets/famous-tourist-attraction/jaipur3.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        }
      ]
    },
    bangalore: {
      name: 'Bangalore',
      description: "Bangalore, the Garden City of India, is famous for its parks, nightlife, and vibrant tech culture.",
      additionalImages: [
        'assets/famous-tourist-attraction/bangalore1.png',
        'assets/famous-tourist-attraction/bangalore2.png',
        'assets/famous-tourist-attraction/bangalore3.png'
      ],
      packages: [
        {
          title: 'Wonderful Trip to Bangalore',
          duration: '2 Nights',
          locations: 'Bangalore',
          price: '₹ 8,999',
          oldPrice: '₹ 9,999',
          image: 'assets/famous-tourist-attraction/bangalore1.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Beautiful South India',
          duration: '5 Nights',
          locations: 'Mysore, Coorg, Ooty',
          price: '₹ 23,999',
          oldPrice: '₹ 25,999',
          image: 'assets/famous-tourist-attraction/bangalore2.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Beauty of South India',
          duration: '6 Nights',
          locations: 'Bangalore, Mysore, Coorg, Ooty',
          price: '₹ 26,999',
          oldPrice: '₹ 29,999',
          image: 'assets/famous-tourist-attraction/bangalore3.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        }
      ]
    },
    paris: {
      name: 'Paris',
      description: "Paris is the major European city and also the capital of France. This city was founded in 3rd century BC by the Parisii peoples. Paris houses several architectural landmarks and museums. Some of the famous attractions of this city are The Louvre, Musee National d'Art Moderne, Notre Dame Cathedral, The Sainte-Chapelle and The Eiffel Tower etc, these attractions are very popular among the people planning Paris tour. Paris is famous for its wide variety of cuisines. Explore Paris and its amazing destinations and its cuisines and have some quality time in Paris with the best holiday packages, visit EaseMyTrip.com for the effective tour packages.",
      additionalImages: [
        'assets/famous-tourist-attraction/paris1.png',
        'assets/famous-tourist-attraction/paris2.png',
        'assets/famous-tourist-attraction/paris3.png'
      ],
      packages: [
        {
          title: 'Romantic Paris Getaway',
          duration: '3 Nights',
          locations: 'Paris',
          price: '₹ 72,999',
          oldPrice: '₹ 79,999',
          image: 'assets/famous-tourist-attraction/paris1.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Paris and Versailles Highlights',
          duration: '5 Nights',
          locations: 'Paris, Versailles',
          price: '₹ 95,199',
          oldPrice: '₹ 1,02,999',
          image: 'assets/famous-tourist-attraction/paris2.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Explore Paris in Style',
          duration: '7 Nights',
          locations: 'Paris, Disneyland Paris, Louvre Museum',
          price: '₹ 1,25,999',
          oldPrice: '₹ 1,35,999',
          image: 'assets/famous-tourist-attraction/paris3.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        }
      ]
    },
    leh: {
      name: 'Leh',
      description: "Leh was earlier the capital of Ladakh and it is one of scenic town in Jammu and Kashmir. Leh is a place still untouched by modernity and urbanization. There are several tourist attractions in Leh which one can visit on Leh tour and some of them are Shanti Stupa, Leh Palace, War Museum, Chamba Temple, Sankar Gompa and Zorawar Fort. Apart from sightseeing in Leh one can indulge in several adventure activities too. Visit this amazing destination with pocket friendly holiday packages at EaseMyTrip.com and explore the beauty of this scenic place.",
      additionalImages: [
        'assets/famous-tourist-attraction/leh1.png',
        'assets/famous-tourist-attraction/leh2.png',
        'assets/famous-tourist-attraction/leh3.png'
      ],
      packages: [
        {
          title: 'Leh Highlights',
          duration: '5 Nights',
          locations: 'Leh, Nubra Valley, Pangong Lake',
          price: '₹ 35,999',
          oldPrice: '₹ 39,999',
          image: 'assets/famous-tourist-attraction/leh1.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Leh and Ladakh Adventure',
          duration: '7 Nights',
          locations: 'Leh, Nubra Valley, Pangong Lake, Tso Moriri',
          price: '₹ 45,999',
          oldPrice: '₹ 50,999',
          image: 'assets/famous-tourist-attraction/leh2.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Ultimate Leh Exploration',
          duration: '6 Nights',
          locations: 'Leh, Nubra Valley, Pangong Lake, Lamayuru',
          price: '₹ 40,999',
          oldPrice: '₹ 45,999',
          image: 'assets/famous-tourist-attraction/leh3.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        }
      ]
    },
    bali: {
      name: 'Bali',
      description: "Bali is a panoramic island and it is also the province of Indonesia. Bali is a perfect tourist destination and it magnetize tourists each and every corner of the world. Bali is also a part of coral triangle. This island is very scenic and wonderful and that's the reason it is the most preferred destination for holidays. There are many tourist attractions in Bali and some of them are Tanah Lot, Goa Gajah, Bali Safari and Marine Park, Ubud Monkey Forest and Neka Art Museum, these are the most famous attractions in Bali. Apart from this one can visit the beaches of Bali and can also try the local cuisine of Bali on Bali tour. Visit this marvelous destination with best Bali holiday packages at EaseMyTrip.com and relax in destination which is known for meditation retreats and yoga.",
      additionalImages: [
        'assets/famous-tourist-attraction/bali1.png',
        'assets/famous-tourist-attraction/bali2.png',
        'assets/famous-tourist-attraction/bali3.png'
      ],
      packages: [
        {
          title: 'Memorable Bali',
          duration: '5 Nights',
          locations: 'Bali',
          price: '₹ 33,999',
          oldPrice: '₹ 37,999',
          image: 'assets/famous-tourist-attraction/bali1.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Serene Bali Honeymoon Package',
          duration: '6 Nights',
          locations: 'Bali',
          price: '₹ 55,590',
          oldPrice: '₹ 60,999',
          image: 'assets/famous-tourist-attraction/bali2.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Fantastic Bali',
          duration: '5 Nights',
          locations: 'Kuta, Seminyak',
          price: '₹ 79,999',
          oldPrice: '₹ 85,999',
          image: 'assets/famous-tourist-attraction/bali3.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        }
      ]
    },
    dubai: {
      name: 'Dubai',
      description: "Dubai, a city in the United Arab Emirates, is known for its modern architecture, luxury shopping, and vibrant nightlife. It's home to landmarks like the Burj Khalifa, Palm Jumeirah, and Dubai Mall.",
      additionalImages: [
        'assets/famous-tourist-attraction/dubai1.png',
        'assets/famous-tourist-attraction/dubai2.png',
        'assets/famous-tourist-attraction/dubai3.png'
      ],
      packages: [
        {
          title: 'Fantastic Dubai',
          duration: '5 Nights',
          locations: 'Dubai',
          price: '₹ 85,999',
          oldPrice: '₹ 89,999',
          image: 'assets/famous-tourist-attraction/dubai1.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Dubai Kids Go Free',
          duration: '3 Nights',
          locations: 'Dubai',
          price: '₹ 67,999',
          oldPrice: '₹ 72,999',
          image: 'assets/famous-tourist-attraction/dubai2.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Ultimate Dubai Experience',
          duration: '4 Nights',
          locations: 'Dubai',
          price: '₹ 22,999',
          oldPrice: '₹ 24,999',
          image: 'assets/famous-tourist-attraction/dubai3.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        }
      ]
    },
    kerala: {
      name: 'Kerala',
      description: "Often quoted as God's Own Country, Kerala is one of the most beautiful holiday destinations in India. This charming southern state of India is best known for its tranquil backwaters, one-of-its kind houseboat rides, historical monuments, serene lakes, tea plantations, lofty hills and extensive wildlife parks. Explore everything of this state right from its beautiful cities to hill-stations by booking Kerala holiday packages available at EaseMyTrip.com. Here, you can choose any kind of Kerala tour packages from the list and plan a Kerala vacation accordingly!",
      additionalImages: [
        'assets/famous-tourist-attraction/kerala1.png',
        'assets/famous-tourist-attraction/kerala2.png',
        'assets/famous-tourist-attraction/kerala3.png'
      ],
      packages: [
        {
          title: 'Vibrant Kerala',
          duration: '3 Nights',
          locations: 'Kovalam',
          price: '₹ 10,999',
          oldPrice: '₹ 12,499',
          image: 'assets/famous-tourist-attraction/kerala1.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Colorful Kerala',
          duration: '5 Nights',
          locations: 'Cochin, Munnar, Thekkady, Alleppey',
          price: '₹ 18,599',
          oldPrice: '₹ 20,999',
          image: 'assets/famous-tourist-attraction/kerala2.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        },
        {
          title: 'Charming Tour of Kerala',
          duration: '5 Nights',
          locations: 'Athirapally, Munnar, Thekkady, Alleppey',
          price: '₹ 14,599',
          oldPrice: '₹ 16,599',
          image: 'assets/famous-tourist-attraction/kerala3.jpg',
          features: ['Hotel', 'Sightseeing', 'Transfer', 'Meal']
        }
      ]
    }
    
    
    
    

    
  };

  placeInfo: any;

  constructor(private route: ActivatedRoute,  private router: Router) {}

  ngOnInit() {
    const destinationName = this.route.snapshot.paramMap.get('name');
    this.placeInfo = this.destinations[destinationName || 'lakshadweep'];  // Default to Lakshadweep if none found
  }

  // Navigation function to handle "Go" button
  // goTo(destination: string) {
  //   console.log(`Navigating to: ${destination}`);
  // }
  goTo(packageTitle: string) {
    this.router.navigate(['/booking', packageTitle]);
  }
  
}


