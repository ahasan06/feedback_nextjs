import React from "react";
import Link from "next/link";
import { ChevronLeft, MessageSquare, Star, Users } from "lucide-react";
import Table from "@/components/Table";
import { FeedbackForm } from "@/components/FeedbackForm";
import { calculateFeedbackStats } from "@/utils/feedback";
import axios from "axios";

const ProjectPage = async ({ params }) => {
   const { projectId } = await params; 
  let project;
   const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const res = await axios.get(`${baseURL}/api/feedback`, {
      params: { projectId },
    });
    project = res.data;
  } catch (error) {
    const message = error.response?.data?.error || "Something went wrong";
    return <div className="flex min-h-screen items-center justify-center">{message}</div>;
  }

  const stats = calculateFeedbackStats(project.feedbacks);
  const hasFeedbacks = project.feedbacks.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      <div className="mb-6 flex items-center">
        <Link href="/dashboard" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Dashboard
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Panel */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
            <p className="text-gray-600">{project.description}</p>
          </div>

          {hasFeedbacks && (
            <>
              <div className="flex items-center justify-between bg-white border rounded-lg p-4">
                <Users className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-700 text-sm">
                  Total Feedback: <span className="font-semibold">{stats.feedbackCount}</span>
                </p>
              </div>
              <div className="flex items-center justify-between bg-white border rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-500" />
                <p className="text-gray-700 text-sm">
                  Avg Rating: <span className="font-semibold">{stats.averageRating.toFixed(1)}</span>
                </p>
              </div>
            </>
          )}

          <div className="bg-white border rounded-lg">
            <div className="p-4 border-b flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <h2 className="text-base font-semibold text-gray-900">Submit Feedback</h2>
            </div>
            <div className="p-4">
              <FeedbackForm projectId={project.id} />
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:col-span-2">
          <div className="bg-white border rounded-lg">
            <div className="p-4 border-b">
              <h2 className="text-base font-semibold text-gray-900">Recent Feedback</h2>
              <p className="text-sm text-gray-600">
                {hasFeedbacks ? `${stats.feedbackCount} feedback(s) received` : "No feedback yet"}
              </p>
            </div>
            <div className="p-4">
              {hasFeedbacks ? (
                <Table data={project.feedbacks} />
              ) : (
                <p className="text-center text-gray-500 text-sm">Be the first to share your feedback.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
