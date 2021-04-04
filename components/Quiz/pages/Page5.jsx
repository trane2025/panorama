import styled from 'styled-components';

function Page5() {
    return (
        <Section>
            <i>
                <svg width="170" height="170" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="170" height="170">
                        <circle cx="85" cy="85" r="85" fill="url(#paint0_linear)" />
                    </mask>
                    <g mask="url(#mask0)">
                        <g filter="url(#filter0_ii)">
                            <circle cx="85" cy="85" r="85" fill="url(#paint1_linear)" />
                        </g>
                        <path d="M-6.52759 -80.26L125.823 -16.987L0.387439 117.781L-131.964 54.5083L-6.52759 -80.26Z" fill="white" fillOpacity="0.11" />
                        <path d="M65.4719 -45.7454L98.905 -29.762L-26.531 105.006L-59.9641 89.023L65.4719 -45.7454Z" fill="white" fillOpacity="0.18" />
                    </g>
                    <g filter="url(#filter1_d)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M113.728 75.2845L84.3657 104.491L65.2715 86.3243L72.3183 79.315L84.2087 90.6274L106.681 68.2751L113.728 75.2845Z" fill="#343434" />
                    </g>
                    <defs>
                        <filter id="filter0_ii" x="0" y="-2" width="170" height="174" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="3" />
                            <feGaussianBlur stdDeviation="1" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.989333 0 0 0 0 1 0 0 0 0 0.866667 0 0 0 1 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="-2" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                            <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                        </filter>
                        <filter id="filter1_d" x="65.2715" y="68.2751" width="48.5269" height="37.2137" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="0.07" dy="0.998" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.964706 0 0 0 0 0.780392 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear" x1="85" y1="0" x2="85" y2="170" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFF72C" />
                            <stop offset="0.67878" stopColor="#EFD131" />
                            <stop offset="1" stopColor="#FFB81B" />
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="85" y1="0" x2="85" y2="170" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFF72C" />
                            <stop offset="0.67878" stopColor="#EFD131" />
                            <stop offset="1" stopColor="#FFB81B" />
                        </linearGradient>
                    </defs>
                </svg>

            </i>
            <h2>Ваша заявка <span className='red-text'>отправлена!</span></h2>
            <DescriptionQuiz>Наш администратор свяжется с Вами <span className='black-text'>в ближайшее время!</span></DescriptionQuiz>
        </Section>
    )
}

export default Page5;

const Section = styled.div`
    animation: fade .8s ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        margin-top: 20px;
    }
`;

const DescriptionQuiz = styled.p`
    text-align: center;
    font-size: 20px;
`;