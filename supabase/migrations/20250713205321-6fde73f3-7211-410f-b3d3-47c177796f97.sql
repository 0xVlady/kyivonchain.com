-- Create tables for form submissions

-- Join Waitlist submissions
CREATE TABLE public.waitlist_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT,
  membership_tier TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Partner form submissions
CREATE TABLE public.partner_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  message TEXT,
  partnership_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Event hosting form submissions
CREATE TABLE public.event_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  event_title TEXT NOT NULL,
  event_description TEXT,
  expected_attendees INTEGER,
  preferred_date TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (making these publicly writable since no auth required)
ALTER TABLE public.waitlist_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partner_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for public insert (anonymous users can submit forms)
CREATE POLICY "Anyone can submit waitlist forms" 
ON public.waitlist_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit partner forms" 
ON public.partner_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit event forms" 
ON public.event_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_waitlist_submissions_updated_at
  BEFORE UPDATE ON public.waitlist_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_partner_submissions_updated_at
  BEFORE UPDATE ON public.partner_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_event_submissions_updated_at
  BEFORE UPDATE ON public.event_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();