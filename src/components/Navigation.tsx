// components/Navigation.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronLeft } from "lucide-react";
import React from "react";

type BreadcrumbItem = {
  href?: string;
  label: string;
};

interface NavigationProps {
  items: BreadcrumbItem[];
  backUrl?: string;
  backLabel?: string;
}

export function Navigation({ items, backUrl, backLabel }: NavigationProps) {
  return (
    <div className="space-y-4 mb-8">
      {backUrl && (
        <Button asChild variant="outline" size="sm" className="mb-4">
          <Link href={backUrl}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            {backLabel || "Back"}
          </Link>
        </Button>
      )}

      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.href ? (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                ) : (
                  <BreadcrumbLink>{item.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < items.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
