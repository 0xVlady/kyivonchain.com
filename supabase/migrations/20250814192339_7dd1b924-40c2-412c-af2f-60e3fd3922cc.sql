-- Make the images bucket public so logos are always accessible
UPDATE storage.buckets 
SET public = true 
WHERE id = 'images';