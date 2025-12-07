'use client';

import { StaggeredMenu, StaggeredMenuItem, StaggeredMenuSocialItem } from './staggered-menu';

const menuItems: StaggeredMenuItem[] = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about me', link: '/about' },
  { label: 'Projects', ariaLabel: 'View my projects', link: '/projects' },
  { label: 'Blog', ariaLabel: 'Read my blog', link: '/blog' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
];

const socialItems: StaggeredMenuSocialItem[] = [
  { label: 'GitHub', link: 'https://github.com/Remohavva' },
  { label: 'LinkedIn', link: 'https://linkedin.com/in/ramanuj-am' },
  { label: 'Twitter', link: 'https://twitter.com/GshsRam' },
];

export function StaggeredMenuWrapper() {
  return (
    <StaggeredMenu
      position="right"
      colors={['#bae6fd', '#0ea5e9', '#0284c7']}
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      logoUrl="/logo.svg"
      menuButtonColor="#0c4a6e"
      openMenuButtonColor="#0c4a6e"
      accentColor="#0ea5e9"
      isFixed={true}
      changeMenuColorOnOpen={true}
      closeOnClickAway={true}
    />
  );
}
