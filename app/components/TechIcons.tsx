import React from 'react';

export const ReactIcon = ({ className }: { className?: string }) => (
    <svg viewBox="-10.5 -9.45 21 18.9" className={className} fill="currentColor">
        <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="10" ry="4.5"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
        </g>
    </svg>
);

export const NodeIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor">
        <path d="M16 0l14 8v16l-14 8L2 24V8l14-8z" />
    </svg>
);

export const PythonIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 128 128" className={className} fill="currentColor">
        <path d="M63.8 11.1c-12.8 0-24.1 5.8-24.1 16.6 0 5.8 4.2 11.1 12.8 11.1h13.9v4.2H35.8C20.8 43 11.1 52.8 11.1 64c0 11.1 9.7 21.1 24.7 21.1h5.8v-7.2c0-10 8.3-18.1 18.3-18.1h26.4c2.8 0 5.3-2.5 5.3-5.3V38.9c0-10.8-11.4-16.6-24.1-16.6h-3.7zm15.3 5.5c3 0 5.6 2.5 5.6 5.6s-2.5 5.6-5.6 5.6-5.6-2.5-5.6-5.6 2.5-5.6 5.6-5.6zM92.2 43v15.6c0 2.8-2.5 5.3-5.3 5.3H60.5c-10 0-18.3 8.1-18.3 18.1v7.2h-5.8c-2.8 0-5.3 2.5-5.3 5.3 0 10.8 11.4 16.6 24.1 16.6h11.1c12.8 0 24.1-5.8 24.1-16.6 0-5.8-4.2-11.1-12.8-11.1H63.8v-4.2h30.5c15 0 24.7-9.7 24.7-21.1 0-11.1-9.7-21.1-24.7-21.1h-5.8V43h3.7zm-43.7 66.7c-3 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6z" />
    </svg>
);

export const AWSIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M16.9 12.8c.4-.4.7-.9.7-1.4 0-.8-.7-1.4-1.5-1.4-.7 0-1.3.5-1.5 1.2l-1.9-.6c.4-1.5 1.8-2.6 3.4-2.6 1.9 0 3.5 1.6 3.5 3.5 0 .8-.3 1.5-.8 2l-1.9-.7zm-6.6 2.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm1.5-3.5l-1.9.6c-.2-.7-.8-1.2-1.5-1.2-.8 0-1.5.6-1.5 1.4 0 .5.3 1 .7 1.4l-1.9.7c-.5-.5-.8-1.2-.8-2 0-1.9 1.6-3.5 3.5-3.5 1.6 0 3 1.1 3.4 2.6zm-1.5 6.8c-3.6 0-6.6-2.7-7.1-6.2l1.9-.3c.4 2.4 2.5 4.3 5.2 4.3 2.6 0 4.8-1.9 5.2-4.3l1.9.3c-.5 3.5-3.5 6.2-7.1 6.2z" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
);

export const MongoDBIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm-1-7h2v-6h-2v6zm0-8h2V5h-2v2z" />
    </svg>
);

export const RedisIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M4 4h16v4H4V4zm0 6h16v4H4v-4zm0 6h16v4H4v-4z" />
    </svg>
);

export const DockerIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M2.5 11.5h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-6-3h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-6-3h2v2h-2v-2zm3 0h2v2h-2v-2zm11.5 7c0 2.5-2 4.5-4.5 4.5H2v-2h12.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5H13v-2h1.5c2.5 0 4.5 2 4.5 4.5z" />
    </svg>
);

export const KubernetesIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L18.5 8 12 11.2 5.5 8 12 4.8zM4 16.2V8.8l7 3.5v7.4l-7-3.5zm9 3.5v-7.4l7-3.5v7.4l-7 3.5z" />
    </svg>
);

export const GraphQLIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 2l8.66 5v10L12 22 3.34 17V7L12 2zm0 3.5L6.37 8.75 12 12l5.63-3.25L12 5.5zM5.09 16l5.63 3.25V12.75L5.09 9.5V16zm13.82 0V9.5l-5.63 3.25v6.5L18.91 16z" />
    </svg>
);

export const TypeScriptIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M2 2h20v20H2V2zm16 14h-2v-4h-2v4h-2v-6h6v6zm-8 0H8v-4H6v4H4v-6h6v6z" />
    </svg>
);

export const FlutterIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M14.5 2.5L7 10l3.5 3.5L21 5.5l-6.5-3zM7 10l-3.5 3.5L14.5 21l3.5-3.5L7 10z" />
    </svg>
);

export const FirebaseIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 2L4 18h16L12 2zm0 4l4.5 9h-9L12 6z" />
    </svg>
);
