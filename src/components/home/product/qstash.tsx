"use client";

import React from "react";

import { Product } from "@/utils/type";

import { useSegment } from "@/hooks/use-segment";

import Button from "@/components/button";
import IconQStash from "@/components/icon-qstash";

import {
  ProductBox,
  ProductFeature,
  ProductFeatureItem,
  ProductTitle,
} from "./comp";

export default function ServerlessQStash() {
  const { track } = useSegment();
  return (
    <ProductBox
      product={Product.QSTASH}
      className="mdd:col-span-2 bg-purple-200/5"
    >
      <header>
        <IconQStash className="mb-6" width={54} />
        <ProductTitle>QStash</ProductTitle>
      </header>

      <ProductFeature product={Product.QSTASH}>
        <ProductFeatureItem>
          Serverless, HTTP based messaging
        </ProductFeatureItem>
        <ProductFeatureItem>Scheduling via CRON</ProductFeatureItem>
        <ProductFeatureItem>
          At-least-once delivery with auto retries
        </ProductFeatureItem>
      </ProductFeature>

      <div className="mt-auto grid gap-4">
        <Button
          href="https://github.com/upstash/examples/tree/main/examples"
          className="hover:bg-purple-100 hover:text-purple-950"
          type="button"
          onClick={() => {
            track("button.examples.qstash");
          }}
        >
          View examples
        </Button>
        <Button
          href="/docs/qstash"
          className="bg-purple-100 text-purple-950 hover:bg-purple-100 hover:text-purple-950"
          type="button"
          onClick={() => {
            track("button.docs.qstash");
          }}
        >
          Read the docs
        </Button>
      </div>
    </ProductBox>
  );
}
