import React from 'react'
import { Button } from './ui/button'
import { Plus } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createProject } from "@/actions/createProject";
import SubmitButton from './submitProjectBtn';

function NewProjBtn() {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="cursor-pointer"> <Plus /> Create Project </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>New project</DialogTitle>
                        <DialogDescription>
                            Create a new project to get started
                        </DialogDescription>
                        <form className='flex flex-col gap-4 py-4' action={createProject}>
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    name='name'
                                    placeholder="Your Project name"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    placeholder="Write a brief description..."
                                    className="min-h-32"
                                    required
                                />
                            </div>
                            <SubmitButton/>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default NewProjBtn
