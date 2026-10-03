import { render, screen, fireEvent, within } from '@testing-library/react';
import Portfolio from './Portfolio';
import { projects } from './data/projects';
import { linkedInUrl } from './data/profile';

test('uses the canonical LinkedIn URL and safe new-tab external links', () => {
  render(<Portfolio />);
  const linkedin = [...document.querySelectorAll('a[href*="linkedin.com"]')];
  expect(linkedin).toHaveLength(3);
  linkedin.forEach(link => expect(link).toHaveAttribute('href', linkedInUrl));
  document.querySelectorAll('a[href^="https://"]').forEach(link => {
    expect(link).toHaveAttribute('target', '_blank');
    expect(link.rel.split(' ')).toEqual(expect.arrayContaining(['noopener', 'noreferrer']));
  });
});

test('does not start viewport animations when reduced motion is requested', () => {
  const originalMatchMedia = window.matchMedia;
  const originalObserver = window.IntersectionObserver;
  window.matchMedia = jest.fn(() => ({ matches: true }));
  window.IntersectionObserver = jest.fn();
  try {
    render(<Portfolio />);
    expect(window.matchMedia).toHaveBeenCalledWith('(prefers-reduced-motion: reduce)');
    expect(window.IntersectionObserver).not.toHaveBeenCalled();
    expect(screen.getByRole('heading', {name: /Hi! I’m/})).toBeInTheDocument();
    expect(document.querySelectorAll('.project-card')).toHaveLength(projects.length);
  } finally {
    window.matchMedia = originalMatchMedia;
    window.IntersectionObserver = originalObserver;
  }
});

test('shows every distinct public project and all section destinations', () => {
  render(<Portfolio />);
  expect(document.querySelectorAll('.project-card')).toHaveLength(18);
  for (const id of ['about', 'skills', 'projects', 'contact']) expect(document.getElementById(id)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Explore my work ↗' })).toHaveAttribute('href', '#projects');
  expect(within(document.getElementById('projects')).getAllByRole('link', {name: 'Source code ↗', exact: true})).toHaveLength(projects.length);
  const links = within(document.getElementById('projects')).getAllByRole('link', {name: 'Source code ↗', exact: true});
  projects.forEach((project, index) => expect(links[index]).toHaveAttribute('href', project.github));
});

test.each(['about', 'skills', 'projects', 'contact'])('preserves the /%s route', page => {
  window.history.pushState({}, '', `/${page}`);
  render(<Portfolio />);
  expect(document.getElementById(page)).toBeInTheDocument();
  expect(document.getElementById('home')).not.toBeInTheDocument();
  window.history.pushState({}, '', '/');
});

test('lands on the section when a separate page links to a homepage fragment', () => {
  const originalScroll = Element.prototype.scrollIntoView;
  const scrolledTargets = [];
  const scroll = jest.fn(function () { scrolledTargets.push(this); });
  Element.prototype.scrollIntoView = scroll;
  window.history.pushState({}, '', '/#contact');
  try {
    render(<Portfolio />);
    expect(scroll).toHaveBeenCalledWith({ behavior: 'instant', block: 'start' });
    expect(scrolledTargets[0]).toBe(document.getElementById('contact'));
  } finally {
    Element.prototype.scrollIntoView = originalScroll;
    window.history.pushState({}, '', '/');
  }
});

test('filters projects and restores the complete catalogue', () => {
  render(<Portfolio />);
  fireEvent.click(screen.getByRole('button', {name: 'Practice', exact: true}));
  expect(screen.getByRole('status')).toHaveTextContent('4 projects · Practice');
  expect(document.querySelectorAll('.project-card')).toHaveLength(4);
  expect(screen.queryByRole('heading', {name: 'Codeles POS'})).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', {name: 'All', exact: true}));
  expect(document.querySelectorAll('.project-card')).toHaveLength(projects.length);
});

test('mobile navigation state and verified contact form are accessible', () => {
  render(<Portfolio />);
  const menu = screen.getByRole('button', {name: 'Menu ☰'});
  fireEvent.click(menu);
  expect(menu).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(within(screen.getByRole('navigation')).getByRole('link', {name: 'Contact', exact: true}));
  expect(menu).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByLabelText('Email address')).toHaveAttribute('type', 'email');
  expect(screen.getByLabelText('Your name')).toBeRequired();
  expect(document.querySelector('form')).toHaveAttribute('action', 'https://formspree.io/f/xblorkza');
});
