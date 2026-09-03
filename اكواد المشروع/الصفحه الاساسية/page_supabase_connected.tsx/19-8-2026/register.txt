"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    setMessage("");

    if (!fullName || !phone || !email || !password) {
      setMessage("من فضلك املأ جميع البيانات.");
      return;
    }

    if (password.length < 6) {
      setMessage("كلمة المرور يجب أن تكون 6 أحرف أو أرقام على الأقل.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    if (!data.user) {
      setMessage("حدث خطأ أثناء إنشاء الحساب.");
      setLoading(false);
      return;
    }

    const { error: profileError } = await supabase
      .from("customer_accounts")
      .insert({
        id: data.user.id,
        full_name: fullName,
        phone,
        email,
        status: "pending",
      });

    if (profileError) {
      setMessage(profileError.message);
      setLoading(false);
      return;
    }

    setMessage(
      "تم إنشاء حسابك بنجاح. حسابك الآن قيد المراجعة، وسيتم تفعيله بعد موافقة الإدارة."
    );

    setFullName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setLoading(false);
  }

  return (
    <main
      className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-10"
      dir="rtl"
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-7">

        <h1 className="text-3xl font-bold text-blue-900 text-center mb-3">
          إنشاء حساب
        </h1>

        <p className="text-gray-500 text-center mb-7">
          سجل بياناتك لطلب اعتماد الحساب
        </p>

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            type="text"
            placeholder="الاسم بالكامل"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            placeholder="رقم الموبايل"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition disabled:opacity-50"
          >
            {loading ? "جاري إنشاء الحساب..." : "إنشاء الحساب"}
          </button>

        </form>

        {message && (
          <div className="mt-5 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg p-4 text-center">
            {message}
          </div>
        )}

        <div className="text-center mt-6">
          <a
            href="/"
            className="text-blue-700 hover:underline"
          >
            العودة للرئيسية
          </a>
        </div>

      </div>
    </main>
  );
}