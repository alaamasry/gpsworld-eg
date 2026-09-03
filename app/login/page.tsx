"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleForgotPassword() {
  if (!email) {
    setMessage("اكتب البريد الإلكتروني أولًا.");
    return;
  }

  setLoading(true);
  setMessage("");

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  });

  if (error) {
    setMessage(`خطأ: ${error.message}`);
    setLoading(false);
    return;
  }

  setMessage(
    "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني."
  );

  setLoading(false);
}

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setMessage("");

    if (!email || !password) {
      setMessage("من فضلك اكتب البريد الإلكتروني وكلمة المرور.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(`خطأ: ${error.message}`);
      setLoading(false);
      return;
    }

    if (!data.user) {
      setMessage("حدث خطأ أثناء تسجيل الدخول.");
      setLoading(false);
      return;
    }

    const { data: account, error: accountError } = await supabase
      .from("customer_accounts")
      .select("status, full_name")
      .eq("id", data.user.id)
      .single();

    if (accountError) {
      setMessage(
        "تم تسجيل الدخول، ولكن لم يتم العثور على بيانات الحساب."
      );
      setLoading(false);
      return;
    }

    if (account.status !== "approved") {
      await supabase.auth.signOut();

      setMessage(
        "حسابك ما زال قيد المراجعة. سيتم تفعيل الحساب بعد موافقة الإدارة."
      );

      setLoading(false);
      return;
    }

    setMessage(`أهلًا بك ${account.full_name} ❤️`);

    setLoading(false);

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  }

  return (
    <main
      className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-10"
      dir="rtl"
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-7">

        <h1 className="text-3xl font-bold text-blue-900 text-center mb-3">
          تسجيل الدخول
        </h1>

        <p className="text-gray-500 text-center mb-7">
          ادخل إلى حسابك
        </p>

        <form onSubmit={handleLogin} className="space-y-4">

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
  {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
</button>

<button
  type="button"
  onClick={handleForgotPassword}
  disabled={loading}
  className="w-full text-blue-700 hover:underline mt-3"
>
  نسيت كلمة المرور؟
</button>

        </form>

        {message && (
          <div className="mt-5 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg p-4 text-center">
            {message}
          </div>
        )}

        <div className="text-center mt-6">
          <a
            href="/register"
            className="text-blue-700 hover:underline"
          >
            ليس لديك حساب؟ إنشاء حساب
          </a>
        </div>

        <div className="text-center mt-3">
          <a
            href="/"
            className="text-gray-600 hover:underline"
          >
            العودة للرئيسية
          </a>
        </div>

      </div>
    </main>
  );
}