export async function GET() {
  console.log(
    "🚀 API Route: /api/location called at",
    new Date().toISOString()
  );

  try {
    console.log("📡 Fetching from ipapi.co...");
    const response = await fetch("https://ipapi.co/json/");
    console.log("🔄 Response received with status:", response);
    const data = await response.json();
    console.log("✅ Location data received:", {
      data
    });

    return Response.json({
      ip: data.ip,
      city: data.city,
      country: data.country_name,
      timezone: data.timezone,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("❌ Location API Error:", error);
    return Response.json(
      { error: "Failed to fetch location" },
      { status: 500 }
    );
  }
}
