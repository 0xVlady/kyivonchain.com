import { supabase } from '@/integrations/supabase/client';

export const createAdminUser = async (email: string, password: string) => {
  try {
    // First, sign up the user
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/`
      }
    });

    if (signUpError) {
      throw signUpError;
    }

    if (!signUpData.user) {
      throw new Error('User creation failed');
    }

    // Add admin role for the user
    const { error: roleError } = await supabase
      .from('user_roles')
      .insert({
        user_id: signUpData.user.id,
        role: 'admin'
      });

    if (roleError) {
      throw roleError;
    }

    return { success: true, user: signUpData.user };
  } catch (error) {
    console.error('Error creating admin user:', error);
    return { success: false, error };
  }
};

export const checkIsAdmin = async (userId: string): Promise<boolean> => {
  try {
    const { data, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .single();

    return !error && !!data;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
};

export const grantAdminRole = async (userId: string) => {
  try {
    const { error } = await supabase
      .from('user_roles')
      .upsert({
        user_id: userId,
        role: 'admin'
      });

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Error granting admin role:', error);
    return { success: false, error };
  }
};

export const revokeAdminRole = async (userId: string) => {
  try {
    const { error } = await supabase
      .from('user_roles')
      .delete()
      .eq('user_id', userId)
      .eq('role', 'admin');

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Error revoking admin role:', error);
    return { success: false, error };
  }
};