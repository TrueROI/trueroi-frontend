"use client";

export default function TestConnection() {
  const testBackend = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "frontendtest@example.com",
        password: "password123",
        name: "Kane"
      })
    });

    const data = await res.json();
    console.log("Backend response:", data);
  };

  return (
    <button onClick={testBackend} style={{ padding: "10px", background: "blue", color: "white" }}>
      Test Backend Connection
    </button>
  );
}
