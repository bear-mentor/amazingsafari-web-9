import { Form, Link, redirect } from "react-router";
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
import type { LoginResponse } from "~/modules/user/type";

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
          <Form method="POST" className="space-y-5">
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

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();

  const loginBody = {
    email: formData.get("email")?.toString(),
    password: formData.get("password")?.toString(),
  };

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginBody),
    }
  );

  const loginResponse: LoginResponse = await response.text();
  console.log(loginResponse);

  return redirect("/dashboard");
}
