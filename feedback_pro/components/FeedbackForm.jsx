'use client';

import React from 'react';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createFeedback } from "@/actions/createFeedback";
import SubmitButton from './submitProjectBtn';

export const FeedbackForm = ({ projectId }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="cursor-pointer">
            <Plus /> Submit Feedback
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Feedback</DialogTitle>
            <DialogDescription>
              Share your thoughts about this project
            </DialogDescription>
          </DialogHeader>

          <form className="flex flex-col gap-4 py-4" action={createFeedback}>
            <input type="hidden" name="projectId" value={projectId} />

            <div className="space-y-2">
              <Label htmlFor="userName">Name</Label>
              <Input
                id="userName"
                name="userName"
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="userEmail">Email</Label>
              <Input
                id="userEmail"
                name="userEmail"
                placeholder="you@example.com"
                type="email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Write your feedback..."
                className="min-h-24 max-w-[450px] text-wrap"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rating">Rating</Label>
              <select
                id="rating"
                name="rating"
                className="border rounded-md px-3 py-2 w-full"
                defaultValue="5"
                required
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <SubmitButton />
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
