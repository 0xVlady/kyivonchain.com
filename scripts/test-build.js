
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Testing build process locally...\n');

// Clean up existing artifacts
console.log('1. Cleaning up existing build artifacts...');
try {
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true });
    console.log('   ✓ Removed dist directory');
  }
  if (fs.existsSync('node_modules')) {
    fs.rmSync('node_modules', { recursive: true });
    console.log('   ✓ Removed node_modules');
  }
  if (fs.existsSync('package-lock.json')) {
    fs.unlinkSync('package-lock.json');
    console.log('   ✓ Removed package-lock.json');
  }
  if (fs.existsSync('bun.lockb')) {
    fs.unlinkSync('bun.lockb');
    console.log('   ✓ Removed bun.lockb');
  }
} catch (error) {
  console.log('   ⚠️  Some cleanup failed:', error.message);
}

// Install dependencies
console.log('\n2. Installing dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('   ✓ Dependencies installed');
} catch (error) {
  console.error('   ❌ Failed to install dependencies');
  process.exit(1);
}

// Run TypeScript check
console.log('\n3. Running TypeScript check...');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('   ✓ TypeScript check passed');
} catch (error) {
  console.error('   ❌ TypeScript check failed');
  // Don't exit here, continue with build to see more errors
}

// Build the project
console.log('\n4. Building the project...');
try {
  execSync('npm run build', { 
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production',
      VITE_SUPABASE_URL: 'https://passtnsttaxaaauovxnz.supabase.co',
      VITE_SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhc3N0bnN0dGF4YWFhdW92eG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwODk3OTQsImV4cCI6MjA2NzY2NTc5NH0.fBJs5BUPXSXRTN3D3kq0zcaiMDCgESnzBpNOpBfK6Bc'
    }
  });
  console.log('   ✓ Build completed successfully');
} catch (error) {
  console.error('   ❌ Build failed');
  process.exit(1);
}

// Check build output
console.log('\n5. Checking build output...');
try {
  const distExists = fs.existsSync('dist');
  const indexExists = fs.existsSync('dist/index.html');
  
  if (distExists && indexExists) {
    console.log('   ✓ Build artifacts created successfully');
    
    // Get size of build
    const stats = fs.statSync('dist/index.html');
    console.log(`   📊 index.html size: ${stats.size} bytes`);
    
    // List assets
    const assets = fs.readdirSync('dist/assets');
    console.log(`   📦 Assets created: ${assets.length} files`);
    
  } else {
    console.error('   ❌ Build artifacts missing');
    process.exit(1);
  }
} catch (error) {
  console.error('   ❌ Failed to check build output:', error.message);
  process.exit(1);
}

console.log('\n🎉 Build test completed successfully!');
console.log('You can now test the built app by running: npx serve dist');
