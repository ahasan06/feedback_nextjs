import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const ProjectsList = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return <p className="text-center text-gray-500 mt-8">No projects available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {projects.map((project) => (
        <Card 
          key={project.id} 
          className="bg-white text-black shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>

          <CardFooter>
            <Link href={`/projects/${project.id}`} passHref>
              <Button asChild>
                <span>View Project</span>
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default ProjectsList;
