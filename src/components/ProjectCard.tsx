"use client";

import { Flex, Heading, Text } from "@/once-ui/components";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import "./ProjectCard.module.css";

export interface ProjectCardProps {
  href: string;
  title: string;
  content: string;
  description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  title,
  content,
  description,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const t = useTranslations();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleControlClick = (index: number) => {
    if (index !== activeIndex) {
      setIsTransitioning(false);
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(true);
      }, 630);
    }
  };

  return (
    <Flex fillWidth direction="column">
      <Flex
        mobileDirection="column"
        fillWidth
        paddingTop="xs"
        alignItems="flex-end"
        paddingBottom="m"
        gap="l"
      >
        {title && (
          <Flex flex={5} direction="column">
            <Heading as="h5" wrap="balance" variant="heading-strong-s">
              {title}
            </Heading>
            <Link
              style={{
                color: "gray",
                textDecoration: "underline",
                marginTop: 5,
              }}
              href={href}
            >
              Show Website
            </Link>
          </Flex>
        )}
        {(description?.trim() || content?.trim()) && (
          <Flex flex={7} direction="column" gap="s">
            {description?.trim() && (
              <Text
                wrap="balance"
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {description}
              </Text>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
