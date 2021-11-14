CREATE TABLE [post](
  [id] VARCHAR(36), 
  [ref_id] VARCHAR(36), 
  [person_id] VARCHAR(36), 
  [status] SMALLINT, 
  [like_num] INTEGER NOT NULL DEFAULT 0, 
  [forward_num] INTEGER NOT NULL DEFAULT 0, 
  [content] TEXT, 
  [type] INT, 
  [create_time] DATETIME, 
  [images] TEXT);
