import * as React from "react";

import { router } from "expo-router";

import { MobileScreen, ProductCard, SectionHeader } from "@/components/mobile/developer-ui";
import { products } from "@/data/developer";

function push(path: string) {
  (router.push as (href: string) => void)(path);
}

export default function DiscoverScreen() {
  return (
    <MobileScreen
      eyebrow="Discover"
      title="Aether Products"
      subtitle="Explore official products, platform capabilities, and publication workflows."
    >
      <SectionHeader title="Product Catalog" />
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onPress={() =>
            push(product.id === "guilderia" ? "/guilderia-developer" : `/product-detail?id=${product.id}`)
          }
        />
      ))}
    </MobileScreen>
  );
}
