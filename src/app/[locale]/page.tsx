import React from "react";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  SmartImage,
} from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes, renderContent } from "@/app/resources";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Work from "./work/page";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();
  const { home } = renderContent(t);
  const title = home.title;
  const description = home.description;
  const ogImage =
    "https://media.licdn.com/dms/image/v2/C4D03AQEqzbkmwndRgA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667975187828?e=1735776000&v=beta&t=fJVWS7cOxl7DFK5rescNg6hSUqwUdLFIWwofd9rsKNU";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/${locale}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const { home, about, person, newsletter } = renderContent(t);
  return (
    <Flex
      maxWidth="m"
      fillWidth
      gap="xl"
      direction="column"
      alignItems="center"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `https://media.licdn.com/dms/image/v2/C4D03AQEqzbkmwndRgA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667975187828?e=1735776000&v=beta&t=fJVWS7cOxl7DFK5rescNg6hSUqwUdLFIWwofd9rsKNU`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `https://media.licdn.com/dms/image/v2/C4D03AQEqzbkmwndRgA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667975187828?e=1735776000&v=beta&t=fJVWS7cOxl7DFK5rescNg6hSUqwUdLFIWwofd9rsKNU`,
              },
            },
          }),
        }}
      />
      <Flex fillWidth direction="column" paddingY="l" gap="m">
        <Flex direction="column" fillWidth maxWidth="s" gap="m">
          <RevealFx translateY="4">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2}>
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="body-default-l"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4}>
            <Button
              data-border="rounded"
              href={`/${locale}/about`}
              variant="tertiary"
              suffixIcon="chevronRight"
              size="m"
            >
              <Flex gap="8" alignItems="center">
                {t("about.title")}
              </Flex>
            </Button>
          </RevealFx>
        </Flex>
      </Flex>

      <Heading
        as="h2"
        id={about.work.title}
        variant="display-strong-s"
        align="left"
        style={{ width: "100%" }}
      >
        Freelance Experience
      </Heading>
      <Projects range={[1]} locale={locale} />

      {about.work.display && (
        <>
          <Heading
            as="h2"
            id={about.work.title}
            variant="display-strong-s"
            align="left"
            style={{ width: "100%" }}
          >
            {about.work.title}
          </Heading>
          <Flex direction="column" fillWidth gap="l" marginBottom="40">
            {about.work.experiences.map((experience, index) => (
              <Flex
                key={`${experience.company}-${experience.role}-${index}`}
                fillWidth
                direction="column"
              >
                <Flex
                  fillWidth
                  justifyContent="space-between"
                  alignItems="flex-end"
                  marginBottom="4"
                >
                  <Text id={experience.company} variant="heading-strong-l">
                    {experience.company}
                  </Text>
                  <Text
                    variant="heading-default-xs"
                    onBackground="neutral-weak"
                  >
                    {experience.timeframe}
                  </Text>
                </Flex>
                <Text
                  variant="body-default-s"
                  onBackground="brand-weak"
                  marginBottom="m"
                >
                  {experience.role}
                </Text>
                <Flex as="ul" direction="column" gap="16">
                  {experience.achievements.map(
                    (achievement: string, index: any) => (
                      <Text
                        as="li"
                        variant="body-default-m"
                        key={`${experience.company}-${index}`}
                      >
                        {achievement}
                      </Text>
                    )
                  )}
                </Flex>
                {experience.images.length > 0 && (
                  <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                    {experience.images.map((image, index) => (
                      <Flex
                        key={index}
                        border="neutral-medium"
                        borderStyle="solid-1"
                        radius="m"
                        minWidth={image.width}
                        height={image.height}
                      >
                        <SmartImage
                          enlarge
                          radius="m"
                          sizes={image.width.toString()}
                          alt={image.alt}
                          src={image.src}
                        />
                      </Flex>
                    ))}
                  </Flex>
                )}
              </Flex>
            ))}
          </Flex>
        </>
      )}
    </Flex>
  );
}
