'use client';

import BubbleMenu from './bubble-menu';

const menuItems = [
  {
    label: 'home',
    href: '/',
    ariaLabel: 'Go to home page',
    rotation: -8,
    hoverStyles: { bgColor: '#0ea5e9', textColor: '#ffffff' },
  },
  {
    label: 'about',
    href: '/about',
    ariaLabel: 'Learn about me',
    rotation: 8,
    hoverStyles: { bgColor: '#06b6d4', textColor: '#ffffff' },
  },
  {
    label: 'projects',
    href: '/projects',
    ariaLabel: 'View my projects',
    rotation: 8,
    hoverStyles: { bgColor: '#0284c7', textColor: '#ffffff' },
  },
  {
    label: 'blog',
    href: '/blog',
    ariaLabel: 'Read my blog',
    rotation: 8,
    hoverStyles: { bgColor: '#0369a1', textColor: '#ffffff' },
  },
  {
    label: 'contact',
    href: '/contact',
    ariaLabel: 'Get in touch',
    rotation: -8,
    hoverStyles: { bgColor: '#075985', textColor: '#ffffff' },
  },
];

export function BubbleMenuWrapper() {
  return (
    <BubbleMenu
      logo="/logo.svg"
      items={menuItems}
      menuBg="#ffffff"
      menuContentColor="#0c4a6e"
      useFixedPosition={true}
      animationEase="back.out(1.5)"
      animationDuration={0.5}
      staggerDelay={0.12}
    />
  );
}
