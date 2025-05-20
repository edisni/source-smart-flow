
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Trainings: React.FC = () => {
  // Mock data for trainings
  const upcomingTrainings = [
    {
      id: 1,
      title: "Negotiation Skills Masterclass",
      date: "June 10, 2025",
      duration: "2 hours",
      instructor: "Sarah Johnson",
      department: "Procurement",
      enrollmentStatus: "Open",
      description: "Learn advanced negotiation techniques for procurement professionals."
    },
    {
      id: 2,
      title: "Supplier Relationship Management",
      date: "June 15, 2025",
      duration: "3 hours",
      instructor: "Michael Chang",
      department: "Vendor Management",
      enrollmentStatus: "Limited Seats",
      description: "Develop strategies for maintaining beneficial relationships with key suppliers."
    },
    {
      id: 3,
      title: "Cost Analysis Workshop",
      date: "June 22, 2025",
      duration: "4 hours",
      instructor: "Rebecca Torres",
      department: "Finance",
      enrollmentStatus: "Open",
      description: "Learn how to perform detailed cost analyses to identify savings opportunities."
    }
  ];

  const inProgressTrainings = [
    {
      id: 4,
      title: "Procurement Analytics Certification",
      progress: 65,
      completionDate: "July 5, 2025",
      department: "Data Analytics",
      description: "Master the tools and techniques for data-driven procurement decision making."
    },
    {
      id: 5,
      title: "Sustainable Procurement Practices",
      progress: 30,
      completionDate: "August 12, 2025",
      department: "ESG",
      description: "Learn how to integrate sustainability into your procurement strategy."
    }
  ];

  const completedTrainings = [
    {
      id: 6,
      title: "Contract Management Fundamentals",
      completionDate: "May 10, 2025",
      score: "92%",
      department: "Legal",
      certificate: true,
      description: "Essential skills for managing procurement contracts effectively."
    },
    {
      id: 7,
      title: "Strategic Sourcing",
      completionDate: "April 22, 2025",
      score: "88%",
      department: "Procurement",
      certificate: true,
      description: "Advanced sourcing strategies to optimize costs and value."
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Trainings</h1>
        <Button>Find Training</Button>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingTrainings.map(training => (
              <Card key={training.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{training.title}</CardTitle>
                    <Badge variant={training.enrollmentStatus === "Open" ? "default" : "secondary"}>
                      {training.enrollmentStatus}
                    </Badge>
                  </div>
                  <CardDescription>{training.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Date:</span>
                      <span className="text-sm font-medium">{training.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Duration:</span>
                      <span className="text-sm font-medium">{training.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Instructor:</span>
                      <span className="text-sm font-medium">{training.instructor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Department:</span>
                      <span className="text-sm font-medium">{training.department}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Enroll Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="in-progress" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inProgressTrainings.map(training => (
              <Card key={training.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{training.title}</CardTitle>
                    <Badge variant="outline">{training.progress}%</Badge>
                  </div>
                  <CardDescription>{training.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-muted-foreground">Progress:</span>
                        <span className="text-sm font-medium">{training.progress}%</span>
                      </div>
                      <Progress value={training.progress} />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Expected Completion:</span>
                      <span className="text-sm font-medium">{training.completionDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Department:</span>
                      <span className="text-sm font-medium">{training.department}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Continue Training</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedTrainings.map(training => (
              <Card key={training.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{training.title}</CardTitle>
                    {training.certificate && (
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        Certified
                      </Badge>
                    )}
                  </div>
                  <CardDescription>{training.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Completion Date:</span>
                      <span className="text-sm font-medium">{training.completionDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Score:</span>
                      <span className="text-sm font-medium">{training.score}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Department:</span>
                      <span className="text-sm font-medium">{training.department}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" className="flex-1">View Details</Button>
                  {training.certificate && (
                    <Button className="flex-1">Download Certificate</Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Trainings;
