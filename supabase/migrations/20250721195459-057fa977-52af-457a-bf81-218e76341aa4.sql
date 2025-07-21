
-- Add end_time field to calendar_events table to support time frames
ALTER TABLE public.calendar_events 
ADD COLUMN end_time text;
