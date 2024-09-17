import UserAuthForm from "@/components/user-auth-form";

export default function Resister() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center">
            <UserAuthForm isLoginPage={false} />
        </div>
    )
}