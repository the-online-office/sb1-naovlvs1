import React from 'react';
import { Hero } from '../components/Hero';
import { TrustBadges } from '../components/TrustBadges';
import { PopularPackages } from '../components/sections/PopularPackages';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { PackagesBanner } from '../components/sections/PackagesBanner';
import { CategorySection } from '../components/sections/CategorySection';
import { PostJobSection } from '../components/sections/PostJobSection';
import { RecentJobs } from '../components/sections/RecentJobs';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <PopularPackages />
      <FeaturesSection />
      <PackagesBanner />
      <CategorySection />
      <PostJobSection />
      <RecentJobs />
      <Footer />
    </>
  );
}