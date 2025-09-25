'use server';
import { db } from "@/db";
import { auth } from "@clerk/nextjs/server";
import { projects } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createProject(formData) {
  const { userId } = await auth();

  const projectData = {
    name: formData.get("name"),
    description: formData.get("description"),
  };


  const [newProject] = await db.insert(projects)
    .values({ ...projectData, userId })
    .returning({ insertedId: projects.id });

  redirect(`/dashboard`);
}
