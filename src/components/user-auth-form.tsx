"use client";

import Link from "next/link"
import { signIn } from 'next-auth/react';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export type Props = {
    isLoginPage: boolean
}

export default function UserAuthForm({ isLoginPage }: Props) {
  const [ isGoogleAuthLoading, setIsGoogleAuthLoading ] = useState<boolean>(false);
  const [ isGitHubAuthLoading, setIsGitHubAuthLoading ] = useState<boolean>(false);

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">
          {isLoginPage ? "ログイン" : "新規登録"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              id="email"
              type="email"
              placeholder="post-writer@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">パスワード</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
              パスワードを忘れた方
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            {isLoginPage ? "Log in" : "Resister"}
          </Button>
          {isGoogleAuthLoading ? 
            (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button variant="outline" className="w-full" onClick={() => {
                setIsGoogleAuthLoading(true);
                signIn("google");
              }}>
                <FaGoogle className="mr-2 h-4 w-4"/> Google
              </Button>
            )
          }
          {isGitHubAuthLoading ? 
            (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button variant="outline" className="w-full" onClick={() => {
                setIsGitHubAuthLoading(true);
                signIn("github");
              }}>
                <FaGithub className="mr-2 h-4 w-4"/> GitHub
              </Button>
            )
          }
        </div>
        <div className="mt-4 text-center text-sm flex justify-end">
          {isLoginPage ? (
            <Link href="/resister" className="underline">
                アカウントをお持ちでない方
            </Link>
          ) : (
            <Link href="/login" className="underline">
                ログインはこちら
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}