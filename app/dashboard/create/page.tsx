//import { prisma } from "@/app/utils/db";
import { handleSubmission } from "@/app/actions";
import SubmitButton from "@/components/general/SubmitButton";
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
          <form className="flex flex-col gap-4" action={handleSubmission}>
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input required type="text" placeholder="Enter the title.." name="title"/>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea required placeholder="content.." name="content"/>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input type="url" placeholder="Image URL.." required name="url"/>
            </div>
            <SubmitButton/>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreateBlogRoute;
