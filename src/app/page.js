"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Component() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const formHandle = (e) => {
    e.preventDefault();
    console.log(email, "email", password, "password");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 w-full">
      <div className="flex items-center justify-center w-full h-full">
        <Carousel className="w-full h-full">
          <CarouselContent className="w-full h-full">
            {["/background.jpg", "/background.jpg", "/background.jpg"].map(
              (src, index) => (
                <CarouselItem key={index} className="w-full h-full">
                  <div className="relative w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <Image
                      src={src}
                      layout="fill"
                      alt={`Earn money online ${index + 1}`}
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
      <div className="flex items-center justify-center p-6 md:p-10">
        <Card
          className={`w-full max-w-md transition-opacity duration-1000 ease-in-out ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email and password to access your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={formHandle} className="flex gap-4 flex-col">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="transition-all duration-300 ease-in-out focus:ring-2 focus:ring-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  className="transition-all duration-300 ease-in-out focus:ring-2 focus:ring-primary"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  Login
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
