export async function GET() {
  console.log('🔥 About API called at', new Date().toISOString());
  
  try {
    // Fetch real server data
    const response = await fetch('https://httpbin.org/json');
    const httpbinData = await response.json();
    
    console.log('✅ Httpbin data received');
    
    return Response.json({
      serverTime: new Date().toISOString(),
      serverData: httpbinData,
      environment: 'SERVER API',
      buildId: 'api-' + Math.random().toString(36).substr(2, 9)
    });
  } catch (error) {
    console.error('❌ About API Error:', error);
    return Response.json({ error: 'Failed to fetch server data' }, { status: 500 });
  }
}