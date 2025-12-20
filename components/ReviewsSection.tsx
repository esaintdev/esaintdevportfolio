import React from 'react';
import ReviewItem from './ReviewItem';

const reviewsData = [
    {
        name: "user1",
        email: "fatima@gmail.com",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 5,
        status: "Customer Support",
        description: "Great customer support, very quick and efficient. 10/10 would recommend!"
    },
    {
        name: "user2",
        email: "e.saint@gmail.com",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        status: "Design Quality",
        description: "Thank you very much! I appreciate, you have a 5 star theme. It's really worth it!"
    },
    {
        name: "user3",
        email: "mjay@gmail.com",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 5,
        status: "Customer Support",
        description: "Great customer support, very quick and efficient. 10/10 would recommend!"
    },
    {
        name: "user4",
        email: "lukas.mayer@example.com",
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
        rating: 5,
        status: "Customizability",
        description: "5 star on from design to support"
    },
    {
        name: "user5",
        email: "edosik1312",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        status: "Customizability",
        description: "5 star on from design to support"
    },
    {
        name: "user6",
        email: "juandeveloper03",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 5,
        status: "Customer Support",
        description: "Great customer support, very quick and efficient. 10/10 would recommend!"
    },
    {
        name: "user7",
        email: "juandeveloper03",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 5,
        status: "Design Quality",
        description: "Thank you very much! I appreciate, you have a 5 star theme. It's really worth it!"
    },
    {
        name: "user8",
        email: "edosik1312",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        status: "Customizability",
        description: "5 star on from design to support"
    },
    {
        name: "user9",
        email: "shykeys",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        status: "Documentation Quality",
        description: "easy to use and a very great customer service"
    },
    {
        name: "user10",
        email: "masoodhusain007",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5,
        status: "Design Quality",
        description: "Thank you very much! I appreciate, you have a 5 star theme. It's really worth it!"
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
        .col-speed-1 { animation-duration: 90s; }
        .col-speed-2 { animation-duration: 75s; }
        .col-speed-3 { animation-duration: 85s; }

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
