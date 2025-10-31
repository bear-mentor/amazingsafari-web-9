import { Form, Link } from "react-router";
import type { Route } from "./+types/register";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Register" }];
}

export default function RegisterRoute({}: Route.ComponentProps) {
  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="text-2xl">Create New Account</CardTitle>
          <CardDescription>
            Have account?{" "}
            <Link className="text-primary-foreground font-bold" to="/login">
              Log in here
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                name="username"
                placeholder="bear"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="bear@bear.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                id="full-name"
                type="text"
                name="fullName"
                placeholder="Bear Mentor"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" name="password" />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
