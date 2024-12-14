"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { authClient } from "@/lib/auth-client";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function ResetPassword() {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState("");
	const router = useRouter();
	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setIsSubmitting(true);
		setError("");
		const res = await authClient.resetPassword({
			newPassword: password,
		});
		if (res.error) {
			toast.error(res.error.message);
		}
		setIsSubmitting(false);
		router.push("/sign-in");
	}
	return (
		<div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Reset password</CardTitle>
					<CardDescription>
						Introduce una nueva contraseña y confirma para restablecer tu contraseña
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit}>
						<div className="grid w-full items-center gap-2">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="email">Nueva contraseña</Label>
								<PasswordInput
									id="password"
									value={password}
									onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
									autoComplete="password"
									placeholder="Contraseña"
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="email">Confirma contraseña</Label>
								<PasswordInput
									id="password"
									value={confirmPassword}
									onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
									autoComplete="password"
									placeholder="Contraseña"
								/>
							</div>
						</div>
						{error && (
							<Alert variant="destructive" className="mt-4">
								<AlertCircle className="h-4 w-4" />
								<AlertDescription>{error}</AlertDescription>
							</Alert>
						)}
						<Button
							className="w-full mt-4"
							type="submit"
							disabled={isSubmitting}
						>
							{isSubmitting ? "Restableciendo..." : "Restablecer contraseña"}
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}