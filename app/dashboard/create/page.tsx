//import { prisma } from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function CreateBlogRoute() {

  return (
    <div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create Post ✍🏻</CardTitle>
          <CardDescription>
            Create A New Post To Share With The World 🌐
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input required type="text" placeholder="Enter the title.." />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea required placeholder="content.." />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input type="url" placeholder="Image URL.." required />
            </div>
            <Button>Create Post</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreateBlogRoute;
