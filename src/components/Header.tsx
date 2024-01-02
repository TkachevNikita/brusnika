import React from 'react'
import './styles/Header.css'
import { redirect } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
        <div className="header__logo">
            <svg width="264" height="43" viewBox="0 0 264 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.6647 16.2802C29.6647 19.2005 27.3017 21.569 24.388 21.569C21.4742 21.569 19.1112 19.2005 19.1112 16.2802C19.1112 13.3599 21.4742 10.9915 24.388 10.9915C27.3017 10.9915 29.6647 13.3599 29.6647 16.2802Z" fill="#EF3D24"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M21.4513 0C9.61293 0 0 9.63476 0 21.5C0 33.3652 9.61293 43 21.4513 43C33.2897 43 42.9026 33.3652 42.9026 21.5C42.9026 9.63476 33.2897 0 21.4513 0ZM21.4513 7.65722C29.0682 7.65722 35.2627 13.8658 35.2627 21.5C35.2627 29.1342 29.0682 35.3428 21.4513 35.3428C13.8344 35.3428 7.63987 29.1342 7.63987 21.5C7.63987 13.8658 13.8344 7.65722 21.4513 7.65722Z" fill="#EF3D24"/>
                <path d="M151.329 19.1315C150.251 15.8893 146.029 14.1877 138.917 14.1877C130.245 14.1877 125.473 16.8551 125.496 21.7299C125.496 26.5818 130.268 29.2722 138.94 29.2722C146.052 29.2722 150.136 27.5706 151.283 24.1904L146.006 23.1786C145.479 24.8112 143.299 25.5471 138.94 25.5471C133.113 25.5471 130.566 24.3743 130.566 21.7299C130.566 19.0626 133.136 17.9128 138.94 17.9128C143.184 17.9128 145.364 18.6257 145.983 20.1893L151.329 19.1315Z" fill="#EF3D24"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M74.5174 14.4636H52.5155V28.9503H70.2271C73.7144 28.9503 75.7563 27.2717 75.7563 24.4433C75.7563 21.615 73.6915 19.9364 70.2271 19.9364H57.2646V17.9818H74.5174V14.4636ZM57.2646 25.5701V23.3626H69.3553C70.4107 23.3626 70.8925 23.7075 70.8925 24.4663C70.8925 25.2481 70.4107 25.5701 69.3553 25.5701H57.2646Z" fill="#EF3D24"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M78.5553 14.4636H94.5921C99.0201 14.4636 101.658 16.5332 101.658 20.0284C101.658 23.5235 99.043 25.5931 94.5921 25.5931H83.5109V28.9733H78.5553V14.4636ZM83.5109 18.2118V21.8909H93.8121C95.7622 21.8909 96.6111 21.339 96.6111 20.0743C96.6111 18.7636 95.7622 18.2118 93.8121 18.2118H83.5109Z" fill="#EF3D24"/>
                <path d="M111.524 24.7193L101.2 14.4636H107.211L114.46 21.592L120.93 14.4636H126.781L113.612 28.9733H107.624L111.524 24.7193Z" fill="#EF3D24"/>
                <path d="M158.556 14.4636H153.6V28.9733H158.556V23.4546H173.721V28.9733H178.677V14.4636H173.721V19.7064H158.556V14.4636Z" fill="#EF3D24"/>
                <path d="M187.28 14.4636H182.324V28.9733H187.28L201.917 19.0856V28.9733H206.896V14.4636H201.917L187.28 24.3513V14.4636Z" fill="#EF3D24"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M215.339 14.4636H210.383V28.9733H215.339V22.6267L226.948 28.9733H241.103L243.076 26.4439H256.085L258.058 28.9733H264L252.253 14.4636H247.091L235.422 28.8775L221.579 21.2931L235.253 14.4636H227.177L215.339 20.5112V14.4636ZM249.569 18.0508L253.423 23.0177H245.715L249.569 18.0508Z" fill="#EF3D24"/>
            </svg>
        </div>
        <div className="header__user">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_36_4593)">
            <g clipPath="url(#clip1_36_4593)">
            <circle cx="21" cy="21" r="20.125" stroke="white" strokeWidth="1.75" strokeDasharray="5.25 5.25"/>
            <path d="M14 29.3125V29.3125C14 25.9298 16.7423 23.1875 20.125 23.1875H21H21.875C25.2577 23.1875 28 25.9298 28 29.3125V29.3125" stroke="white" strokeWidth="1.75"/>
            <circle cx="21" cy="16.1875" r="3.5" stroke="white" strokeWidth="1.75"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_36_4593">
            <rect width="42" height="42" rx="21" fill="white"/>
            </clipPath>
            <clipPath id="clip1_36_4593">
            <rect width="42" height="42" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            <div className="header__user-name">
                {localStorage.getItem('role') === 'Administrator' ?
                    'Администратор'
                    :
                    'Ткачев Никита Олегович'
                }
                
            </div>
        </div>
        <div className="header__notifications">
            <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.3333 11.9556C25.3333 9.31517 24.3501 6.78294 22.5996 4.91592C20.8493 3.04888 18.4754 2 16 2C13.5246 2 11.1507 3.04888 9.40034 4.91592C7.65 6.78294 6.66667 9.31517 6.66667 11.9556C6.66667 23.5704 2 26.8889 2 26.8889H30C30 26.8889 25.3333 23.5704 25.3333 11.9556Z" fill="white" stroke="white"/>
                <path d="M18.6908 31.5555C18.4173 32.027 18.0249 32.4184 17.5525 32.6903C17.0802 32.9624 16.5448 33.1057 15.9997 33.1057C15.4546 33.1057 14.9192 32.9624 14.4469 32.6903C13.9747 32.4184 13.5821 32.027 13.3086 31.5555" fill="white"/>
                <path d="M18.6908 31.5555C18.4173 32.027 18.0249 32.4184 17.5525 32.6903C17.0802 32.9624 16.5448 33.1057 15.9997 33.1057C15.4546 33.1057 14.9192 32.9624 14.4469 32.6903C13.9747 32.4184 13.5821 32.027 13.3086 31.5555" stroke="white"/>
            </svg>
        </div>
        <div className="header__logout">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.19448 0C2.34245 0 0 2.34244 0 5.19444V28.8056C0 31.6576 2.34245 34 5.19448 34H22.1946C25.0467 34 27.3891 31.6576 27.3891 28.8056C27.3963 28.2947 27.1279 27.8194 26.6866 27.5619C26.2453 27.3043 25.6995 27.3043 25.2582 27.5619C24.8169 27.8194 24.5485 28.2947 24.5557 28.8056C24.5557 30.1261 23.5152 31.1667 22.1946 31.1667H5.19448C3.87393 31.1667 2.83335 30.1261 2.83335 28.8056V5.19444C2.83335 3.8739 3.87393 2.83333 5.19448 2.83333H22.1946C23.5152 2.83333 24.5557 3.8739 24.5557 5.19444C24.5485 5.70535 24.8169 6.18056 25.2582 6.43812C25.6995 6.69568 26.2453 6.69568 26.6866 6.43812C27.1279 6.18056 27.3963 5.70535 27.3891 5.19444C27.3891 2.34243 25.0467 0 22.1946 0H5.19448ZM25.9577 8.95747C25.381 8.95761 24.8619 9.30731 24.6451 9.84174C24.4283 10.3762 24.5571 10.9887 24.9708 11.3905L29.1636 15.5833H8.97229C8.46139 15.5761 7.98617 15.8445 7.72861 16.2858C7.47105 16.7271 7.47105 17.2729 7.72861 17.7142C7.98617 18.1555 8.46139 18.4239 8.97229 18.4167H29.1636L24.9708 22.6095C24.6007 22.9648 24.4516 23.4924 24.5811 23.9889C24.7105 24.4853 25.0982 24.873 25.5946 25.0025C26.0911 25.1319 26.6187 24.9828 26.9741 24.6127L33.5852 18.0016C34.1383 17.4484 34.1383 16.5516 33.5852 15.9984L26.9741 9.38727C26.7073 9.11253 26.3406 8.95749 25.9577 8.95747V8.95747Z" fill="white"/>
            </svg>
            <div onClick={() => window.location.replace('http://localhost:3000/login')} className="header__logout-text">
                Выйти
            </div>
        </div>
    </header>
  )
}
