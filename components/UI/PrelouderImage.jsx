import React from 'react';
import styled from 'styled-components';

function PrelouderImage() {
    return (
        <Wraper>
            <svg version="1.0" width="64px" height="64px" viewBox="0 0 128 128"><g>
                <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#252525" fillOpacity="1" />
                <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#d5cccc" fillOpacity="0.25" transform="rotate(45 64 64)" />
                <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#d5cccc" fillOpacity="0.25" transform="rotate(90 64 64)" />
                <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#d5cccc" fillOpacity="0.25" transform="rotate(135 64 64)" />
                <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#d5cccc" fillOpacity="0.25" transform="rotate(180 64 64)" />
                <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#d5cccc" fillOpacity="0.25" transform="rotate(225 64 64)" />
                <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#d5cccc" fillOpacity="0.25" transform="rotate(270 64 64)" />
                <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#d5cccc" fillOpacity="0.25" transform="rotate(315 64 64)" />
                <animateTransform attributeName="transform" type="rotate" values="0 64 64;45 64 64;90 64 64;135 64 64;180 64 64;225 64 64;270 64 64;315 64 64" calcMode="discrete" dur="1040ms" repeatCount="indefinite"></animateTransform></g>
            </svg>
        </Wraper>
    )
}

export default PrelouderImage;

const Wraper = styled.div`
    
        z-index: 2;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        position: absolute;
`;
