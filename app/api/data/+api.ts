export async function GET() {
  console.log('📄 API Route: /api/data called at', new Date().toISOString());
  
  // Simulate database fetch
  console.log('🔄 Simulating database fetch...');
  await new Promise(resolve => setTimeout(resolve, 200));
  
  const data = {
    users: [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ],
    timestamp: new Date().toISOString()
  };
  
  console.log('✅ Data response ready:', data);
  return Response.json(data);
}