import React from 'react';

interface ReviewItemProps {
    name: string;
    email: string;
    avatar: string;
    rating: number; // 1-5
    status: string;
    description: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ name, email, avatar, rating, status, description }) => {
    return (
        <div className="mb-20" style={{
            backgroundColor: '#000000ff',
            padding: '30px',
            borderRadius: '10px',
            border: '1px solid #282828',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <div className="tp-review-ratings mb-15">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className="mr-5">
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill={i < rating ? "#F2B827" : "#444"}></path>
                        </svg>
                    </span>
                ))}
            </div>
            <span className="d-inline-block mb-20" style={{ color: '#fff', fontSize: '16px', fontWeight: 500 }}>{status}</span>
            <p className="mb-20" style={{ color: '#888', fontSize: '15px', lineHeight: '26px' }}>{description}</p>

            <div className="tp-review-customer" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div className="icons" style={{ flexShrink: 0 }}>
                    <img src={avatar} alt={name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                </div>
                <span className="emails" style={{ color: '#fff', fontSize: '14px' }}>{email}</span>
            </div>
        </div>
    );
};

export default ReviewItem;
