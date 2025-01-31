"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true)
        setError("")

        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
            router.push("/adminA");
            setLoading(false)
        } else {
            setError("Invalid username or password.");
            setLoading(false)
        }
    };

    return (
        <>
            <Navbar isHome={false} />

            <div className="poppins font-[500] text-[16px] flex flex-col gap-3 items-center justify-center m-10 p-2">
                <h1>Login</h1>
                {error && <p className="text-red-500">{error}</p>}
                {loading && <p className="text-gray-400">Loading . . .</p> }
                <form className="flex flex-col items-center justify-center gap-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="border-[2px] rounded-lg border-black px-4 py-2"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border-[2px] rounded-lg border-black px-4 py-2"
                    />
                    <button className="border-[2px] rounded-lg border-black px-24 py-2 mt-2" type="submit">Login</button>
                </form>
            </div>
        </>
    );
}
