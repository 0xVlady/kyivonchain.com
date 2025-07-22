-- Add end_date column to calendar_events table for date range support
ALTER TABLE public.calendar_events 
ADD COLUMN end_date text;