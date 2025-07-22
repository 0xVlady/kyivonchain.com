
-- Add admin role for kyivonchain@gmail.com
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users
WHERE email = 'kyivonchain@gmail.com'
ON CONFLICT (user_id, role) DO NOTHING;

-- Add admin role for contact@kyivonchain.com
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users
WHERE email = 'contact@kyivonchain.com'
ON CONFLICT (user_id, role) DO NOTHING;
