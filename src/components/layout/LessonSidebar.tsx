"use client";
import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useParams, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { graphql } from "@/services/gql";
import { gql } from "@/services/clients/graphql.client";
import LessonSidebarLoader from "../loaders/LessonSidebarLoader";

export const LIST_COURSE_MODULES = graphql(`
  query getCourseModules($id: ID!) {
    course: getCourse(id: $id) {
      id
      title
      modules {
        id
        title
        chapters {
          id
          title
          moduleId
        }
      }
      id
    }
  }
`);

export default function LessonSidebar() {
  const params = useParams<{ courseId: string; id: string }>();
  const pathname = usePathname();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["course-modules", params?.courseId],
    queryFn: async () => {
      return await gql.request(LIST_COURSE_MODULES, {
        id: String(params?.courseId),
      });
    },
  });

  return (
    <>
      <div className="w-80"></div>
      <div className="w-80 py-4 border-r bg-muted/40 fixed top-16 bottom-0 left-0 space-y-1 px-4">
        {isLoading && <LessonSidebarLoader />}
        {!isLoading && (
          <Accordion
            type="multiple"
            defaultValue={[
              String(
                data?.course?.modules?.filter((i) =>
                  i.chapters?.map((i) => i.id)?.includes(String(params?.id)),
                )?.[0]?.id,
              ),
            ]}
            className="space-y-1.5"
          >
            {data?.course?.modules?.map((item) => (
              <AccordionItem
                className="!border-b-0"
                key={item.id}
                value={item.id}
                // defaultChecked={
                //   item.exact
                //     ? pathname === item.group
                //     : pathname?.includes(item.group)
                // }
              >
                <AccordionTrigger
                  className={`text-foreground !py-1.5 text-left rounded-lg pr-2 ${item.chapters?.map((i) => i.id)?.includes(String(params?.id)) ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
                >
                  <p className={`px-3 py-2`}>{item.title}</p>
                </AccordionTrigger>
                <AccordionContent className="py-2">
                  {item?.chapters?.map((i) => (
                    <Link
                      key={i.id}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-all text-foreground ${pathname?.includes(i.id) ? "text-violet-400 font-bold" : ""}`}
                      href={`/lessons/${params?.courseId}/${i.id}`}
                    >
                      {i.title}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </>
  );
}
