"use server";
import { projectSchema } from "@/schemas/projectSchema";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function createProject(prevState, formData) {
   const { userId } = await auth();

  const values = {
    name: formData.get("name") || "",
    description: formData.get("description") || "",
  };

  // Validate input
  const result = projectSchema.safeParse(values);
  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
      values,
    };
  }

  // Insert into DB, include userId
  await db.insert(projects).values({
    name: values.name,
    description: values.description,
    userId, 
  });
  redirect(`/dashboard`);
  return { success: true, errors: {}, values: { name: "", description: "" } };
  
}
