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
  { label: 'GitHub', link: 'https://github.com/yourusername' },
  { label: 'LinkedIn', link: 'https://linkedin.com/in/yourusername' },
  { label: 'Twitter', link: 'https://twitter.com/yourusername' },
];

export function StaggeredMenuWrapper() {
  return (
    <StaggeredMenu
      position="right"
      colors={['#B19EEF', '#5227FF', '#3b82f6']}
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      logoUrl="/logo.svg"
      menuButtonColor="#fff"
      openMenuButtonColor="#000"
      accentColor="#3b82f6"
      isFixed={true}
      changeMenuColorOnOpen={true}
      closeOnClickAway={true}
    />
  );
}
