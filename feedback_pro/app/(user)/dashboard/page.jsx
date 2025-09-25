import React from 'react'
import NewProjBtn from '@/components/NewProjBtn'
import { db } from '@/db'
import { eq } from "drizzle-orm";
import { projects } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import ProjectList from './projectList';
import Image from "next/image";

export default async function Page() {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }

  const userProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.userId, userId));

  return (
    <div className=" mx-auto px-6 py-5 min-h-screen">
      {/* Header Section */}
      <div className="flex items-center justify-between bg-gradient-to-r from-indigo-50 to-white p-6 rounded-2xl shadow-sm mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Collect Meaningful Feedback
          </h1>
          <p className="text-gray-600 mt-2 max-w-xl">
            Create projects, share them with others, and gather valuable insights. 
            Turn feedback into action and improve continuously.
          </p>
          <div className="mt-4">
            <NewProjBtn />
          </div>
        </div>
        <div className="hidden sm:block">
          <Image
            src="/feedback-illustration.svg" // 👉 put a relevant illustration inside /public
            alt="Feedback Illustration"
            width={180}
            height={180}
            className="opacity-95"
          />
        </div>
      </div>

      {/* Project List */}
      <ProjectList projects={userProjects} />
    </div>
  )
}
