"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import {
  HiOutlineArrowLeft,
  HiOutlineDotsVertical,
  HiOutlineSearch,
} from "react-icons/hi";

const GET_TEAM = graphql(`
  query getTeam($id: ID!) {
    team: getTeam(id: $id) {
      createdAt
      createdBy
      engagementLevel
      goals
      id
      invitations {
        email
        invited
        message
      }
      members {
        items {
          userId
          user {
            avatar
            email
            sub
            firstName
            lastName
          }
        }
      }
      name
      performance
      sentiment
      syncHistory
      synchrony
      teamInSync
      updatedAt
    }
  }
`);

export default function TeamPage({ params }: { params: { id: string } }) {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["team", params.id],
    queryFn: async () => {
      return await gql.request(GET_TEAM, {
        id: String(params.id),
      });
    },
  });

  return (
    <div className="py-6">
      <div className="flex gap-4 items-center">
        <Link href="/teams">
          <Button variant="outline" size="icon" className="">
            <HiOutlineArrowLeft />
          </Button>
        </Link>
        <p className="text-xl font-medium">{data?.team?.name}</p>
      </div>
      <div className="py-5">
        <div className="flex justify-between items-center">
          <h2 className="font-light">
            Members ({data?.team?.members?.items?.length || 0})
          </h2>
          <div className="flex flex-row gap-x-3">
            <div className="relative">
              <Input
                placeholder="Search"
                className="h-full border w-40 px-6 rounded-full"
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2">
                <HiOutlineSearch />
              </div>
            </div>
            <Button onClick={() => setOpen(true)}>
              <AiOutlinePlus />
              <span className="hidden md:block">Add Members</span>
            </Button>
          </div>
        </div>
        <div className="py-4">
          {(status === "loading" || isLoading) && (
            <div className="space-y-2">
              {Array.from(Array(8).keys()).map((i) => (
                <div
                  key={i}
                  className="h-12 animate-pulse bg-tertiary rounded"
                ></div>
              ))}
            </div>
          )}
          {!isLoading && (
            <Tabs defaultValue="members">
              <TabsList>
                <TabsTrigger value="members">Members</TabsTrigger>
                <TabsTrigger value="invitations">Invitations</TabsTrigger>
              </TabsList>
              <TabsContent value="members">
                {!isLoading &&
                  Number(data?.team?.members?.items?.length) > 0 && (
                    <MemberList
                      members={(data?.team?.members?.items as any) || []}
                    />
                  )}
              </TabsContent>
              <TabsContent value="invitations">
                {!isLoading && Number(data?.team?.invitations?.length) > 0 && (
                  <InvitationsList
                    invitations={(data?.team?.invitations as any) || []}
                  />
                )}
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
      <AddMembers
        invitations={(data?.team?.invitations as any) || []}
        open={open}
        setIsOpen={setOpen}
        teamId={params.id}
      />
    </div>
  );
}

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { graphql } from "@/services/gql";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { gql } from "@/services/clients/graphql.client";
import { Badge } from "@/components/ui/badge";
import AddMembers, { IInvitation } from "@/components/modals/AddMembers.modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Members } from "@/services/gql/graphql";

function MemberList({ members }: { members: Members[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="pt-4 pb-3">Email</TableHead>
          <TableHead className="pt-4 pb-3">Position</TableHead>
          <TableHead className="pt-4 pb-3">Status</TableHead>
          <TableHead className="pt-4 pb-3 text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members?.map((member) => (
          <TableRow key={member.user?.email}>
            <TableCell className="pt-4 pb-3">{`${member.user?.firstName} ${member?.user?.lastName}`}</TableCell>
            <TableCell className="pt-4 pb-3">{member.user?.email}</TableCell>
            <TableCell className="pt-4 pb-3">Pending</TableCell>
            <TableCell className="pt-4 pb-3 text-right">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost">
                    <HiOutlineDotsVertical />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="right"
                  sideOffset={2}
                  className="bg-secondary right-0"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-tertiary w-full justify-between"
                  >
                    Remove
                  </Button>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function InvitationsList({ invitations }: { invitations: IInvitation[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="pt-4 pb-3">Email</TableHead>
          <TableHead className="pt-4 pb-3">Position</TableHead>
          <TableHead className="pt-4 pb-3">Status</TableHead>
          <TableHead className="pt-4 pb-3 text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invitations?.map((invitation) => (
          <TableRow key={invitation.email}>
            <TableCell className="pt-4 pb-3">{invitation.email}</TableCell>
            <TableCell className="pt-4 pb-3">Pending</TableCell>
            <TableCell className="pt-4 pb-3">
              <Badge>Invitation Pending</Badge>
            </TableCell>
            <TableCell className="pt-4 pb-3 text-right">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost">
                    <HiOutlineDotsVertical />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="right"
                  sideOffset={2}
                  className="bg-secondary right-0"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-tertiary w-full justify-between"
                  >
                    Remove
                  </Button>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
