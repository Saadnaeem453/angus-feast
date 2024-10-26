import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import restaurantImage from '../assets/resturant.jpg';
import googleImg from '../assets/google.png';
import PropTypes from 'prop-types'; // Import PropTypes
const reviews = [
  { name: 'David Walker', review: 'Absolutely hands down the tastiest buffet we\'ve been to...', rating: 5, date: '22/10/2024' },
  { name: 'James Macneil', review: 'Great food, seems expensive but for the quality of food...', rating: 5, date: '20/10/2024' },
  { name: 'Sujani Perera', review: '5 star buffet I had about 10 plates of food.  Its fantastic! ', rating: 5, date: '13/10/2024' },
  { name: 'Aisha Khan', review: 'Lovely ambiance, excellent service , great food,...', rating: 4, date: '10/10/2024' },
  { name: 'Michael Yates', review: 'Variety was good, but could improve on desserts...', rating: 4, date: '05/10/2024' },
  { name: 'Sophia Allen', review: 'Great for family gatherings, we enjoyed the experience...', rating: 5, date: '01/10/2024' },
  { name: 'Liam Wright', review: 'Affordable yet delicious, and highly recommend!', rating: 5, date: '25/09/2024' },
  { name: 'Emma Wilson', review: 'The sushi bar was fantastic!  highly recommend!', rating: 5, date: '20/09/2024' },
  { name: 'Oliver Scott', review: 'Buffet had a wide selection, something for everyone...', rating: 4, date: '15/09/2024' },
];

const getProfileColor = (index) => {
  const colors = ['bg-red-500', 'bg-gray-500', 'bg-yellow-500', 'bg-purple-500', 'bg-gray-400', 'bg-indigo-500', 'bg-teal-500', 'bg-orange-500', 'bg-blue-500'];
  return colors[index % colors.length];
};

// Custom Star Rating Component
const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? 'text-yellow-300' : 'text-gray-300'}>&#9733;</span>
  ));
  return <div>{stars}</div>;
};
StarRating.propTypes = {
  rating: PropTypes.number.isRequired, // rating must be a number and is required
};

const ReviewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div
      className="relative bg-cover bg-center text-white pb-16 px-5"
      style={{
        backgroundImage: `url(${restaurantImage})`,
        minHeight: '700px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-70"></div>

      {/* Review Header with Rating */}
      <div className="relative z-10 text-center mb-16 mt-5">
        <h2 className="text-4xl md:text-5xl font-bold  md:font-extrabold mb-4">REVIEWS</h2>
        <div className="flex flex-col md:flex-row items-center text-center md:space-y-4 gap-4">
          <img src={googleImg} alt="Google Logo" className="w-12 h-12 mt-2" />
          <div className="flex flex-col items-center">
            <div className="text-6xl font-bold">4.6</div>
          </div>
          <div className="text-xl space-y-2">
          <div className="text-lg font-semibold">Angus Feast</div>
          <div className="text-sm font-light">789 Reviews</div>

            <StarRating rating={4.6} />
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative z-10 max-w-7xl w-full px-5 ">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center relative transform transition-transform duration-300 hover:scale-105 hover:rotate-1">
                <div className="flex items-center justify-center mb-3">
                  <div className={`${getProfileColor(index)} text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold`}>
                    {review.name.charAt(0)}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-2">&quot;{review.review}&quot;</p>
                <div className="mb-2 flex justify-center">
                  <StarRating rating={review.rating} />
                </div>
                <p className="font-semibold text-gray-800">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
