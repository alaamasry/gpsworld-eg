"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function TestSupabasePage() {
  const [status, setStatus] = useState("جاري اختبار الاتصال...");

  useEffect(() => {
    async function testConnection() {
      const { error } = await supabase
        .from("customer_accounts")
        .select("id")
        .limit(1);

      if (error) {
        setStatus(`❌ حصل خطأ: ${error.message}`);
      } else {
        setStatus("✅ الاتصال بقاعدة البيانات يعمل بنجاح");
      }
    }

    testConnection();
  }, []);

  return (
    <main
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-gray-50 p-6"
    >
      <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-gray-900">
          اختبار Supabase
        </h1>

        <p className="text-lg text-gray-700">
          {status}
        </p>
      </div>
    </main>
  );
}