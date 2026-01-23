import { createClient } from 'https://cdn.jsdelivr.net/npm/@neondatabase/neon-js@0.1.0-beta.22/+esm';

//put this into Scribbler - Edit - Secrets 
const NEON_AUTH_URL = scrib.getSecret('NEON_AUTH_URL');
const NEON_DATA_API_URL = scrib.getSecret('NEON_DATA_API_URL');
console.log(NEON_AUTH_URL);
console.log(NEON_DATA_API_URL);


// Database type generated via: npx @neondatabase/neon-js gen-types --db-url "..."
// See "TypeScript" section below for details

const client = createClient<Database>({
  auth: {
    url: import.meta.env.NEON_AUTH_URL,
	allowAnonymous: true, // Enable anonymous data access
  },
  dataApi: {
    url: import.meta.env.NEON_DATA_API_URL,
  },
});

await client.auth.signUp.email({
  email: 'user@example.com',
  password: 'secure-password',
  name: 'John Doe',
});

// Authenticate
await client.auth.signIn.email({
  email: 'user@example.com',
  password: 'secure-password',
});

// OAuth
await client.auth.signIn.social({
  provider: 'google',
  callbackURL: '/dashboard',
});

// Query database (token automatically injected)
const { data: users } = await client
  .from('users')
  .select('*')
  .eq('status', 'active');

// Get current session
const session = await client.auth.getSession();

// Sign out
await client.auth.signOut();

// Works without signing in - uses anonymous token for RLS
const { data: publicItems } = await client.from('public_items').select();

