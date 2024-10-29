import { getPosts } from "@/app/utils";
import { Flex } from "@/once-ui/components";

import { ProjectCard } from "@/components";
import { ProjectCardProps } from "../ProjectCard";

interface ProjectsProps {
  range?: [number, number?];
  locale: string;
}

export function Projects({ range, locale }: ProjectsProps) {
  let allProjects: ProjectCardProps[] = [
    {
      title: "AlterBuddy",
      content:
        "The virtual online mental therapy consulation website & mobile application",
      description:
        "This is my one of the best project where i used MERN stack & little bit of micro services architecture",
      href: "https://alterbuddy.com/",
    },
    {
      title: "Om Shanti Welfare Trust",
      content:
        "Online trust website which have most of the followers across the maharashtra",
      description:
        "This MERN stack web application has smoother website with animations",
      href: "https://omshantitrust.org/",
    },
    {
      title: "Jaydeep Stone Art",
      content:
        "Jaydeep Stone Art portfolio website for advertise their business",
      description: "HTML & CSS Static Website",
      href: "https://jaydeepstoneart.co.in/",
    },
    {
      title: "Pooja Consultation",
      content:
        "Jaydeep Stone Art portfolio website for advertise their business",
      description: "HTML & CSS Static Website",
      href: "https://poojaconstruction.co.in/",
    },
    {
      title: "Rock Economics Pvt Ltd",
      content:
        "Agriculture & local products brand reseller's MERN stack website.",
      description:
        "Online Web application for selling onine agrucultural products",
      href: "https://rockeconomics.com",
    },
  ];

  return (
    <Flex fillWidth gap="l" marginBottom="40" paddingX="l" direction="column">
      {allProjects.map(({ ...props }, i) => (
        <ProjectCard {...props} key={i} />
      ))}
    </Flex>
  );
}
