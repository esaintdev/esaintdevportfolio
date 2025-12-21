import React from 'react';
import ReviewItem from './ReviewItem';

const reviewsData = [
    {
        name: "Wisdom Emori",
        email: "fatima.s@example.com",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 5,
        status: "Prediction Sport Website Review",
        description: "Insane Website delivery, I appreciate the speed, weldone"
    },
    {
        name: "Otuekong Akpaneto",
        email: "adebayo.dev@example.com",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        status: "API Consumption",
        description: "The React integration was seamless. The component structure you built is incredibly scalable."
    },
    {
        name: "Uwem Etim",
        email: "k.asante@example.com",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 5,
        status: "Backend Architecture",
        description: "The API response times are now lightning fast."
    },
    {
        name: "Kofi Mensah",
        email: "kofi.m@example.com",
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
        rating: 5,
        status: "SEO Web Performance",
        description: "Hello Treasure, Our lighthouse score went from 60 to 98. The SEO optimization is also top-notch."
    },
    {
        name: "Godwin Lawson",
        email: "emeka.o@example.com",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        status: "Software Quality",
        description: "Clean code practices and comprehensive testing. The bug rate dropped to near zero."
    },
    {
        name: "Chukwuebuka Francis",
        email: "obinna.eze@example.com",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 5,
        status: "Mobile App SEO Review",
        description: "Thank you Treasure, Our Flutter app performance improved by 40% after their optimization. Highly recommended!"
    },
    {
        name: "Bright Flow Logistic",
        email: "malik.abiola@example.com",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        status: "Logistic Website Review",
        description: "Delivered a complete logistic website solution with Next.js and Supabase ahead of schedule."
    },
    {
        name: "Prestige Media",
        email: "malik.abiola@example.com",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        status: "Social Media Marketing",
        description: "Hi, Treasure, you delivered a spectacular social media reviving, thank you for the patience you had for us."
    },
    {
        name: "Dr. Umana Umoh",
        email: "chioma.n@example.com",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        status: "Ecommerce Website Review",
        description: "Thank you for the amazing website you did, More jobs are coming"
    },
    {
        name: "Father Unyime Pascal",
        email: "tunde.b@example.com",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5,
        status: "Foundation Website",
        description: "Great work, my son, i appreciate your work"
    }
];

// Split data into 3 columns
const col1 = [reviewsData[0], reviewsData[3], reviewsData[6], reviewsData[9]];
const col2 = [reviewsData[1], reviewsData[4], reviewsData[7]];
const col3 = [reviewsData[2], reviewsData[5], reviewsData[8]];

// Duplicate for infinite loop
const reviewsCol1 = [...col1, ...col1];
const reviewsCol2 = [...col2, ...col2];
const reviewsCol3 = [...col3, ...col3];

const ReviewsSection = () => {
    return (
        <>
            <style jsx>{`
        @keyframes scroll-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .vertical-scroll-column {
          display: flex;
          flex-direction: column;
          animation: scroll-vertical 80s linear infinite;
        }
        /* Vary speeds slightly for more organic feel */
        .col-speed-1 { animation-duration: 50s; }
        .col-speed-2 { animation-duration: 55s; }
        .col-speed-3 { animation-duration: 55s; }

        .vertical-scroll-column:hover {
          animation-play-state: paused;
        }
        .review-card-wrapper {
          margin-bottom: 24px;
        }
        .reviews-container {
            height: 800px;
            overflow: hidden;
            position: relative;
        }
        /* Gradient masks for smooth fade in/out */
        .reviews-container::before,
        .reviews-container::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            height: 150px;
            z-index: 2;
            pointer-events: none;
        }
        .reviews-container::before {
            top: 0;
            background: linear-gradient(to bottom, #000000, transparent);
        }
        .reviews-container::after {
            bottom: 0;
            background: linear-gradient(to top, #000000, transparent);
        }
      `}</style>
            <div className="tp-review-area tp-sm-pt pt-180 tp-bg-black-2 section-meinus p-relative">
                <span className="tp-review-overly"></span>
                <div className="container container-1620">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-review-title-wrap text-center mb-35">
                                <span className="tp-responsive-layout-subtitle mb-15 tp-fade-anim" data-delay=".3">Customers Review</span>
                                <h2 className="tp-section-title tp-section-title-60 text-lts tp-section-title-white tp-fade-anim" data-delay=".5">500+ Trusted customers</h2>
                            </div>
                        </div>
                    </div>

                    <div className="tp-review-wrapper-main p-relative pb-50">
                        <div className="reviews-container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="vertical-scroll-column col-speed-1">
                                        {reviewsCol1.map((review, index) => (
                                            <div key={`col1-${index}`} className="review-card-wrapper">
                                                <ReviewItem {...review} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="vertical-scroll-column col-speed-2" style={{ transform: 'translateY(-20%)' }}> {/* Stagger start */}
                                        {reviewsCol2.map((review, index) => (
                                            <div key={`col2-${index}`} className="review-card-wrapper">
                                                <ReviewItem {...review} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="vertical-scroll-column col-speed-3">
                                        {reviewsCol3.map((review, index) => (
                                            <div key={`col3-${index}`} className="review-card-wrapper">
                                                <ReviewItem {...review} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-review-img text-center pt-50">
                        <img src="images/review.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewsSection;
