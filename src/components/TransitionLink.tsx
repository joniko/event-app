'use client';

import Link, { LinkProps } from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function handleTransition(
  href: string,
  router: ReturnType<typeof useRouter>,
) {
  const body = document.querySelector('body');

  body?.classList.add('page-transition');

  await sleep(500);
  router.push(href);
  await sleep(500);

  body?.classList.remove('page-transition');
};

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();

  return (
    <Link
      {...props}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        handleTransition(href, router)
      }}
    >
      {children}
    </Link>
  );
};
