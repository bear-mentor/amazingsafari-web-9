import { Form, Link } from "react-router";
import type { Route } from "./+types/login";
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
  return [{ title: "Log In" }];
}

export default function LoginRoute({}: Route.ComponentProps) {
  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="text-2xl">Continue to your account</CardTitle>
          <CardDescription>
            No account?{" "}
            <Link className="text-primary-foreground font-bold" to="/register">
              Register here
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Form className="space-y-5">
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
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" name="password" />
            </div>
            <Button type="submit" className="w-full">
              Log In
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
