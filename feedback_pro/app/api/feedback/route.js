import { db } from "@/db";
import { feedbacks } from "@/db/schema";
import { projects } from "@/db/schema"; 
import { eq } from "drizzle-orm";
export async function POST(req) {
    try {
        const data = await req.json();
        const { projectId, userName, userEmail, message, rating } = data;


        if (!projectId || !userName || !userEmail || !message || !rating) {
            return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
        }

        if (isNaN(Number(projectId)) || isNaN(Number(rating))) {
            return new Response(JSON.stringify({ error: "Invalid projectId or rating" }), { status: 400 });
        }

        // Insert feedback into DB
        const [newFeedback] = await db
            .insert(feedbacks)
            .values({
                projectId: Number(projectId),
                userName,
                userEmail,
                message,
                rating: Number(rating),
            })
            .returning({ insertedId: feedbacks.id });

        return new Response(JSON.stringify(newFeedback), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
    }
}



export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("projectId");

  if (!projectId) {
    return new Response(JSON.stringify({ error: "Project ID is required" }), { status: 400 });
  }

  const projectIdInt = parseInt(projectId);
  if (isNaN(projectIdInt)) {
    return new Response(JSON.stringify({ error: "Invalid Project ID" }), { status: 400 });
  }

  const projectList = await db.query.projects.findMany({
    where: eq(projects.id, projectIdInt),
    with: { feedbacks: true },
  });

  const project = projectList[0];

  if (!project) {
    return new Response(JSON.stringify({ error: "Project not found" }), { status: 404 });
  }

  return new Response(JSON.stringify(project), {
    headers: { "Content-Type": "application/json" },
  });
}