-- Fix search path vulnerabilities in database functions
-- Update the is_admin function to use fully qualified names and secure search path
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $function$
DECLARE
    user_admin boolean := false;
BEGIN
    -- Check if user has admin role using fully qualified names
    SELECT EXISTS (
        SELECT 1 
        FROM public.user_roles 
        WHERE user_id = auth.uid() 
        AND role = 'admin'::public.app_role
    ) INTO user_admin;
    
    RETURN user_admin;
END;
$function$;

-- Update the has_role function to ensure secure search path
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE 
SECURITY DEFINER
SET search_path TO ''
AS $function$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$function$;

-- Update the trigger function to ensure secure search path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $function$
BEGIN
    -- Update the updated_at column with the current timestamp
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$function$;