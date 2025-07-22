
# Database-Only Admin Setup

For security reasons, admin accounts can only be created through direct database access. This prevents unauthorized admin creation through the web interface.

## Creating Admin Users

### Step 1: Create a User Account
First, the user must sign up normally through the application's authentication system.

### Step 2: Grant Admin Role via Database
Once the user account exists, connect to your Supabase database and run the following SQL commands:

```sql
-- Replace 'admin@example.com' with the actual email address
-- This will find the user ID and grant admin role
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users
WHERE email = 'admin@example.com';
```

### Alternative: If you know the user UUID
```sql
-- Replace 'USER_UUID_HERE' with the actual user UUID
INSERT INTO public.user_roles (user_id, role)
VALUES ('USER_UUID_HERE', 'admin'::app_role);
```

### Step 3: Verify Admin Role
To verify the admin role was granted correctly:

```sql
-- Check admin roles
SELECT u.email, ur.role, ur.created_at
FROM auth.users u
JOIN public.user_roles ur ON u.id = ur.user_id
WHERE ur.role = 'admin';
```

## Revoking Admin Access

To remove admin privileges from a user:

```sql
-- Replace 'admin@example.com' with the actual email address
DELETE FROM public.user_roles
WHERE user_id = (
  SELECT id FROM auth.users WHERE email = 'admin@example.com'
) AND role = 'admin';
```

## Security Notes

- Admin roles can only be managed through direct database access
- The application's Row Level Security (RLS) policies prevent unauthorized role modifications
- All admin actions are logged and tracked through the database
- Regular users cannot escalate their own privileges

## Accessing the Admin Panel

Once an admin role is granted:
1. The user can sign in through the normal application interface
2. Click the "Admin" button to access the admin panel
3. The system will automatically verify admin privileges through the database
