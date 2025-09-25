'use client';

import React, { useState } from 'react';
import axios from 'axios';
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

export const FeedbackForm = ({ projectId }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [rating, setRating] = useState(5);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('/api/feedback', {
        projectId,
        userName,
        userEmail,
        message,
        rating,
      });

      // reset form
      setMessage('');
      setUserName('');
      setUserEmail('');
      setRating(5);

      // close dialog
      setOpen(false);

    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || "Failed to submit feedback");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">
          <Plus /> Submit Feedback
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Feedback</DialogTitle>
          <DialogDescription>
            Share your thoughts about this project
          </DialogDescription>
        </DialogHeader>

        <form className="flex flex-col gap-4 py-4" onSubmit={handleSubmit}>
          <input type="hidden" value={projectId} />

          <div className="space-y-2">
            <Label htmlFor="userName">Name</Label>
            <Input
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="userEmail">Email</Label>
            <Input
              id="userEmail"
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your feedback here..."
              className="min-h-24 max-w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Rating</Label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <Button
                  key={num}
                  type="button"
                  size="sm"
                  variant={rating === num ? "default" : "outline"}
                  onClick={() => setRating(num)}
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                >
                  {num}
                </Button>
              ))}
            </div>
          </div>

          <Button type="submit" disabled={loading} className="cursor-pointer mt-2">
            {loading ? "Submitting..." : "Submit Feedback"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
