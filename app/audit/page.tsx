import AuditClient from "../../components/AuditClient";

async function getDashboard() {
  const res = await fetch("http://localhost:3000/api/dashboard", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to load dashboard");
  }

  return res.json();
}

export default async function AuditPage() {
  let data = null;
  let error = false;

  try {
    data = await getDashboard();
  } catch {
    error = true;
  }

  return <AuditClient data={data} error={error} />;
}
