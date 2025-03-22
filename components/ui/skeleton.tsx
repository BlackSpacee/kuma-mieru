'use client';

import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import { Card, CardBody, CardHeader, Skeleton } from '@heroui/react';

export const NavbarSkeleton = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <div className="flex justify-start items-center gap-2">
            <Skeleton className="flex rounded-full w-8 h-8" />
            <Skeleton className="h-3 w-24 rounded-lg" />
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <Skeleton className="flex rounded-full w-8 h-8" />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Skeleton className="h-10 w-[200px] rounded-lg" />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Skeleton className="h-10 w-[140px] rounded-lg" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Skeleton className="flex rounded-full w-8 h-8" />
        <Skeleton className="flex rounded-full w-8 h-8" />
        <Skeleton className="flex rounded-full w-8 h-8" />
      </NavbarContent>
    </HeroUINavbar>
  );
};

export const MonitorCardSkeleton = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-6 w-32 rounded-lg" />
          </div>
          <div className="flex flex-wrap gap-1">
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-24 rounded-full" />
          </div>
        </div>
        <div className="inline-flex items-center gap-2">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-4 w-16 rounded-lg" />
        </div>
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          <div className="flex gap-1">
            {Array.from({ length: 24 }).map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <Skeleton key={i} className="h-8 w-full rounded-sm" />
            ))}
          </div>
          <Skeleton className="h-[1px] w-full" />
          <Skeleton className="h-[120px] w-full rounded-lg" />
        </div>
      </CardBody>
    </Card>
  );
};
