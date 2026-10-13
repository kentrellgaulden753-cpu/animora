"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DatabaseTestPage() {
  const [message, setMessage] = useState("Testing database connection...");

  useEffect(() => {
    async function testConnection() {
      const { error } = await supabase
        .from("pets")
        .select("id")
        .limit(1);

      if (error) {
        setMessage(`Connection test returned: ${error.message}`);
        return;
      }

      setMessage("Connected to Supabase successfully!");
    }

    testConnection();
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f5ef] p-8 text-[#173b2c]">
      <h1 className="text-3xl font-bold">Animora Database Test</h1>
      <p className="mt-4">{message}</p>
    </main>
  );
}